<template>
  <Breadcrumb />

  <div class="mx-auto">
    <div class="text-subtitle font-dm">voici une sélection de mes</div>
    <div class="text-title mb-[5vw] text-highlight font-gasoek">illustrations</div>
    <p class="mb-[35px] text-right text-body font-dm">
      Cliquez sur une illustration pour voir le détail de son processus de création.
    </p>

    <ImageGallery :image-rows="imageRows" :has-links="true" />
  </div>
</template>

<script setup lang="ts">
import Breadcrumb from '@/components/Breadcrumb.vue'
import ImageGallery from '@/components/ImageGallery.vue'
import { PORTRAIT_ILLUSTRATIONS, LANDSCAPE_ILLUSTRATIONS } from '@/constants/images'
import { useImageLayout } from '@/composables/useImageLayout'

const { imageRows } = useImageLayout(PORTRAIT_ILLUSTRATIONS, LANDSCAPE_ILLUSTRATIONS)
</script>
