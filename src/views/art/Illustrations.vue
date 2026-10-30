<template>
  <Breadcrumb />

  <div class="mx-auto">
    <div class="text-subtitle font-dm">voici une sélection de mes</div>
    <div class="text-title mb-[5vw] text-highlight font-gasoek">illustrations</div>
    <p class="mb-[35px] text-right text-body font-dm">
      Cliquez sur une illustration pour voir le détail de son processus de création.
    </p>

    <ImageGallery :image-rows="imageRows" />
  </div>
</template>

<script setup lang="ts">
import { usePageMeta } from '@/composables/usePageMeta'
import Breadcrumb from '@/components/Breadcrumb.vue'
import ImageGallery from '@/components/ImageGallery.vue'
import { ILLUSTRATIONS } from '@/constants/images'
import { useImageLayout } from '@/composables/useImageLayout'
import { resolveArtworks, coverImage } from '@/utils/collection'

const { imageRows } = useImageLayout(resolveArtworks(ILLUSTRATIONS, { links: true }))

usePageMeta({
  title: 'Illustrations digitales',
  description:
    'Illustrations digitales de Florian Leux (Toyso) : character design, livres et jeux de société. Découvrez le processus de création de chaque illustration.',
  keywords:
    'illustrations digitales, character design, illustration livre, illustration jeu de société, portfolio illustration, florian leux, toyso',
  image: coverImage(ILLUSTRATIONS),
})
</script>
