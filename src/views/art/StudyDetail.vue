<template>
  <div>
    <Breadcrumb :custom-label="artwork?.title" />

    <div v-if="artwork">
      <div class="text-subtitle font-dm">une planche d'études sur </div>
      <div class="text-title mb-[3vw] text-highlight font-gasoek lowercase">
        {{ artwork.title }}
      </div>
      <p class="text-body text-right font-dm mb-[3vw]">
        Vous pouvez en découvrir
        <router-link :to="getRandomArtworkUrl()" class="text-marker cursor-pointer">
          une autre
        </router-link>
        ou revenir à la liste des
        <router-link :to="{ name: 'studies' }" class="text-marker cursor-pointer">
          planches d'études
        </router-link>
      </p>
      <div class="grid grid-cols-1 gap-[16px]" :key="artwork.fileName">
        <div>
          <Image class="w-full max-w-[1000px] mx-auto h-full object-cover" :src="`/studies/${artwork.fileName}.webp`"
            :alt="sketchAlt" :ratio="artwork.ratio" />
        </div>
      </div>
    </div>

    <div v-else class="text-center text-subtitle font-dm mt-[5vw]">Planche d'études non trouvée</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'
import { STUDIES } from '@/constants/images'
import { getSketchAlt } from '@/utils/altText'
import Breadcrumb from '@/components/Breadcrumb.vue'
import Image from '@/components/Image.vue'
import Video from '@/components/Video.vue'
const route = useRoute()

const artwork = computed(() => {
  return STUDIES.artworks.find((artwork) => artwork.fileName === route.params.id)
})

// Alt text SEO
const sketchAlt = computed(() => (artwork.value ? getSketchAlt(artwork.value.title) : ''))

const getRandomArtworkUrl = () => {
  const otherArtworks = STUDIES.artworks.filter((art) => art.fileName !== route.params.id)
  const list = otherArtworks.length > 0 ? otherArtworks : STUDIES.artworks
  const randomArtwork = list[Math.floor(Math.random() * list.length)]
  return {
    name: 'study',
    params: { id: randomArtwork?.fileName || STUDIES.artworks[0]!.fileName },
  }
}

// Dynamic meta tags based on artwork
useHead(
  computed(() => ({
    title: artwork.value
      ? `${artwork.value.title} - Planche d\'études par Florian Leux (Toyso) | Processus de Création`
      : 'Planche d\'études - Florian Leux (Toyso) Portfolio',
    meta: [
      {
        name: 'description',
        content: artwork.value
          ? `Découvrez le processus de création complet de la planche d'études "${artwork.value.title}" par Florian Leux (Toyso) : du croquis au résultat final avec timelapse.`
          : "Processus de création d'illustrations digitales par Florian Leux (Toyso).",
      },
      {
        name: 'keywords',
        content: `${artwork.value?.title || 'planche d\'études'}, processus création planche d'études, timelapse planche d'études, florian leux, toyso, planche d'études digitale`,
      },
      {
        property: 'og:title',
        content: artwork.value
          ? `${artwork.value.title} - Florian Leux (Toyso)`
          : 'Planche d\'études - Florian Leux (Toyso)',
      },
      {
        property: 'og:description',
        content: artwork.value
          ? `Détails de la planche d'études "${artwork.value.title}" par Florian Leux (Toyso)`
          : "Détails de la planche d'études",
      },
      {
        property: 'og:image',
        content: artwork.value
          ? `https://florianleux.fr/studies/${artwork.value.fileName}.webp`
          : 'https://florianleux.fr/sceau.png',
      },
      {
        property: 'og:url',
        content: `https://florianleux.fr/art/studies/${route.params.id}`,
      },
      {
        name: 'twitter:image',
        content: artwork.value
          ? `https://florianleux.fr/studies/${artwork.value.fileName}.webp`
          : 'https://florianleux.fr/sceau.png',
      },
    ],
    link: [
      {
        rel: 'canonical',
        href: `https://florianleux.fr/art/studies/${route.params.id}`,
      },
    ],
  }))
)
</script>
