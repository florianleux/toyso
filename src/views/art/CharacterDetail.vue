<template>
  <div>
    <Breadcrumb :custom-label="artwork?.title" />

    <div v-if="artwork">
      <div class="text-subtitle font-dm">un personnage nommé </div>
      <div class="text-title mb-[3vw] text-highlight font-gasoek lowercase">
        {{ artwork.title }}
      </div>

      <div class="grid grid-cols-1 gap-[16px]" :key="artwork.fileName">
        <div>
          <Image
            class="max-w-[1000px] max-h-[85vh] mx-auto"
            :src="`/characters/${artwork.fileName}.webp`"
            :alt="sketchAlt"
            :ratio="artwork.ratio"
          />
        </div>
      </div>
      <p class="text-body text-right font-dm mt-[3vw]">
        Vous pouvez en découvrir
        <router-link :to="getRandomArtworkUrl()" class="text-marker cursor-pointer">
          un autre
        </router-link>
        ou revenir à la liste des
        <router-link :to="{ name: 'characters' }" class="text-marker cursor-pointer">
          personnages
        </router-link>
      </p>
    </div>

    <div v-else class="text-center text-subtitle font-dm mt-[5vw]">Personnage non trouvé</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'
import { CHARACTERS } from '@/constants/images'
import { getSketchAlt } from '@/utils/altText'
import Breadcrumb from '@/components/Breadcrumb.vue'
import Image from '@/components/Image.vue'

const route = useRoute()

const artwork = computed(() => {
  return CHARACTERS.artworks.find((artwork) => artwork.fileName === route.params.id)
})

// Alt text SEO
const sketchAlt = computed(() => (artwork.value ? getSketchAlt(artwork.value.title) : ''))

const getRandomArtworkUrl = () => {
  const otherArtworks = CHARACTERS.artworks.filter((art) => art.fileName !== route.params.id)
  const list = otherArtworks.length > 0 ? otherArtworks : CHARACTERS.artworks
  const randomArtwork = list[Math.floor(Math.random() * list.length)]
  return {
    name: 'character',
    params: { id: randomArtwork?.fileName || CHARACTERS.artworks[0]!.fileName },
  }
}

// Dynamic meta tags based on artwork
useHead(
  computed(() => ({
    title: artwork.value
      ? `${artwork.value.title} - Character design par Florian Leux (Toyso) | Portfolio`
      : 'Character Design - Florian Leux (Toyso) Portfolio',
    meta: [
      {
        name: 'description',
        content: artwork.value
          ? `Découvrez le character design "${artwork.value.title}" par Florian Leux (Toyso), illustrateur et character designer freelance.`
          : 'Character design et création de personnages par Florian Leux (Toyso).',
      },
      {
        name: 'keywords',
        content: `${artwork.value?.title || 'character design'}, création personnage, character design, florian leux, toyso, illustration digitale`,
      },
      {
        property: 'og:title',
        content: artwork.value
          ? `${artwork.value.title} - Florian Leux (Toyso)`
          : 'Character Design - Florian Leux (Toyso)',
      },
      {
        property: 'og:description',
        content: artwork.value
          ? `Détails du character design "${artwork.value.title}" par Florian Leux (Toyso)`
          : 'Détails du character design',
      },
      {
        property: 'og:image',
        content: artwork.value
          ? `https://florianleux.fr/characters/${artwork.value.fileName}.jpg`
          : 'https://florianleux.fr/sceau.png',
      },
      {
        property: 'og:url',
        content: `https://florianleux.fr/art/characters/${route.params.id}`,
      },
      {
        name: 'twitter:image',
        content: artwork.value
          ? `https://florianleux.fr/characters/${artwork.value.fileName}.jpg`
          : 'https://florianleux.fr/sceau.png',
      },
    ],
    link: [
      {
        rel: 'canonical',
        href: `https://florianleux.fr/art/characters/${route.params.id}`,
      },
    ],
  }))
)
</script>
