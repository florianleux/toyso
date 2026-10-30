<template>
  <Breadcrumb />

  <div class="mx-auto">
    <div class="text-subtitle font-dm">j'aime créer des</div>
    <div class="text-title mb-[5vw] text-highlight font-gasoek">personnages</div>
    <p class="mb-[35px] text-right text-body font-dm">
      Je dessine des personnages variés pour donner vie aux univers de mes projets.<br />
      J'aime aussi revisiter des personnages célèbres par le biais de fanart.
    </p>

    <ImageGallery :image-rows="imageRows" />
  </div>
</template>

<script setup lang="ts">
import { usePageMeta } from '@/composables/usePageMeta'
import Breadcrumb from '@/components/Breadcrumb.vue'
import ImageGallery from '@/components/ImageGallery.vue'
import { CHARACTERS } from '@/constants/images'
import { shuffle, useImageLayout } from '@/composables/useImageLayout'
import { resolveArtworks, coverImage } from '@/utils/collection'

// Mélanger les personnages de manière aléatoire
const { imageRows } = useImageLayout(shuffle(resolveArtworks(CHARACTERS, { links: true })))

usePageMeta({
  title: 'Character design',
  description:
    'Character design par Florian Leux (Toyso). Portfolio de personnages et character design.',
  keywords:
    'character design, personnages, design de personnages, florian leux, toyso, procreate, dessin sur tablette',
  image: coverImage(CHARACTERS),
})
</script>
