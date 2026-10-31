/**
 * Pré-rendu du head au build : une page HTML par route du sitemap.
 * Fichiers <route>.html plutôt que <route>/index.html : Netlify les sert sans redirection
 * vers un slash final, donc l'URL servie reste celle de la canonical.
 */
// Contrat entre src/entry-server.ts et scripts/prerender.ts
export interface PrerenderResult {
  pages: { file: string; html: string }[]
  failures: string[]
}

export function routeFile(path: string): string {
  return path === '/' ? 'index.html' : `${path.slice(1)}.html`
}

export function insertHead(template: string, head: string): string {
  if (!template.includes('</head>')) throw new Error("Le template HTML n'a pas de </head>")
  return template.replace('</head>', `${head}</head>`)
}

// Garde du build : une page partagée sans ces balises redonne la carte générique
const REQUIRED_TAGS = {
  title: /<title[^>]*>[^<]+<\/title>/,
  canonical: /<link(?=[^>]*\brel="canonical")(?=[^>]*\bhref="[^"]+")[^>]*>/,
  'og:image': /<meta(?=[^>]*\bproperty="og:image")(?=[^>]*\bcontent="[^"]+")[^>]*>/,
}

export function missingHeadTags(head: string): string[] {
  return Object.entries(REQUIRED_TAGS)
    .filter(([, pattern]) => !pattern.test(head))
    .map(([tag]) => tag)
}

// Pages statiques du router oubliées dans SITE_PATHS : absentes du sitemap et du pré-rendu
export function unlistedRoutes(routerPaths: string[], sitePaths: string[]): string[] {
  return routerPaths.filter((path) => !path.includes(':') && !sitePaths.includes(path))
}
