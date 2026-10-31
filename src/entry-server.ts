/**
 * Entrée du build SSR, lue uniquement par scripts/prerender.ts.
 * Seul le head est gardé : le body est rendu pour exécuter les usePageMeta, puis jeté
 * après en avoir relevé les médias, qui datent la route dans le sitemap.
 */
import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { createMemoryHistory } from 'vue-router'
import { createHead, renderHeadToString } from '@vueuse/head'
import App from './App.vue'
import { createAppRouter } from './router'
import { SITE_PATHS } from './router/paths'
import {
  insertHead,
  mediaSrcs,
  missingHeadTags,
  pageLastmod,
  pageSources,
  routeFile,
  sitemapXml,
  unlistedRoutes,
  type LastCommit,
  type PrerenderResult,
  type PrerenderTarget,
  type RenderedPage,
  type SitemapEntry,
} from './utils/prerender'

// Rendue dans 404.html, que Netlify sert avec le statut 404 (public/_redirects) :
// /404 ne correspond à aucune route, donc le router rend NotFound
const NOT_FOUND: PrerenderTarget = { path: '/404', kind: 'notFound' }

async function renderPage(path: string): Promise<RenderedPage> {
  const app = createSSRApp(App)
  const router = createAppRouter(createMemoryHistory())
  const head = createHead()
  app.use(router)
  app.use(head)

  await router.push(path)
  await router.isReady()
  const context: { modules?: Set<string> } = {}
  const body = await renderToString(app, context)

  return {
    headTags: (await renderHeadToString(head)).headTags,
    modules: [...(context.modules ?? [])],
    srcs: mediaSrcs(body),
  }
}

export async function prerender(
  template: string,
  lastCommit: LastCommit
): Promise<PrerenderResult> {
  const buildTime = new Date()
  const router = createAppRouter(createMemoryHistory())
  const routerPaths = router.getRoutes().map((route) => route.path)
  const failures = unlistedRoutes(routerPaths, SITE_PATHS).map(
    (path) => `${path} : absente de src/router/paths.ts`
  )
  if (router.resolve(NOT_FOUND.path).name !== 'not-found') {
    failures.push(`${NOT_FOUND.path} : une route la capture, 404.html ne rendrait plus NotFound`)
  }

  const targets = [
    ...SITE_PATHS.map((path): PrerenderTarget => ({ path, kind: 'indexed' })),
    NOT_FOUND,
  ]
  const pages: PrerenderResult['pages'] = []
  const sitemap: SitemapEntry[] = []
  for (const { path, kind } of targets) {
    const rendered = await renderPage(path)
    const missing = missingHeadTags(rendered.headTags, kind)
    if (missing.length > 0) {
      failures.push(`${path} : ${missing.join(', ')}`)
      continue
    }
    pages.push({ file: routeFile(path), html: insertHead(template, rendered.headTags) })
    if (kind !== 'indexed') continue

    const dated = pageLastmod(pageSources(rendered), lastCommit, buildTime)
    if ('absentFiles' in dated) {
      failures.push(
        `${path} : introuvable sur le disque ou hors de git, impossible à dater (${dated.absentFiles.join(', ')})`
      )
      continue
    }
    sitemap.push({ path, lastmod: dated.lastmod })
  }

  return { pages, sitemap: sitemapXml(sitemap), failures }
}
