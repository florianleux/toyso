<template>
  <div class="mx-auto py-16 flex flex-col gap-[6vh]">
    <div>
      <div class="text-subtitle font-dm">Oups!</div>
      <div class="text-title text-highlight font-gasoek">page introuvable</div>
    </div>

    <p class="text-left sm:text-center text-body font-dm">
      La page que vous recherchez n'existe pas ou a été déplacée.
    </p>

    <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <router-link :to="{ name: 'home' }" class="text-marker cursor-pointer text-body font-dm">
        Retour à l'accueil
      </router-link>
      <span class="hidden sm:inline text-body font-dm">•</span>
      <router-link :to="{ name: 'art' }" class="text-marker cursor-pointer text-body font-dm">
        Voir mes illustrations
      </router-link>
      <span class="hidden sm:inline text-body font-dm">•</span>
      <router-link :to="{ name: 'dev' }" class="text-marker cursor-pointer text-body font-dm">
        Mes projets dev
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePageMeta } from '@/composables/usePageMeta'

usePageMeta({
  title: 'Page introuvable',
  description: "La page que vous recherchez n'existe pas.",
  noindex: true,
})
</script>
