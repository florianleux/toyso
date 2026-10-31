/**
 * Écrit dans dist/ une page HTML par route du sitemap, avec son head déjà rendu,
 * pour les robots qui n'exécutent pas le JS (aperçus LinkedIn, Slack, X, Facebook).
 * Lancé après `vite build` et `vite build --ssr src/entry-server.ts --outDir dist-ssr`.
 */
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import type { PrerenderResult } from '../src/utils/prerender'

// src/entry-server.ts n'est pas importable ici (il importe des .vue) : seule sa signature est décrite
interface ServerEntry {
  prerender(template: string): Promise<PrerenderResult>
}

const distDir = resolve(import.meta.dirname, '../dist')
const ssrDir = resolve(import.meta.dirname, '../dist-ssr')

const entry: ServerEntry = await import(pathToFileURL(resolve(ssrDir, 'entry-server.js')).href)
// Lu avant d'écrire les pages : la route / réécrit dist/index.html
const template = await readFile(resolve(distDir, 'index.html'), 'utf8')

const { pages, failures } = await entry.prerender(template)
for (const { file, html } of pages) {
  const target = resolve(distDir, file)
  await mkdir(dirname(target), { recursive: true })
  await writeFile(target, html)
}

await rm(ssrDir, { recursive: true, force: true })

if (failures.length > 0) {
  console.error(`Pré-rendu en échec\n${failures.join('\n')}`)
  process.exit(1)
}
console.log(`Pré-rendu : ${pages.length} pages écrites dans dist/`)
