import { describe, expect, it } from 'vitest'
import { insertHead, missingHeadTags, routeFile, unlistedRoutes } from '../prerender'

describe('routeFile', () => {
  it("écrit l'accueil dans index.html", () => {
    expect(routeFile('/')).toBe('index.html')
  })

  it('écrit une route dans <route>.html, sans dossier index', () => {
    expect(routeFile('/art/characters/ant')).toBe('art/characters/ant.html')
  })
})

describe('insertHead', () => {
  const template =
    '<html><head><meta charset="UTF-8"></head><body><div id="app"></div></body></html>'

  it('ajoute le head de la page à la fin du <head> du template', () => {
    expect(insertHead(template, '<title>Ant | Florian Leux</title>')).toBe(
      '<html><head><meta charset="UTF-8"><title>Ant | Florian Leux</title></head><body><div id="app"></div></body></html>'
    )
  })

  it("échoue si le template n'a pas de </head>", () => {
    expect(() => insertHead('<html><body></body></html>', '<title>x</title>')).toThrow()
  })
})

describe('missingHeadTags', () => {
  const complete = [
    '<title>Ant | Florian Leux</title>',
    '<meta property="og:image" content="https://florianleux.fr/characters/ant.webp">',
    '<link rel="canonical" href="https://florianleux.fr/art/characters/ant">',
  ].join('')

  it('ne signale rien quand title, canonical et og:image sont présents', () => {
    expect(missingHeadTags(complete)).toEqual([])
  })

  it('liste les balises absentes', () => {
    expect(missingHeadTags('<title>Ant | Florian Leux</title>')).toEqual(['canonical', 'og:image'])
  })

  it('signale un title vide', () => {
    expect(missingHeadTags(complete.replace('Ant | Florian Leux', ''))).toEqual(['title'])
  })
})

describe('unlistedRoutes', () => {
  it('signale une page du router absente de la liste du site', () => {
    expect(unlistedRoutes(['/', '/contact', '/dev/nouvelle-page'], ['/', '/contact'])).toEqual([
      '/dev/nouvelle-page',
    ])
  })

  it('ignore les routes à paramètre et le catch-all, couvertes autrement', () => {
    expect(
      unlistedRoutes(['/', '/art/characters/:id', '/:pathMatch(.*)*'], ['/', '/art/characters/ant'])
    ).toEqual([])
  })
})
