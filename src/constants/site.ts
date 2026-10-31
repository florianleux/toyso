// Source unique de l'adresse du site : méta, sitemap, JSON-LD et collections la lisent ici
export const SITE_URL = 'https://florianleux.fr'

// URL canonique d'une page : vue-router accepte aussi /art/, la canonical et le sitemap
// ne doivent pas dépendre de l'URL tapée
export function canonicalUrl(path: string): string {
  return `${SITE_URL}${path.replace(/\/+$/, '') || '/'}`
}

export const TITLE_SUFFIX = ' | Florian Leux'

export const DEFAULT_SHARE_IMAGE = '/sceau.png'
