<template>
  <Breadcrumb />

  <div class="mx-auto">
    <div class="text-subtitle font-dm">j'aime faire des</div>
    <div class="text-title mb-[5vw] text-highlight font-gasoek">planches d'études</div>
    <p class="mb-[35px] text-right text-body font-dm">
      Je choisis un thème au hasard et je dessine des variations sur ce sujet. <br />
      Cela me permet de m'exercer sur des sujets inédits et construire des réferences futures.
    </p>

    <ImageGallery :image-rows="imageRows" :folder-name="STUDIES.folderName" has-links />
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'
import Breadcrumb from '@/components/Breadcrumb.vue'
import ImageGallery from '@/components/ImageGallery.vue'
import { STUDIES } from '@/constants/images'
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

// Mélanger les études de manière aléatoire
const shuffledStudies = shuffleArray(STUDIES.artworks)
const { imageRows } = useImageLayout(shuffledStudies)

useHead({
  title: 'Planches d\'études - Florian Leux (Toyso) ',
  meta: [
    {
      name: 'description',
      content:
        "Planches d'études par Florian Leux (Toyso). Portfolio de planches d'études.",
    },
    {
      name: 'keywords',
      content:
        'planches d\'études, dessin automatique, florian leux, toyso, procreate, dessin sur tablette',
    },
    {
      property: 'og:title',
      content: 'Planches d\'études - Florian Leux (Toyso)',
    },
    {
      property: 'og:url',
      content: 'https://florianleux.fr/art/studies',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://florianleux.fr/art/studies',
    },
  ],
})
</script>
