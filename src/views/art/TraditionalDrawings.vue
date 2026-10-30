<template>
  <Breadcrumb />

  <div class="mx-auto">
    <div class="text-subtitle font-dm">j'ai longtemps pratiqué le</div>
    <div class="text-title mb-[5vw] text-highlight font-gasoek">dessin traditionnel</div>
    <p class="mb-[35px] text-right text-body font-dm">
      J'utilise les feutres à alcools et l'encre.
    </p>

    <ImageGallery :image-rows="imageRows" />
  </div>
</template>

<script setup lang="ts">
import { usePageMeta } from '@/composables/usePageMeta'
import Breadcrumb from '@/components/Breadcrumb.vue'
import ImageGallery from '@/components/ImageGallery.vue'
import { TRADITIONAL_DRAWINGS } from '@/constants/images'
import { useImageLayout } from '@/composables/useImageLayout'
import { resolveArtworks, coverImage } from '@/utils/collection'

const { imageRows } = useImageLayout(resolveArtworks(TRADITIONAL_DRAWINGS))

usePageMeta({
  title: 'Dessins traditionnels aux feutres à alcool',
  description:
    "Dessins traditionnels aux feutres à alcool et à l'encre par Florian Leux (Toyso). Portfolio de dessin traditionnel sur papier.",
  keywords:
    'dessin traditionnel, feutres à alcool, encre, dessin papier, florian leux, toyso, copic markers',
  image: coverImage(TRADITIONAL_DRAWINGS),
})
</script>
