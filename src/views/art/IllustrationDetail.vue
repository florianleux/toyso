<template>
  <div>
    <Breadcrumb :custom-label="artwork?.title" />

    <div v-if="artwork">
      <div class="text-subtitle font-dm">les étapes de création de</div>
      <div class="text-title mb-[5vw] text-highlight font-gasoek lowercase">
        {{ artwork.title }}
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-[16px]" :key="artwork.fileName">
        <div>
          <Image class="w-full h-full object-cover" :src="`/sketches/${artwork.fileName}.webp`" :alt="sketchAlt"
            :ratio="artwork.ratio" />
        </div>

        <div>
          <Image class="w-full h-full object-cover" :src="`/inkings/${artwork.fileName}.webp`" :alt="inkingAlt"
            :ratio="artwork.ratio" />
        </div>
        <div>
          <Image class="w-full h-full object-cover" :src="`/illustrations/${artwork.fileName}.webp`"
            :alt="illustrationAlt" :ratio="artwork.ratio" />
        </div>
        <div>
          <Video class="w-full h-full object-cover" :src="`/timelapses/${artwork.fileName}.mp4`" :alt="timelapseAlt"
            :ratio="artwork.ratio" autoplay loop muted />
        </div>
      </div>
      <p class="text-body text-right font-dm mt-[5vw]">
        Vous pouvez en découvrir
        <router-link :to="getRandomArtworkUrl()" class="text-marker cursor-pointer">
          une autre
        </router-link>
        ou revenir à la liste des
        <router-link :to="{ name: 'illustrations' }" class="text-marker cursor-pointer">
          illustrations
        </router-link>
      </p>
    </div>

    <div v-else class="text-center text-subtitle font-dm mt-[5vw]">Illustration non trouvée</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'
import { ILLUSTRATIONS } from '@/constants/images'
import { getSketchAlt, getInkingAlt, getIllustrationAlt } from '@/utils/altText'
import Breadcrumb from '@/components/Breadcrumb.vue'
import Image from '@/components/Image.vue'
import Video from '@/components/Video.vue'
const route = useRoute()

const artwork = computed(() => {
  return ILLUSTRATIONS.artworks.find((artwork) => artwork.fileName === route.params.id)
})

// Alt texts SEO pour chaque étape du processus
const sketchAlt = computed(() => (artwork.value ? getSketchAlt(artwork.value.title) : ''))
const inkingAlt = computed(() => (artwork.value ? getInkingAlt(artwork.value.title) : ''))
const illustrationAlt = computed(() =>
  artwork.value ? getIllustrationAlt(artwork.value.title) : ''
)
const timelapseAlt = computed(() =>
  artwork.value
    ? `Timelapse création ${artwork.value.title} - Processus illustration par Florian Leux (Toyso)`
    : ''
)

const getRandomArtworkUrl = () => {
  const otherArtworks = ILLUSTRATIONS.artworks.filter((art) => art.fileName !== route.params.id)
  const list = otherArtworks.length > 0 ? otherArtworks : ILLUSTRATIONS.artworks
  const randomArtwork = list[Math.floor(Math.random() * list.length)]
  return {
    name: 'illustration',
    params: { id: randomArtwork?.fileName || ILLUSTRATIONS.artworks[0]!.fileName },
  }
}

// Dynamic meta tags based on artwork
useHead(
  computed(() => ({
    title: artwork.value
      ? `${artwork.value.title} - Illustration par Florian Leux (Toyso) | Processus de Création`
      : 'Illustration - Florian Leux (Toyso) Portfolio',
    meta: [
      {
        name: 'description',
        content: artwork.value
          ? `Découvrez le processus de création complet de l'illustration "${artwork.value.title}" par Florian Leux (Toyso) : du croquis au résultat final avec timelapse.`
          : "Processus de création d'illustrations digitales par Florian Leux (Toyso).",
      },
      {
        name: 'keywords',
        content: `${artwork.value?.title || 'illustration'}, processus création illustration, timelapse illustration, florian leux, toyso, illustration digitale`,
      },
      {
        property: 'og:title',
        content: artwork.value
          ? `${artwork.value.title} - Florian Leux (Toyso)`
          : 'Illustration - Florian Leux (Toyso)',
      },
      {
        property: 'og:description',
        content: artwork.value
          ? `Processus de création de "${artwork.value.title}" par Florian Leux (Toyso) - croquis, encrage, couleur et timelapse`
          : "Processus de création d'illustration",
      },
      {
        property: 'og:image',
        content: artwork.value
          ? `https://florianleux.fr/illustrations/${artwork.value.fileName}.webp`
          : 'https://florianleux.fr/sceau.png',
      },
      {
        property: 'og:url',
        content: `https://florianleux.fr/art/illustrations/${route.params.id}`,
      },
      {
        name: 'twitter:image',
        content: artwork.value
          ? `https://florianleux.fr/illustrations/${artwork.value.fileName}.webp`
          : 'https://florianleux.fr/sceau.png',
      },
    ],
    link: [
      {
        rel: 'canonical',
        href: `https://florianleux.fr/art/illustrations/${route.params.id}`,
      },
    ],
  }))
)
</script>
