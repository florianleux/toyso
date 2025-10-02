<template>
  <Breadcrumb />

  <div class="mx-auto">
    <div class="text-subtitle font-dm">voici une sélection de mes</div>
    <div class="text-title mb-[5vw] text-highlight font-gasoek">illustrations</div>
    <p class="mb-[35px] text-right text-body font-dm">
      Cliquez sur une illustration pour voir le détail de son processus de création.
    </p>

    <ImageGallery
      :image-rows="imageRows"
      :folder-name="ILLUSTRATIONS.folderName"
      :has-links="true"
    />
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'
import Breadcrumb from '@/components/Breadcrumb.vue'
import ImageGallery from '@/components/ImageGallery.vue'
import { ILLUSTRATIONS } from '@/constants/images'
import { useImageLayout } from '@/composables/useImageLayout'

const { imageRows } = useImageLayout(ILLUSTRATIONS.artworks)

useHead({
  title: 'Illustrations Digitales - Florian Leux (Toyso) | Illustrateur Freelance Bordeaux',
  meta: [
    {
      name: 'description',
      content:
        "Portfolio d'illustrations digitales de Florian Leux (Toyso). Character design, illustrations pour livres et jeux de société. Découvrez le processus de création de chaque illustration.",
    },
    {
      name: 'keywords',
      content:
        'illustrations digitales, character design, illustration livre, illustration jeu de société, portfolio illustration, florian leux, toyso',
    },
    {
      property: 'og:title',
      content: 'Illustrations Digitales - Florian Leux (Toyso)',
    },
    {
      property: 'og:url',
      content: 'https://florianleux.fr/art/illustrations',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://florianleux.fr/art/illustrations',
    },
  ],
})
</script>
