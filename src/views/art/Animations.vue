<template>
  <Breadcrumb />

  <div class="mx-auto">
    <div class="text-subtitle font-dm">voici quelques essais en </div>
    <div class="text-title mb-[5vw] text-highlight font-gasoek">animation 2D</div>
    <p class="mb-[35px] text-right text-body font-dm">
      Chaque animation est dessinée frame par frame sur Procreate.
    </p>

    <ImageGallery :image-rows="imageRows" :folder-name="ANIMATIONS.folderName" />
  </div>
</template>

<script setup lang="ts">
import Breadcrumb from '@/components/Breadcrumb.vue'
import ImageGallery from '@/components/ImageGallery.vue'
import { ANIMATIONS } from '@/constants/images'
import { useImageLayout } from '@/composables/useImageLayout'

const { imageRows } = useImageLayout(ANIMATIONS.artworks)
</script>
