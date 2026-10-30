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
            'https://github.com/florianleux',
            'https://www.linkedin.com/in/florian-leux-255b9384/',
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
