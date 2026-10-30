<template>
  <Breadcrumb />

  <div class="mx-auto">
    <div class="text-subtitle font-dm">j'ai collaboré avec le youtuber</div>
    <div class="text-title mb-[5vw] text-highlight font-gasoek">Cyprien</div>
    <div class="text-subtitle text-right font-dm"
      >pour illustrer un passage d'un épisode de sa saga audio</div
    >
    <div class="text-title text-right text-highlight font-gasoek">l'épopée temporelle</div>
    <div class="text-right text-body font-dm my-[2vw]"
      ><a
        href="https://youtu.be/wRpCUd16FEU?list=PLBMP1TQgImqwEUXyyxDGTsgpPmSGi5v6w&t=364"
        target="_blank"
        class="text-marker cursor-pointer"
        >Saison 2, épisode 6</a
      ></div
    >

    <div class="grid grid-cols-1 md:grid-cols-2 gap-[1vw]">
      <div class="col-span-1 relative w-full aspect-[16/9]">
        <Image
          :src="`/epopee-temporelle/epopee-temporelle.webp`"
          :alt="`Illustration L'épopée temporelle S02E06`"
          :ratio="`landscape`"
          class="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div class="col-span-1 relative w-full aspect-[16/9]">
        <Video
          :src="`/epopee-temporelle/epopee-temporelle.mp4`"
          :alt="`L'épopée temporelle -- S02E06 -- Cyprien`"
          :ratio="`landscape`"
          :autoplay="false"
          class="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'
import Breadcrumb from '@/components/Breadcrumb.vue'
import Image from '@/components/Image.vue'
import Video from '@/components/Video.vue'

useHead({
  title: "L'épopée temporelle - Florian Leux (Toyso) | Illustration pour Cyprien",
  meta: [
    {
      name: 'description',
      content:
        "Illustration de Florian Leux (Toyso) pour l'épisode L'épopée temporelle de la saga audio Youtube de Cyprien.",
    },
    {
      name: 'keywords',
      content:
        'illustration, épisode, épopée temporelle, saga audio, youtube, cyprien, florian leux, toyso',
    },
    {
      property: 'og:title',
      content: "L'épopée temporelle - Florian Leux (Toyso)",
    },
    {
      property: 'og:url',
      content: 'https://florianleux.fr/art/epopee-temporelle',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://florianleux.fr/art/epopee-temporelle',
    },
  ],
})
</script>
