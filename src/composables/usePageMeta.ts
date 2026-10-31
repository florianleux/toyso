import { computed, toValue, type MaybeRefOrGetter } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'
import { canonicalUrl, DEFAULT_SHARE_IMAGE, SITE_URL, TITLE_SUFFIX } from '@/constants/site'

export interface PageMeta {
  // Titre court, sans le nom : le suffixe « | Florian Leux » est ajouté ici
  title: string
  description: string
  keywords?: string
  // Chemin depuis la racine du site (ex. /illustrations/abyss.webp), logo par défaut
  image?: string
  noindex?: boolean
}

type MetaTag = { name: string; content: string } | { property: string; content: string }
type LinkTag = { rel: string; href: string }

interface PageHead {
  title: string
  meta: MetaTag[]
  link: LinkTag[]
}

/**
 * Balises SEO d'une page : og:*, twitter:image et canonical sont dérivés du titre,
 * de la description et du chemin, pour qu'ils ne puissent pas diverger.
 */
export function buildPageHead(page: PageMeta, path: string): PageHead {
  const title = `${page.title}${TITLE_SUFFIX}`
  const meta: MetaTag[] = [{ name: 'description', content: page.description }]
  if (page.keywords) meta.push({ name: 'keywords', content: page.keywords })

  if (page.noindex) {
    meta.push({ name: 'robots', content: 'noindex, nofollow' })
    return { title, meta, link: [] }
  }

  const url = canonicalUrl(path)
  const image = `${SITE_URL}${page.image ?? DEFAULT_SHARE_IMAGE}`
  meta.push(
    { property: 'og:title', content: title },
    { property: 'og:description', content: page.description },
    { property: 'og:image', content: image },
    { property: 'og:url', content: url },
    { name: 'twitter:image', content: image }
  )

  return { title, meta, link: [{ rel: 'canonical', href: url }] }
}

export function usePageMeta(page: MaybeRefOrGetter<PageMeta>) {
  const route = useRoute()
  useHead(computed(() => buildPageHead(toValue(page), route.path)))
}
