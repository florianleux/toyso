import { useHead } from '@vueuse/head'

/**
 * Add structured data (JSON-LD) for a Person/Creator schema
 * This helps Google understand your dual identity as dev + illustrator
 */
export function usePersonSchema() {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Florian Leux',
          alternateName: 'Toyso',
          url: 'https://florianleux.fr',
          image: 'https://florianleux.fr/sceau.png',
          sameAs: [
            'https://github.com/florianleux', // TODO: Vérifier l'URL exacte de ton GitHub
            'https://www.linkedin.com/in/florian-leux', // TODO: Vérifier l'URL exacte
            'https://www.instagram.com/toyso', // TODO: Vérifier l'URL exacte
          ],
          jobTitle: ['Développeur Frontend Senior', 'Illustrateur Freelance'],
          worksFor: {
            '@type': 'Organization',
            name: 'Freelance',
          },
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Bordeaux',
            addressCountry: 'FR',
          },
          knowsAbout: [
            'Développement Web',
            'Vue.js',
            'Frontend Development',
            'Illustration Digitale',
            'Direction Artistique',
            'Character Design',
            'Animation 2D',
          ],
        }),
      },
    ],
  })
}

/**
 * Add structured data for an artwork/creative work
 */
export function useCreativeWorkSchema(artwork: {
  name: string
  description: string
  image: string
  url: string
  dateCreated?: string
}) {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: artwork.name,
          description: artwork.description,
          image: artwork.image,
          url: artwork.url,
          creator: {
            '@type': 'Person',
            name: 'Florian Leux',
            alternateName: 'Toyso',
          },
          dateCreated: artwork.dateCreated,
          inLanguage: 'fr-FR',
        }),
      },
    ],
  })
}

/**
 * Add breadcrumb structured data for better navigation in search results
 */
export function useBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumbs.map((crumb, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: crumb.name,
            item: crumb.url,
          })),
        }),
      },
    ],
  })
}

/**
 * Add portfolio/collection structured data
 */
export function usePortfolioSchema() {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Portfolio Illustrations Toyso',
          description:
            "Collection d'illustrations digitales, animations et dessins traditionnels par Toyso (Florian Leux)",
          url: 'https://florianleux.fr/art',
          creator: {
            '@type': 'Person',
            name: 'Florian Leux',
            alternateName: 'Toyso',
          },
        }),
      },
    ],
  })
}
