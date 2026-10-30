import { describe, expect, it } from 'vitest'
import { buildPageHead } from '../usePageMeta'

const page = { title: 'Illustrations digitales', description: 'Des illustrations.' }

const metaOf = (head: ReturnType<typeof buildPageHead>) =>
  Object.fromEntries(head.meta.map((m) => ['name' in m ? m.name : m.property, m.content]))

describe('buildPageHead', () => {
  it('suffixe le titre avec « | Florian Leux »', () => {
    expect(buildPageHead(page, '/art/illustrations').title).toBe(
      'Illustrations digitales | Florian Leux'
    )
  })

  it('dérive og:title et og:description du titre et de la description', () => {
    const meta = metaOf(buildPageHead(page, '/art/illustrations'))
    expect(meta['description']).toBe('Des illustrations.')
    expect(meta['og:title']).toBe('Illustrations digitales | Florian Leux')
    expect(meta['og:description']).toBe('Des illustrations.')
  })

  it('aligne og:url sur la canonical', () => {
    const head = buildPageHead(page, '/art/illustrations')
    expect(head.link).toEqual([
      { rel: 'canonical', href: 'https://florianleux.fr/art/illustrations' },
    ])
    expect(metaOf(head)['og:url']).toBe('https://florianleux.fr/art/illustrations')
  })

  it('garde le slash final sur la racine', () => {
    const head = buildPageHead(page, '/')
    expect(head.link[0]?.href).toBe('https://florianleux.fr/')
    expect(metaOf(head)['og:url']).toBe('https://florianleux.fr/')
  })

  it("retire le slash final de l'URL visitée", () => {
    const head = buildPageHead(page, '/art/')
    expect(head.link[0]?.href).toBe('https://florianleux.fr/art')
    expect(metaOf(head)['og:url']).toBe('https://florianleux.fr/art')
  })

  it('utilise le logo comme image par défaut', () => {
    const meta = metaOf(buildPageHead(page, '/contact'))
    expect(meta['og:image']).toBe('https://florianleux.fr/sceau.png')
    expect(meta['twitter:image']).toBe('https://florianleux.fr/sceau.png')
  })

  it("rend absolue l'image fournie par la page", () => {
    const meta = metaOf(
      buildPageHead({ ...page, image: '/illustrations/abyss.webp' }, '/art/illustrations')
    )
    expect(meta['og:image']).toBe('https://florianleux.fr/illustrations/abyss.webp')
    expect(meta['twitter:image']).toBe('https://florianleux.fr/illustrations/abyss.webp')
  })

  it('ajoute les mots-clés seulement quand la page en fournit', () => {
    expect(metaOf(buildPageHead(page, '/')).keywords).toBeUndefined()
    expect(metaOf(buildPageHead({ ...page, keywords: 'a, b' }, '/')).keywords).toBe('a, b')
  })

  it('noindex : robots posé, ni canonical ni balises de partage', () => {
    const head = buildPageHead({ ...page, noindex: true }, '/nope')
    const meta = metaOf(head)
    expect(meta['robots']).toBe('noindex, nofollow')
    expect(head.link).toEqual([])
    expect(
      Object.keys(meta).filter((k) => k.startsWith('og:') || k.startsWith('twitter:'))
    ).toEqual([])
  })
})
