<template>
  <div class="w-full flex items-center justify-center pt-[100px]">
    <div class="grid grid-cols-12 sm:gap-8 items-center w-full mx-auto">
      <div class="col-span-12 text-center md:text-left">
        <div class="text-subtitle font-dm">Bienvenue! Je m'appelle</div>
        <div class="text-title mb-[64px] text-center md:text-left text-highlight font-gasoek">
          florian leux
        </div>

        <div class="text-subtitle font-dm text-center md:text-right">
          mais je suis aussi connu sous le nom de
        </div>

        <div class="text-title mb-[120px] text-center md:text-right font-gasoek text-highlight">
          toyso
        </div>
        <p class="text-subtitle text-center font-dm mb-[4vw]">
          Je propose mes services en tant que
          <span class="text-marker">développeur web</span>
          et
          <router-link :to="{ name: 'art' }" class="text-marker cursor-pointer">
            illustrateur
          </router-link>
        </p>

        <p class="text-body text-center font-dm mb-[32px]">
          Vous avez un projet en tête ? <br /> N'hésitez pas à
          <router-link :to="{ name: 'contact' }" class="text-marker cursor-pointer">
            me contacter
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { usePersonSchema } from '@/composables/useStructuredData'

// Add structured data for SEO
usePersonSchema()

useHead({
  title: 'Florian Leux (Toyso) - Développeur Frontend & Illustrateur Freelance Bordeaux',
  meta: [
    {
      name: 'description',
      content:
        'Développeur web frontend senior et illustrateur freelance basé à Bordeaux. Je crée des sites web modernes et des illustrations digitales pour livres, jeux de société et projets créatifs. Disponible pour missions freelance.',
    },
    {
      name: 'keywords',
      content:
        'florian leux, toyso, développeur web bordeaux, développeur frontend bordeaux, dev web bordeaux, illustrateur bordeaux, freelance bordeaux, direction artistique, vue.js développeur',
    },
    // Open Graph
    {
      property: 'og:title',
      content: 'Florian Leux (Toyso) - Développeur Frontend & Illustrateur Freelance Bordeaux',
    },
    {
      property: 'og:description',
      content:
        'Développeur web frontend senior et illustrateur freelance basé à Bordeaux. Disponible pour vos projets de développement web et illustrations.',
    },
    {
      property: 'og:url',
      content: 'https://florianleux.fr',
    },
    {
      property: 'og:image',
      content: 'https://florianleux.fr/sceau.png',
    },
    // Twitter
    {
      name: 'twitter:title',
      content: 'Florian Leux (Toyso) - Développeur Frontend & Illustrateur Freelance',
    },
    {
      name: 'twitter:description',
      content: 'Développeur web frontend senior et illustrateur freelance à Bordeaux.',
    },
    {
      name: 'twitter:image',
      content: 'https://florianleux.fr/sceau.png',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://florianleux.fr',
    },
  ],
})
</script>
