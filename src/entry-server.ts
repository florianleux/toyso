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
} from './utils/prerender'

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
  const routerPaths = createAppRouter(createMemoryHistory())
    .getRoutes()
    .map((route) => route.path)
  const failures = unlistedRoutes(routerPaths, SITE_PATHS).map(
    (path) => `${path} : absente de src/router/paths.ts`
  )

  const pages: PrerenderResult['pages'] = []
  for (const path of SITE_PATHS) {
    const headTags = await renderHead(path)
    const missing = missingHeadTags(headTags)
    if (missing.length > 0) {
      failures.push(`${path} : ${missing.join(', ')}`)
      continue
    }
    pages.push({ file: routeFile(path), html: insertHead(template, headTags) })
  }

  return { pages, failures }
}
