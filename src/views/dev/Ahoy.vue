<template>
  <Breadcrumb />

  <div class="mx-auto">
    <div class="text-subtitle font-dm">à l'abordage avec</div>
    <div class="text-title mb-[5vw] text-highlight font-gasoek">Ahoy!</div>

    <p class="mb-[35px] text-body font-dm">
      Une
      <a href="https://ahoy.florianleux.fr/" target="_blank" class="text-marker cursor-pointer"
        >bataille navale pirate</a
      >, où le joueur place sa flotte puis affronte tour à tour 5 capitaines ennemis.
    </p>

    <p class="mb-[35px] text-right text-body font-dm">
      Chaque adversaire a sa propre stratégie de tir et ses pouvoirs.
    </p>

    <p class="mb-[35px] text-left text-body font-dm">
      Je l'ai imaginé, conçu et développé avec Vue.js, un projet commencé en 2020 pour apprendre le
      framework.
    </p>

    <Image
      :src="TITLE_IMAGE"
      alt="Ahoy! - écran d'accueil"
      ratio="landscape"
      class="w-full h-auto object-cover mb-[1vw]"
    />

    <ImageGallery :image-rows="screenshotRows" />
  </div>
</template>

<script setup lang="ts">
import { usePageMeta } from '@/composables/usePageMeta'
import Breadcrumb from '@/components/Breadcrumb.vue'
import Image from '@/components/Image.vue'
import ImageGallery from '@/components/ImageGallery.vue'
import { AHOY_SCREENSHOTS } from '@/constants/images'
import { useImageLayout } from '@/composables/useImageLayout'
import { resolveArtworks } from '@/utils/collection'

const { imageRows: screenshotRows } = useImageLayout(resolveArtworks(AHOY_SCREENSHOTS))

const TITLE_IMAGE = '/ahoy/ahoy-accueil.webp'

usePageMeta({
  title: 'Ahoy! – bataille navale pirate',
  description:
    'Ahoy!, bataille navale au thème pirate imaginée, conçue et développée par Florian Leux avec Vue.js : 5 capitaines ennemis, chacun avec sa stratégie et ses pouvoirs.',
  image: TITLE_IMAGE,
})
</script>
