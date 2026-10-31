<template>
  <Breadcrumb />

  <div class="mx-auto">
    <div class="text-subtitle font-dm">à l'assaut de</div>
    <h1 class="text-title mb-[5vw] text-highlight font-gasoek">La Haute Tour</h1>

    <p class="mb-[35px] text-body font-dm">
      Un
      <a
        href="https://lahautetour.florianleux.fr/"
        target="_blank"
        class="text-marker cursor-pointer"
        >RPG de culture générale</a
      >, où le joueur gravit une tour de 6 étages et plus de 6000 questions, entre coffres, sorts,
      inventaire et combats de boss.
    </p>

    <p class="mb-[35px] text-right text-body font-dm">
      Un jeu multijoueur : chaque joueur rejoint l'une des deux guildes rivales, peut lancer des
      sorts sur ses alliés comme sur ses ennemis, et doit s'unir à sa guilde pour ouvrir les portes
      des boss.
    </p>

    <p class="mb-[35px] text-left text-body font-dm">
      Je l'ai imaginé, conçu, illustré et développé avec Nuxt.
    </p>

    <Image
      :src="TITLE_IMAGE"
      alt="La Haute Tour - écran titre"
      ratio="landscape"
      class="w-full h-auto object-cover mb-[1vw]"
    />

    <ImageGallery :image-rows="screenshotRows" />
  </div>
</template>

<script setup lang="ts">
import { usePageMeta } from '@/composables/usePageMeta'
import Breadcrumb from '@/components/Breadcrumb.vue'
import Image from '@/components/Image.vue'
import ImageGallery from '@/components/ImageGallery.vue'
import { LA_HAUTE_TOUR_SCREENSHOTS } from '@/constants/images'
import { useImageLayout } from '@/composables/useImageLayout'
import { resolveArtworks } from '@/utils/collection'

const { imageRows: screenshotRows } = useImageLayout(resolveArtworks(LA_HAUTE_TOUR_SCREENSHOTS))

const TITLE_IMAGE = '/la-haute-tour/haute-tour-titre.webp'

usePageMeta({
  title: 'La Haute Tour – jeu de culture générale',
  description:
    'La Haute Tour, jeu web de culture générale imaginé, conçu, illustré et développé par Florian Leux avec Nuxt : 6 étages, des coffres, des sorts et des boss.',
  image: TITLE_IMAGE,
})
</script>
