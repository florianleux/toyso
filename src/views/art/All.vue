<template>
  <Breadcrumb />

  <div class="mx-auto">
    <div class="text-subtitle font-dm">toutes mes</div>
    <div class="text-title mb-[5vw] text-highlight font-gasoek">créations</div>
    <p class="mb-[35px] text-right text-body font-dm">
      Toute la production graphique présente sur mon site, en vrac !<br />
      Cela vous plait ? N'hésitez pas à
      <router-link :to="{ name: 'contact' }" class="text-marker cursor-pointer">
        me contacter</router-link
      >
      pour discuter de votre projet.
    </p>

    <ImageGallery :image-rows="imageRows" />
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'
import Breadcrumb from '@/components/Breadcrumb.vue'
import ImageGallery from '@/components/ImageGallery.vue'
import { ALL_COLLECTIONS } from '@/constants/images'
import { shuffle, useImageLayout } from '@/composables/useImageLayout'
import { resolveArtworks } from '@/utils/collection'

// Combiner toutes les collections et les mélanger
const { imageRows } = useImageLayout(shuffle(ALL_COLLECTIONS.flatMap((c) => resolveArtworks(c))))

// SEO
useHead({
  title: 'Toutes mes créations - Florian Leux (Toyso) | Portfolio Complet',
  meta: [
    {
      name: 'description',
      content:
        'Portfolio complet de Florian Leux (Toyso) : illustrations digitales, animations 2D et dessins traditionnels. Découvrez toutes mes créations en un seul endroit.',
    },
    {
      name: 'keywords',
      content:
        'portfolio florian leux, toyso portfolio, créations toyso, illustrations animations dessins',
    },
    {
      property: 'og:title',
      content: 'Toutes mes créations - Florian Leux (Toyso)',
    },
    {
      property: 'og:url',
      content: 'https://florianleux.fr/art/all',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://florianleux.fr/art/all',
    },
  ],
})
</script>
