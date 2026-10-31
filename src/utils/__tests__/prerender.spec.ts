import { describe, expect, it } from 'vitest'
import {
  insertHead,
  missingHeadTags,
  pageLastmod,
  mediaSrcs,
  pageSources,
  routeFile,
  sitemapXml,
  unlistedRoutes,
  type FileCommit,
} from '../prerender'

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
    expect(missingHeadTags(complete, 'indexed')).toEqual([])
  })

  it('liste les balises absentes', () => {
    expect(missingHeadTags('<title>Ant | Florian Leux</title>', 'indexed')).toEqual([
      'canonical',
      'og:image',
    ])
  })

  it('signale un title vide', () => {
    expect(missingHeadTags(complete.replace('Ant | Florian Leux', ''), 'indexed')).toEqual([
      'title',
    ])
  })

  describe('page 404', () => {
    const notFound = [
      '<title>Page introuvable | Florian Leux</title>',
      '<meta name="robots" content="noindex, nofollow">',
    ].join('')

    it('demande un title et noindex, sans canonical ni og:image', () => {
      expect(missingHeadTags(notFound, 'notFound')).toEqual([])
    })

    it('signale une page 404 indexable', () => {
      expect(missingHeadTags('<title>Page introuvable | Florian Leux</title>', 'notFound')).toEqual(
        ['robots noindex']
      )
    })
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

describe('mediaSrcs', () => {
  it('relève les src des images, vidéos et sources du body', () => {
    expect(
      mediaSrcs(
        '<div><img class="a" src="/ahoy/ahoy-accueil.webp"><video src="/timelapses/abyss.mp4"></video>' +
          '<picture><source src="/inkings/abyss.webp"></picture></div>'
      )
    ).toEqual(['/ahoy/ahoy-accueil.webp', '/timelapses/abyss.mp4', '/inkings/abyss.webp'])
  })

  it('ignore les médias marqués data-no-lastmod (logo, placeholders), communs à toutes les pages', () => {
    expect(
      mediaSrcs(
        '<img data-no-lastmod="" src="/sceau.png"><img src="/placeholders/placeholder-portrait.webp" data-no-lastmod>' +
          '<img src="/illustrations/abyss.webp">'
      )
    ).toEqual(['/illustrations/abyss.webp'])
  })
})

describe('pageSources', () => {
  it('garde la vue de la route et les médias du dossier public/ qu’elle affiche', () => {
    expect(
      pageSources({
        modules: ['src/App.vue', 'src/components/Header.vue', 'src/views/dev/Ahoy.vue'],
        srcs: ['/ahoy/ahoy-accueil.webp'],
      })
    ).toEqual(['public/ahoy/ahoy-accueil.webp', 'src/views/dev/Ahoy.vue'])
  })

  it('ignore les URL externes, hors du dépôt', () => {
    expect(
      pageSources({
        modules: ['src/views/dev/Home.vue'],
        srcs: ['https://www.youtube.com/embed/abc', '//cdn.example.com/x.png'],
      })
    ).toEqual(['src/views/dev/Home.vue'])
  })

  it('liste chaque fichier une fois, même affiché plusieurs fois', () => {
    expect(
      pageSources({
        modules: ['src/views/art/All.vue'],
        srcs: ['/studies/hands.webp', '/studies/hands.webp'],
      })
    ).toEqual(['public/studies/hands.webp', 'src/views/art/All.vue'])
  })
})

describe('pageLastmod', () => {
  const buildTime = new Date('2026-10-31T20:00:00Z')
  const commits: Record<string, FileCommit> = {
    'src/views/dev/Ahoy.vue': new Date('2025-10-03T21:29:35Z'),
    'public/ahoy/ahoy-accueil.webp': new Date('2026-10-30T21:45:36Z'),
    'public/ahoy/ahoy-flotte.webp': new Date('2025-10-02T14:36:42Z'),
    'src/views/Contact.vue': 'uncommitted',
    'public/ahoy/ahoy-typo.webp': 'absent',
  }
  const lastCommit = (file: string) => commits[file]!

  it('date la page à son fichier modifié le plus récemment', () => {
    expect(
      pageLastmod(
        ['public/ahoy/ahoy-accueil.webp', 'public/ahoy/ahoy-flotte.webp', 'src/views/dev/Ahoy.vue'],
        lastCommit,
        buildTime
      )
    ).toEqual({ lastmod: new Date('2026-10-30T21:45:36Z') })
  })

  it("date à l'heure du build une page dont un fichier n'est pas encore commité", () => {
    expect(
      pageLastmod(['public/ahoy/ahoy-accueil.webp', 'src/views/Contact.vue'], lastCommit, buildTime)
    ).toEqual({ lastmod: buildTime })
  })

  it('liste les fichiers absents du dépôt, que git ne peut pas dater', () => {
    expect(
      pageLastmod(['public/ahoy/ahoy-typo.webp', 'src/views/dev/Ahoy.vue'], lastCommit, buildTime)
    ).toEqual({ absentFiles: ['public/ahoy/ahoy-typo.webp'] })
  })

  it("signale un fichier absent même si un autre fichier n'est pas encore commité", () => {
    expect(
      pageLastmod(['public/ahoy/ahoy-typo.webp', 'src/views/Contact.vue'], lastCommit, buildTime)
    ).toEqual({ absentFiles: ['public/ahoy/ahoy-typo.webp'] })
  })
})

describe('sitemapXml', () => {
  it("liste chaque route avec sa loc et son lastmod, dans l'ordre reçu", () => {
    expect(
      sitemapXml([
        { path: '/', lastmod: new Date('2026-10-30T21:45:36Z') },
        { path: '/dev/ahoy', lastmod: new Date('2025-10-03T21:29:35Z') },
      ])
    ).toBe(
      [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        '  <url><loc>https://florianleux.fr/</loc><lastmod>2026-10-30T21:45:36.000Z</lastmod></url>',
        '  <url><loc>https://florianleux.fr/dev/ahoy</loc><lastmod>2025-10-03T21:29:35.000Z</lastmod></url>',
        '</urlset>',
        '',
      ].join('\n')
    )
  })

  it('échappe les caractères réservés du XML dans la loc', () => {
    expect(
      sitemapXml([{ path: '/art/fish&chips', lastmod: new Date('2026-10-30T21:45:36Z') }])
    ).toContain('<loc>https://florianleux.fr/art/fish&amp;chips</loc>')
  })
})
