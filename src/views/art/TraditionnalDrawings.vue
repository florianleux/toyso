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
import Breadcrumb from '@/components/Breadcrumb.vue'
import ImageGallery from '@/components/ImageGallery.vue'
import { TRADITIONAL_DRAWINGS } from '@/constants/images'
import { useImageLayout } from '@/composables/useImageLayout'

const { imageRows } = useImageLayout(TRADITIONAL_DRAWINGS.artworks)
</script>
