<template>
  <Breadcrumb />
  <div class="mx-auto py-16 flex flex-col gap-[6vh]">
    <div>
      <div class="text-subtitle font-dm">voici mes</div>
      <div class="text-title text-highlight font-gasoek">keynotes</div>
    </div>
    <p class="text-left text-body font-dm">
      J'aime aussi concevoir et illustrer des conférences techniques originales.
    </p>
    <p class="text-left sm:text-right text-body font-dm">
      Une sur la stack frontend de Back Market, sous la forme d'un livre de contes :
      <router-link
        :to="{ name: 'once-upon-a-time-in-frontend' }"
        class="text-marker cursor-pointer"
      >
        "Once upon a time in frontend"</router-link
      >.
    </p>
    <p class="text-left text-body font-dm">
      Une autre, interactive où le public décide du contenu au fur et à mesure, sur le score
      Lighthouse et les performances web, dans une thématique pirate :
      <router-link :to="{ name: 'lets-build-a-lighthouse' }" class="text-marker cursor-pointer">
        "Let's build a Lighthouse"</router-link
      >.
    </p>
  </div>
</template>

<script setup lang="ts">
import { usePageMeta } from '@/composables/usePageMeta'
import { ONCE_UPON_A_TIME_IN_FRONTEND } from '@/constants/images'
import { coverImage } from '@/utils/collection'
import Breadcrumb from '@/components/Breadcrumb.vue'

usePageMeta({
  title: 'Keynotes – conférences frontend',
  description:
    'Conférences techniques de Florian Leux : "Once upon a time in frontend" sur la stack Back Market et "Let\'s build a Lighthouse" sur les performances web.',
  image: coverImage(ONCE_UPON_A_TIME_IN_FRONTEND),
})
</script>
