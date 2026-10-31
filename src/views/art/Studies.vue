<template>
  <Breadcrumb />

  <div class="mx-auto">
    <div class="text-subtitle font-dm">j'aime faire des</div>
    <h1 class="text-title mb-[5vw] text-highlight font-gasoek">planches d'études</h1>
    <p class="mb-[35px] text-right text-body font-dm">
      Je choisis un thème au hasard et je dessine des variations sur ce sujet. <br />
      Cela me permet de m'exercer sur des sujets inédits et construire des réferences futures.
    </p>

    <ImageGallery :image-rows="imageRows" />
  </div>
</template>

<script setup lang="ts">
import { usePageMeta } from '@/composables/usePageMeta'
import Breadcrumb from '@/components/Breadcrumb.vue'
import ImageGallery from '@/components/ImageGallery.vue'
import { STUDIES } from '@/constants/images'
import { shuffle, useImageLayout } from '@/composables/useImageLayout'
import { resolveArtworks, coverImage } from '@/utils/collection'

// Mélanger les études de manière aléatoire
const { imageRows } = useImageLayout(shuffle(resolveArtworks(STUDIES, { links: true })))

usePageMeta({
  title: "Planches d'études",
  description: "Planches d'études par Florian Leux (Toyso). Portfolio de planches d'études.",
  keywords:
    "planches d'études, dessin automatique, florian leux, toyso, procreate, dessin sur tablette",
  image: coverImage(STUDIES),
})
</script>
