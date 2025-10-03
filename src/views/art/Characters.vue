<template>
  <Breadcrumb />

  <div class="mx-auto">
    <div class="text-subtitle font-dm">j'aime créer des</div>
    <div class="text-title mb-[5vw] text-highlight font-gasoek">personnages</div>
    <p class="mb-[35px] text-right text-body font-dm">
      Je dessine des personnages variés pour donner vie aux univers de mes projets.<br />
      J'aime aussi revisiter des personnages célèbres par le biais de fanart.
    </p>

    <ImageGallery :image-rows="imageRows" :folder-name="CHARACTERS.folderName" has-links />
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'
import Breadcrumb from '@/components/Breadcrumb.vue'
import ImageGallery from '@/components/ImageGallery.vue'
import { CHARACTERS } from '@/constants/images'
import { useImageLayout } from '@/composables/useImageLayout'

// Fonction pour mélanger un tableau
function shuffleArray<T>(array: readonly T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j]!, shuffled[i]!]
  }
  return shuffled
}

// Mélanger les personnages de manière aléatoire
const shuffledCharacters = shuffleArray(CHARACTERS.artworks)
const { imageRows } = useImageLayout(shuffledCharacters)

useHead({
  title: 'Character Design - Florian Leux (Toyso) ',
  meta: [
    {
      name: 'description',
      content:
        'Character design par Florian Leux (Toyso). Portfolio de personnages et character design.',
    },
    {
      name: 'keywords',
      content:
        'character design, personnages, design de personnages, florian leux, toyso, procreate, dessin sur tablette',
    },
    {
      property: 'og:title',
      content: 'Character Design - Florian Leux (Toyso)',
    },
    {
      property: 'og:url',
      content: 'https://florianleux.fr/art/characters',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://florianleux.fr/art/characters',
    },
  ],
})
</script>
