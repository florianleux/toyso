/**
 * Pré-rendu au build : une page HTML par route du sitemap, avec son head, puis le sitemap,
 * chaque route datée par le dernier commit de ses fichiers.
 * Fichiers <route>.html plutôt que <route>/index.html : Netlify les sert sans redirection
 * vers un slash final, donc l'URL servie reste celle de la canonical.
 */
import { canonicalUrl } from '../constants/site'

// Ce que git sait d'un fichier : la date de son dernier commit, une modification pas encore
// commitée, ou rien (fichier absent du dépôt ou ignoré)
export type FileCommit = Date | 'uncommitted' | 'absent'

// Lue avec git par scripts/prerender.ts, passée à l'entrée SSR qui ne lit pas git
export type LastCommit = (file: string) => FileCommit

// Contrat entre src/entry-server.ts et scripts/prerender.ts
export interface PrerenderResult {
  pages: { file: string; html: string }[]
  // dist/sitemap.xml, une entrée par route indexée
  sitemap: string
  failures: string[]
}

export function routeFile(path: string): string {
  return path === '/' ? 'index.html' : `${path.slice(1)}.html`
}

export function insertHead(template: string, head: string): string {
  if (!template.includes('</head>')) throw new Error("Le template HTML n'a pas de </head>")
  return template.replace('</head>', `${head}</head>`)
}

const TITLE = /<title[^>]*>[^<]+<\/title>/

// Garde du build : une page partagée sans ces balises redonne la carte générique,
// et une page 404 sans noindex serait indexée
const REQUIRED_TAGS = {
  indexed: {
    title: TITLE,
    canonical: /<link(?=[^>]*\brel="canonical")(?=[^>]*\bhref="[^"]+")[^>]*>/,
    'og:image': /<meta(?=[^>]*\bproperty="og:image")(?=[^>]*\bcontent="[^"]+")[^>]*>/,
  },
  notFound: {
    title: TITLE,
    'robots noindex': /<meta(?=[^>]*\bname="robots")(?=[^>]*\bcontent="[^"]*noindex)[^>]*>/,
  },
}

// Une page à écrire dans dist/ : la route rendue et les balises exigées
export interface PrerenderTarget {
  path: string
  kind: keyof typeof REQUIRED_TAGS
}

export function missingHeadTags(head: string, kind: PrerenderTarget['kind']): string[] {
  return Object.entries(REQUIRED_TAGS[kind])
    .filter(([, pattern]) => !pattern.test(head))
    .map(([tag]) => tag)
}

// Pages statiques du router oubliées dans SITE_PATHS : absentes du sitemap et du pré-rendu
export function unlistedRoutes(routerPaths: string[], sitePaths: string[]): string[] {
  return routerPaths.filter((path) => !path.includes(':') && !sitePaths.includes(path))
}

// Ce qu'une route a rendu : son head, les modules Vue enregistrés par le rendu SSR
// et les médias du body
export interface RenderedPage {
  headTags: string
  modules: string[]
  srcs: string[]
}

const MEDIA_TAG = /<(?:img|video|source)\b[^>]*>/g
const SRC = /\ssrc="([^"]+)"/

// src des médias du body. Ceux marqués data-no-lastmod (logo du Header, placeholders
// d'Image et Video) sont rendus sur toutes les pages : ils ne datent aucune page
export function mediaSrcs(body: string): string[] {
  return [...body.matchAll(MEDIA_TAG)]
    .map(([tag]) => tag)
    .filter((tag) => !/\sdata-no-lastmod\b/.test(tag))
    .flatMap((tag) => SRC.exec(tag)?.[1] ?? [])
}

// /dossier/fichier.ext, servi depuis public/ ; exclut https:// et //hôte
const LOCAL_SRC = /^\/(?!\/)/

// Fichiers dont dépend le contenu d'une route, pour dater son lastmod :
// sa vue et ses médias, sans le code partagé
export function pageSources({ modules, srcs }: Pick<RenderedPage, 'modules' | 'srcs'>): string[] {
  const views = modules.filter((module) => module.startsWith('src/views/'))
  const media = srcs.filter((src) => LOCAL_SRC.test(src)).map((src) => `public${src}`)
  return [...new Set([...views, ...media])].sort()
}

// lastmod d'une route : le dernier commit parmi ses fichiers. Un fichier pas encore commité
// date la route au build ; un fichier absent du dépôt (src mal écrit, fichier ignoré) n'a pas
// de date fiable : il est signalé plutôt que daté au build, ce qui changerait à chaque build
export function pageLastmod(
  sources: string[],
  lastCommit: LastCommit,
  buildTime: Date
): { lastmod: Date } | { absentFiles: string[] } {
  const commits = sources.map((file) => ({ file, commit: lastCommit(file) }))
  const absentFiles = commits.filter(({ commit }) => commit === 'absent').map(({ file }) => file)
  if (absentFiles.length > 0) return { absentFiles }
  if (commits.some(({ commit }) => commit === 'uncommitted')) return { lastmod: buildTime }
  const dates = commits.map(({ commit }) => commit).filter((commit) => commit instanceof Date)
  return { lastmod: new Date(Math.max(...dates.map((date) => date.getTime()))) }
}

// Le texte d'un élément XML n'a que ces trois caractères réservés
const XML_ESCAPES: Record<string, string> = { '&': '&amp;', '<': '&lt;', '>': '&gt;' }

export interface SitemapEntry {
  path: string
  lastmod: Date
}

// Seuls loc et lastmod : Google ignore changefreq et priority
export function sitemapXml(entries: SitemapEntry[]): string {
  const urls = entries.map(
    ({ path, lastmod }) =>
      `  <url><loc>${escapeXml(canonicalUrl(path))}</loc><lastmod>${lastmod.toISOString()}</lastmod></url>`
  )
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls,
    '</urlset>',
    '',
  ].join('\n')
}

function escapeXml(text: string): string {
  return text.replace(/[&<>]/g, (char) => XML_ESCAPES[char]!)
}
