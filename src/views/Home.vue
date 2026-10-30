<template>
  <div class="w-full flex items-center justify-center py-16">
    <div class="grid grid-cols-12 sm:gap-8 items-center w-full mx-auto">
      <div class="col-span-12 text-center md:text-left flex flex-col gap-[6vh]">
        <div>
          <div class="text-subtitle font-dm">Bienvenue! Je m'appelle</div>
          <div class="text-title text-center md:text-left text-highlight font-gasoek">
            florian leux
          </div>
        </div>

        <div>
          <div class="text-subtitle font-dm text-center md:text-right">
            mais je suis aussi connu sous le nom de
          </div>

          <div class="text-title text-center md:text-right font-gasoek text-highlight"> toyso </div>
        </div>

        <p class="text-subtitle text-center font-dm">
          Je suis
          <router-link :to="{ name: 'dev' }" class="text-marker cursor-pointer">
            développeur web</router-link
          >
          et
          <router-link :to="{ name: 'art' }" class="text-marker cursor-pointer">
            illustrateur
          </router-link>
        </p>

        <p class="text-body text-center font-dm">
          Vous avez un projet en tête ? <br />
          N'hésitez pas à
          <router-link :to="{ name: 'contact' }" class="text-marker cursor-pointer">
            me contacter
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePageMeta } from '@/composables/usePageMeta'
import { usePersonSchema } from '@/composables/useStructuredData'

// Add structured data for SEO
usePersonSchema()

usePageMeta({
  title: 'Développeur frontend & illustrateur, Bordeaux',
  description:
    'Développeur web frontend senior et illustrateur freelance à Bordeaux. Sites web modernes et illustrations pour livres, jeux de société et projets créatifs.',
  keywords:
    'florian leux, toyso, développeur web bordeaux, développeur frontend bordeaux, dev web bordeaux, illustrateur bordeaux, freelance bordeaux, direction artistique, vue.js développeur',
})
</script>
