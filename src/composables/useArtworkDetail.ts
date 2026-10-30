import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'
import type { Artwork, ArtworkCollection } from '@/types/artwork'
import { SITE_URL, findArtwork, imageUrl, randomOtherRoute } from '@/utils/collection'

export interface DetailMeta {
  title: string
  description: string
  keywords: string
  ogTitle: string
  ogDescription: string
}

/**
 * Page détail d'une œuvre : lookup par `:id`, lien vers une autre œuvre et méta SEO.
 * `meta` reçoit l'œuvre (ou undefined si introuvable) et rend les textes propres à la collection.
 */
export function useArtworkDetail(
  collection: ArtworkCollection,
  meta: (artwork: Artwork | undefined) => DetailMeta
) {
  const route = useRoute()

  const artwork = computed(() => findArtwork(collection, route.params.id))

  const nextRoute = computed(() => randomOtherRoute(collection, route.params.id))

  useHead(
    computed(() => {
      const texts = meta(artwork.value)
      const image = artwork.value
        ? `${SITE_URL}${imageUrl(collection, artwork.value)}`
        : `${SITE_URL}/sceau.png`
      const url = `${SITE_URL}${collection.detail?.basePath}/${route.params.id}`

      return {
        title: texts.title,
        meta: [
          { name: 'description', content: texts.description },
          { name: 'keywords', content: texts.keywords },
          { property: 'og:title', content: texts.ogTitle },
          { property: 'og:description', content: texts.ogDescription },
          { property: 'og:image', content: image },
          { property: 'og:url', content: url },
          { name: 'twitter:image', content: image },
        ],
        link: [{ rel: 'canonical', href: url }],
      }
    })
  )

  return { artwork, nextRoute }
}
