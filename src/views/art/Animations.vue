<template>
  <Breadcrumb />

  <div class="mx-auto">
    <div class="text-subtitle font-dm">voici quelques essais en</div>
    <div class="text-title mb-[5vw] text-highlight font-gasoek">animation 2D</div>
    <p class="mb-[35px] text-right text-body font-dm">
      Chaque animation est dessinée frame par frame sur Procreate.
    </p>

    <ImageGallery :image-rows="imageRows" :folder-name="ANIMATIONS.folderName" />
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'
import Breadcrumb from '@/components/Breadcrumb.vue'
import ImageGallery from '@/components/ImageGallery.vue'
import { ANIMATIONS } from '@/constants/images'
import { useImageLayout } from '@/composables/useImageLayout'

const { imageRows } = useImageLayout(ANIMATIONS.artworks)

useHead({
  title: 'Animations 2D - Florian Leux (Toyso) | Animation Frame par Frame',
  meta: [
    {
      name: 'description',
      content:
        'Animations 2D frame par frame réalisées sur Procreate par Florian Leux (Toyso). Découvrez mes essais en animation digitale.',
    },
    {
      name: 'keywords',
      content:
        'animation 2d, animation frame par frame, procreate animation, animation digitale, florian leux, toyso',
    },
    {
      property: 'og:title',
      content: 'Animations 2D - Florian Leux (Toyso)',
    },
    {
      property: 'og:url',
      content: 'https://florianleux.fr/art/animations',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://florianleux.fr/art/animations',
    },
  ],
})
</script>
