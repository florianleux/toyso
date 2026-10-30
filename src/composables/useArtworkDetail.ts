import { computed } from 'vue'
import { useRoute } from 'vue-router'
import type { Artwork, ArtworkCollection } from '@/types/artwork'
import { findArtwork, imageUrl, randomOtherRoute } from '@/utils/collection'
import { usePageMeta, type PageMeta } from '@/composables/usePageMeta'

/**
 * Page détail d'une œuvre : lookup par `:id`, lien vers une autre œuvre et méta SEO.
 * `meta` reçoit l'œuvre (ou undefined si introuvable) et rend les textes propres à la collection ;
 * l'image de partage est celle de l'œuvre.
 */
export function useArtworkDetail(
  collection: ArtworkCollection,
  meta: (artwork: Artwork | undefined) => Omit<PageMeta, 'image'>
) {
  const route = useRoute()

  const artwork = computed(() => findArtwork(collection, route.params.id))

  const nextRoute = computed(() => randomOtherRoute(collection, route.params.id))

  usePageMeta(() => ({
    ...meta(artwork.value),
    image: artwork.value && imageUrl(collection, artwork.value),
  }))

  return { artwork, nextRoute }
}
