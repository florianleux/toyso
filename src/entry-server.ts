/**
 * Entrée du build SSR, lue uniquement par scripts/prerender.ts.
 * Seul le head est gardé : le body est rendu pour exécuter les usePageMeta, puis jeté.
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
  missingHeadTags,
  routeFile,
  unlistedRoutes,
  type PrerenderResult,
  type PrerenderTarget,
} from './utils/prerender'

// Rendue dans 404.html, que Netlify sert avec le statut 404 (public/_redirects) :
// /404 ne correspond à aucune route, donc le router rend NotFound
const NOT_FOUND: PrerenderTarget = { path: '/404', kind: 'notFound' }

async function renderHead(path: string): Promise<string> {
  const app = createSSRApp(App)
  const router = createAppRouter(createMemoryHistory())
  const head = createHead()
  app.use(router)
  app.use(head)

  await router.push(path)
  await router.isReady()
  await renderToString(app)

  return (await renderHeadToString(head)).headTags
}

export async function prerender(template: string): Promise<PrerenderResult> {
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
  for (const { path, kind } of targets) {
    const headTags = await renderHead(path)
    const missing = missingHeadTags(headTags, kind)
    if (missing.length > 0) {
      failures.push(`${path} : ${missing.join(', ')}`)
      continue
    }
    pages.push({ file: routeFile(path), html: insertHead(template, headTags) })
  }

  return { pages, failures }
}
