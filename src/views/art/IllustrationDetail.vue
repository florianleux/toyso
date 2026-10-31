<template>
  <div>
    <Breadcrumb :custom-label="artwork?.title" />

    <div v-if="artwork">
      <div class="text-subtitle font-dm">les étapes de création de</div>
      <h1 class="text-title mb-[5vw] text-highlight font-gasoek lowercase">
        {{ artwork.title }}
      </h1>

      <div
        class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-[16px]"
        :key="artwork.fileName"
      >
        <div>
          <Image
            class="w-full h-full object-cover"
            :src="`/sketches/${artwork.fileName}.webp`"
            :alt="sketchAlt"
            :ratio="artwork.ratio"
          />
        </div>

        <div>
          <Image
            class="w-full h-full object-cover"
            :src="`/inkings/${artwork.fileName}.webp`"
            :alt="inkingAlt"
            :ratio="artwork.ratio"
          />
        </div>
        <div>
          <Image
            class="w-full h-full object-cover"
            :src="`/illustrations/${artwork.fileName}.webp`"
            :alt="illustrationAlt"
            :ratio="artwork.ratio"
          />
        </div>
        <div>
          <Video
            class="w-full h-full object-cover"
            :src="`/timelapses/${artwork.fileName}.mp4`"
            :alt="timelapseAlt"
            :ratio="artwork.ratio"
            autoplay
            loop
            muted
          />
        </div>
      </div>
      <p class="text-body text-right font-dm mt-[5vw]">
        Vous pouvez en découvrir
        <router-link :to="nextRoute" class="text-marker cursor-pointer"> une autre </router-link>
        ou revenir à la liste des
        <router-link :to="{ name: 'illustrations' }" class="text-marker cursor-pointer">
          illustrations
        </router-link>
      </p>
    </div>

    <h1 v-else class="text-center text-subtitle font-dm mt-[5vw]">Illustration non trouvée</h1>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ILLUSTRATIONS } from '@/constants/images'
import { getSketchAlt, getInkingAlt, getIllustrationAlt } from '@/utils/altText'
import { useArtworkDetail } from '@/composables/useArtworkDetail'
import Breadcrumb from '@/components/Breadcrumb.vue'
import Image from '@/components/Image.vue'
import Video from '@/components/Video.vue'

const { artwork, nextRoute } = useArtworkDetail(ILLUSTRATIONS, (artwork) => ({
  title: artwork ? `${artwork.title} – illustration` : 'Illustration',
  description: artwork
    ? `Découvrez le processus de création complet de l'illustration "${artwork.title}" par Florian Leux (Toyso) : du croquis au résultat final avec timelapse.`
    : "Processus de création d'illustrations digitales par Florian Leux (Toyso).",
  keywords: `${artwork?.title || 'illustration'}, processus création illustration, timelapse illustration, florian leux, toyso, illustration digitale`,
}))

// Alt texts SEO pour chaque étape du processus
const sketchAlt = computed(() => (artwork.value ? getSketchAlt(artwork.value.title) : ''))
const inkingAlt = computed(() => (artwork.value ? getInkingAlt(artwork.value.title) : ''))
const illustrationAlt = computed(() =>
  artwork.value ? getIllustrationAlt(artwork.value.title) : ''
)
const timelapseAlt = computed(() =>
  artwork.value
    ? `Timelapse création ${artwork.value.title} - Processus illustration par Florian Leux (Toyso)`
    : ''
)
</script>
