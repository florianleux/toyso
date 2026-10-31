/**
 * Écrit dans dist/ une page HTML par route du sitemap, avec son head déjà rendu,
 * pour les robots qui n'exécutent pas le JS (aperçus LinkedIn, Slack, X, Facebook),
 * puis dist/sitemap.xml, chaque route datée par le dernier commit de ses fichiers.
 * Lancé après `vite build` et `vite build --ssr src/entry-server.ts --outDir dist-ssr`.
 */
import { execFileSync } from 'node:child_process'
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import type { FileCommit, LastCommit, PrerenderResult } from '../src/utils/prerender'

// src/entry-server.ts n'est pas importable ici (il importe des .vue) : seule sa signature est décrite
interface ServerEntry {
  prerender(template: string, lastCommit: LastCommit): Promise<PrerenderResult>
}

const rootDir = resolve(import.meta.dirname, '..')
const distDir = resolve(rootDir, 'dist')
const ssrDir = resolve(rootDir, 'dist-ssr')

function git(...args: string[]): string {
  return execFileSync('git', args, { cwd: rootDir, encoding: 'utf8' })
}

// Sans historique complet, toutes les routes prendraient la date du dernier commit
if (git('rev-parse', '--is-shallow-repository').trim() === 'true') {
  console.error('Pré-rendu en échec\nDépôt git superficiel : les lastmod du sitemap seraient faux')
  process.exit(1)
}

// Fichiers pas encore commités, avec leur code de statut (-z : « XY chemin » par NUL,
// chemins jamais entre guillemets). Supprimé (D) : absent ; modifié ou nouveau : daté au build
const uncommitted = new Map<string, FileCommit>(
  git('status', '-z', '--no-renames', '--untracked-files=all')
    .split('\0')
    .filter(Boolean)
    .map((entry) => [entry.slice(3), entry.slice(0, 2).includes('D') ? 'absent' : 'uncommitted'])
)

// Fichiers suivis par git : hors de cette liste, l'historique daterait un ancien fichier
// du même chemin (supprimé ou retiré de l'index), donc une date fausse
const tracked = new Set(git('ls-files', '-z').split('\0').filter(Boolean))

// Date du dernier commit de chaque fichier, en un seul parcours de l'historique
// (un git log par fichier coûtait ~4 s pour ~250 fichiers). quotePath=false : chemins bruts.
// dense-combined : un merge ne liste que les fichiers qu'il a modifiés lui-même (conflit
// résolu), comme git log -1 -- fichier ; les autres gardent la date de leur commit d'origine
const history = git(
  '-c',
  'core.quotePath=false',
  'log',
  '--format=%x00%cI',
  '--name-only',
  '--no-renames',
  '--diff-merges=dense-combined',
  '--',
  'src/views',
  'public'
)
const commitDates = new Map<string, Date>()
for (const commit of history.split('\0').filter(Boolean)) {
  const [isoDate, ...files] = commit.split('\n').filter(Boolean)
  const date = new Date(isoDate!)
  for (const file of files) {
    const known = commitDates.get(file)
    if (!known || known < date) commitDates.set(file, date)
  }
}

const lastCommit: LastCommit = (file) => {
  const status = uncommitted.get(file)
  if (status) return status
  if (!tracked.has(file)) return 'absent'
  return commitDates.get(file) ?? 'absent'
}

const entry: ServerEntry = await import(pathToFileURL(resolve(ssrDir, 'entry-server.js')).href)
// Lu avant d'écrire les pages : la route / réécrit dist/index.html
const template = await readFile(resolve(distDir, 'index.html'), 'utf8')

const { pages, sitemap, failures } = await entry.prerender(template, lastCommit)
for (const { file, html } of pages) {
  const target = resolve(distDir, file)
  await mkdir(dirname(target), { recursive: true })
  await writeFile(target, html)
}

await writeFile(resolve(distDir, 'sitemap.xml'), sitemap)

await rm(ssrDir, { recursive: true, force: true })

if (failures.length > 0) {
  console.error(`Pré-rendu en échec\n${failures.join('\n')}`)
  process.exit(1)
}
console.log(`Pré-rendu : ${pages.length} pages écrites dans dist/`)
