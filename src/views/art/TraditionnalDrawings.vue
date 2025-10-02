<template>
  <Breadcrumb />

  <div class="mx-auto">
    <div class="text-subtitle font-dm">j'ai longtemps pratiqué le</div>
    <div class="text-title mb-[5vw] text-highlight font-gasoek">dessin traditionnel</div>
    <p class="mb-[35px] text-right text-body font-dm">
      J'utilise les feutres à alcools et l'encre.
    </p>

    <ImageGallery :image-rows="imageRows" :folder-name="TRADITIONAL_DRAWINGS.folderName" />
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'
import Breadcrumb from '@/components/Breadcrumb.vue'
import ImageGallery from '@/components/ImageGallery.vue'
import { TRADITIONAL_DRAWINGS } from '@/constants/images'
import { useImageLayout } from '@/composables/useImageLayout'

const { imageRows } = useImageLayout(TRADITIONAL_DRAWINGS.artworks)

useHead({
  title: 'Dessins Traditionnels - Florian Leux (Toyso) | Feutres à Alcool et Encre',
  meta: [
    {
      name: 'description',
      content:
        "Dessins traditionnels aux feutres à alcool et à l'encre par Florian Leux (Toyso). Portfolio de dessin traditionnel sur papier.",
    },
    {
      name: 'keywords',
      content:
        'dessin traditionnel, feutres à alcool, encre, dessin papier, florian leux, toyso, copic markers',
    },
    {
      property: 'og:title',
      content: 'Dessins Traditionnels - Florian Leux (Toyso)',
    },
    {
      property: 'og:url',
      content: 'https://florianleux.fr/art/traditional-drawings',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://florianleux.fr/art/traditional-drawings',
    },
  ],
})
</script>
