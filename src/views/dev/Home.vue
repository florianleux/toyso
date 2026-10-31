<template>
  <div class="mx-auto py-16 flex flex-col gap-[6vh]">
    <div>
      <div class="text-subtitle font-dm">je suis</div>
      <h1 class="text-title text-highlight font-gasoek">développeur web</h1>
    </div>
    <p class="text-left text-body font-dm">
      Je suis developpeur web depuis plus de 10 ans, mon activité principale est
      <a
        href="https://www.linkedin.com/in/florian-leux-255b9384/"
        class="text-marker cursor-pointer"
        >Senior Frontend Engineer</a
      >chez Back Market depuis 2022. En parallele, j'aime m'essayer à différents
      <a href="https://github.com/florianleux" class="text-marker cursor-pointer">projets</a>, pour
      me former ou m'amuser.
    </p>
    <p class="text-left sm:text-right text-body font-dm">
      Ma stack de prédilection : Vue.js et Nuxt, mais en 10 ans de carrière, j'ai travaillé avec
      beaucoup de technos différentes.
    </p>
    <p class="text-left text-body font-dm">
      J'ai imaginé, conçu et développé deux jeux vidéo pour navigateurs,
      <router-link :to="{ name: 'ahoy' }" class="text-marker cursor-pointer">Ahoy!</router-link>
      et Facettes. J'en développe en ce moment un troisième,
      <router-link :to="{ name: 'la-haute-tour' }" class="text-marker cursor-pointer">
        La Haute Tour</router-link
      >, un jeu de culture générale sous forme de RPG. Avec un collègue, j'ai aussi co-créé
      <router-link :to="{ name: 'refurbished' }" class="text-marker cursor-pointer"
        >Refurbished!</router-link
      >, un jeu coopératif en 3D.
    </p>

    <p class="text-left sm:text-right text-body font-dm">
      Avec mes enfants, j'ai conçu et développé Scrountch, une application Android familiale avec
      Flutter et Dart.
    </p>
    <p class="text-left text-body font-dm">
      J'aime aussi concevoir et illustrer des
      <router-link :to="{ name: 'keynotes' }" class="text-marker cursor-pointer">
        conférences techniques</router-link
      >
      originales.
    </p>
    <p class="text-center text-subtitle font-dm">
      Vous avez un projet en tête ? <br />
      N'hésitez pas à
      <router-link :to="{ name: 'contact' }" class="text-marker cursor-pointer">
        me contacter</router-link
      >
      pour en discuter.
    </p>
  </div>
</template>

<script setup lang="ts">
import { usePageMeta } from '@/composables/usePageMeta'
import { usePersonSchema } from '@/composables/useStructuredData'

// Add structured data for SEO
usePersonSchema()

usePageMeta({
  title: 'Développeur frontend Vue.js & Nuxt, Bordeaux',
  description:
    "Développeur web frontend freelance spécialisé en Vue.js et Nuxt. Création d'applications web modernes, sites vitrines et direction technique. Basé à Bordeaux.",
  keywords:
    'florian leux, développeur web bordeaux, développeur vue.js, développeur nuxt, frontend developer, développeur freelance bordeaux, typescript, tailwind css',
})
</script>
