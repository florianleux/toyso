<template>
  <Breadcrumb />

  <div class="mx-auto">
    <div class="text-subtitle font-dm">à l'atelier de</div>
    <h1 class="text-title mb-[5vw] text-highlight font-gasoek">Refurbished!</h1>

    <p class="mb-[35px] text-body font-dm">
      Un
      <a href="https://refurbished.amat.io/" target="_blank" class="text-marker cursor-pointer"
        >jeu coopératif en 3D</a
      >, hommage à Overcooked dans l'univers de Back Market, où deux joueurs reconditionnent des
      téléphones à toute vitesse pour honorer les commandes.
    </p>

    <p class="mb-[35px] text-right text-body font-dm">
      Je l'ai co-créé avec
      <a href="https://github.com/GuillaumeAmat" target="_blank" class="text-marker cursor-pointer"
        >Guillaume Amat</a
      >, un collègue, et développé avec Three.js. Il est pensé pour être joué à la manette, en
      conférence.
    </p>

    <p class="mb-[35px] text-left text-body font-dm">
      J'en ai fait la direction artistique, la 3D pour apprendre Blender, les illustrations, et j'ai
      participé au développement.
    </p>

    <Video
      src="/refurbished/refurbished-gameplay.mp4"
      alt="Refurbished! - 35 secondes de jeu, de la réparation à la livraison"
      ratio="landscape"
      class="w-full h-auto object-cover mb-[1vw]"
    />

    <ImageGallery :image-rows="screenshotRows" />
  </div>
</template>

<script setup lang="ts">
import { usePageMeta } from '@/composables/usePageMeta'
import Breadcrumb from '@/components/Breadcrumb.vue'
import Video from '@/components/Video.vue'
import ImageGallery from '@/components/ImageGallery.vue'
import { REFURBISHED_SCREENSHOTS } from '@/constants/images'
import { useImageLayout } from '@/composables/useImageLayout'
import { resolveArtworks } from '@/utils/collection'

const { imageRows: screenshotRows } = useImageLayout(resolveArtworks(REFURBISHED_SCREENSHOTS))

const META_IMAGE = '/refurbished/refurbished-reparation.webp'

usePageMeta({
  title: 'Refurbished! – jeu coopératif en 3D',
  description:
    'Refurbished!, jeu coopératif en 3D et hommage à Overcooked dans l’univers de Back Market, co-créé par Florian Leux et Guillaume Amat avec Three.js.',
  image: META_IMAGE,
})
</script>
