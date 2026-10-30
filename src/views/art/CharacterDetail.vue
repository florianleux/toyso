<template>
  <div>
    <Breadcrumb :custom-label="artwork?.title" />

    <div v-if="artwork">
      <div class="text-subtitle font-dm">un personnage nommé </div>
      <div class="text-title mb-[3vw] text-highlight font-gasoek lowercase">
        {{ artwork.title }}
      </div>

      <div class="grid grid-cols-1 gap-[16px]" :key="artwork.fileName">
        <div>
          <Image
            class="max-w-[1000px] max-h-[85vh] mx-auto"
            :src="`/characters/${artwork.fileName}.webp`"
            :alt="artworkAlt"
            :ratio="artwork.ratio"
          />
        </div>
      </div>
      <p class="text-body text-right font-dm mt-[3vw]">
        Vous pouvez en découvrir
        <router-link :to="nextRoute" class="text-marker cursor-pointer">
          un autre
        </router-link>
        ou revenir à la liste des
        <router-link :to="{ name: 'characters' }" class="text-marker cursor-pointer">
          personnages
        </router-link>
      </p>
    </div>

    <div v-else class="text-center text-subtitle font-dm mt-[5vw]">Personnage non trouvé</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { CHARACTERS } from '@/constants/images'
import { altText } from '@/utils/collection'
import { useArtworkDetail } from '@/composables/useArtworkDetail'
import Breadcrumb from '@/components/Breadcrumb.vue'
import Image from '@/components/Image.vue'

const { artwork, nextRoute } = useArtworkDetail(CHARACTERS, (artwork) => ({
  title: artwork
    ? `${artwork.title} - Character design par Florian Leux (Toyso) | Portfolio`
    : 'Character Design - Florian Leux (Toyso) Portfolio',
  description: artwork
    ? `Découvrez le character design "${artwork.title}" par Florian Leux (Toyso), illustrateur et character designer freelance.`
    : 'Character design et création de personnages par Florian Leux (Toyso).',
  keywords: `${artwork?.title || 'character design'}, création personnage, character design, florian leux, toyso, illustration digitale`,
  ogTitle: artwork
    ? `${artwork.title} - Florian Leux (Toyso)`
    : 'Character Design - Florian Leux (Toyso)',
  ogDescription: artwork
    ? `Détails du character design "${artwork.title}" par Florian Leux (Toyso)`
    : 'Détails du character design',
}))

const artworkAlt = computed(() => (artwork.value ? altText(CHARACTERS, artwork.value) : ''))
</script>
