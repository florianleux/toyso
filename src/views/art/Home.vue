<template>
  <div class="mx-auto py-16 flex flex-col gap-[6vh]">
    <div>
      <div class="text-subtitle font-dm">je suis</div>
      <div class="text-title text-highlight font-gasoek">illustrateur</div>
    </div>
    <p class="text-justify sm:text-left text-body font-dm">
      Je réalise principalement des
      <router-link :to="{ name: 'illustrations' }" class="text-marker cursor-pointer">
        illustrations</router-link
      >
      et conçois des
      <router-link :to="{ name: 'characters' }" class="text-marker cursor-pointer">
        personnages</router-link
      >.
    </p>
    <p class="text-justify sm:text-right text-body font-dm">
      J'ai eu l'occasion de travailler pour le youtubeur
      <router-link :to="{ name: 'epopee-temporelle' }" class="text-marker cursor-pointer"
        >Cyprien</router-link
      >, illustrer un projet de jeu de société et même un jeu vidéo web que j'ai conçu et développé.
    </p>

    <p class="text-justify sm:text-left text-body font-dm">
      En parallèle, j'aime dessiner des
      <router-link :to="{ name: 'studies' }" class="text-marker cursor-pointer">
        planches d'études</router-link
      >
      et me suis même essayé à
      <router-link :to="{ name: 'animations' }" class="text-marker cursor-pointer">
        l'animation 2D
      </router-link>
    </p>
    <p class="text-justify sm:text-justify text-body font-dm">
      J'ai aussi pratiqué le
      <router-link :to="{ name: 'traditional-drawings' }" class="text-marker cursor-pointer">
        dessin traditionnel</router-link
      >
    </p>

    <p class="text-center text-subtitle font-dm">
      Vous hésitez ? <br />
      Découvrez
      <router-link :to="{ name: 'all' }" class="text-marker cursor-pointer">
        toutes mes créations</router-link
      >
      réunies au même endroit.
    </p>
  </div>
</template>

<script setup lang="ts">
import { usePageMeta } from '@/composables/usePageMeta'
import { usePersonSchema, usePortfolioSchema } from '@/composables/useStructuredData'

// Add structured data for SEO
usePersonSchema()
usePortfolioSchema()

usePageMeta({
  title: 'Illustrateur freelance à Bordeaux – portfolio',
  description:
    "Portfolio d'illustrations digitales de Florian Leux (Toyso) : livres, jeux de société, personnages et direction artistique. Freelance à Bordeaux.",
  keywords:
    'florian leux, toyso, illustrateur bordeaux, illustration digitale, illustration livre, illustration jeu de société, character design, direction artistique bordeaux',
})
</script>
