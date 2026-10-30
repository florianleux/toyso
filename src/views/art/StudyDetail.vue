<template>
  <div>
    <Breadcrumb :custom-label="artwork?.title" />

    <div v-if="artwork">
      <div class="text-subtitle font-dm">une planche d'études sur </div>
      <div class="text-title mb-[3vw] text-highlight font-gasoek lowercase">
        {{ artwork.title }}
      </div>

      <div class="grid grid-cols-1 gap-[16px]" :key="artwork.fileName">
        <div>
          <Image
            class="w-full max-w-[1000px] mx-auto h-full object-cover"
            :src="`/studies/${artwork.fileName}.webp`"
            :alt="artworkAlt"
            :ratio="artwork.ratio"
          />
        </div>
      </div>
      <p class="text-body text-right font-dm mt-[3vh]">
        Vous pouvez en découvrir
        <router-link :to="nextRoute" class="text-marker cursor-pointer">une autre</router-link>
        ou revenir à la liste des<router-link
          :to="{ name: 'studies' }"
          class="text-marker cursor-pointer"
        >
          planches d'études
        </router-link>
      </p>
    </div>

    <div v-else class="text-center text-subtitle font-dm mt-[5vw]"
      >Planche d'études non trouvée</div
    >
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { STUDIES } from '@/constants/images'
import { altText } from '@/utils/collection'
import { useArtworkDetail } from '@/composables/useArtworkDetail'
import Breadcrumb from '@/components/Breadcrumb.vue'
import Image from '@/components/Image.vue'

const { artwork, nextRoute } = useArtworkDetail(STUDIES, (artwork) => ({
  title: artwork ? `${artwork.title} – planche d'études` : "Planche d'études",
  description: artwork
    ? `Planche d'études "${artwork.title}" par Florian Leux (Toyso) : des variations dessinées sur un même thème, sur Procreate.`
    : "Processus de création d'illustrations digitales par Florian Leux (Toyso).",
  keywords: `${artwork?.title || "planche d'études"}, processus création planche d'études, timelapse planche d'études, florian leux, toyso, planche d'études digitale`,
}))

const artworkAlt = computed(() => (artwork.value ? altText(STUDIES, artwork.value) : ''))
</script>
