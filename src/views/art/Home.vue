<template>
    <div class="mx-auto py-16">
        <div class="text-subtitle font-dm">je suis</div>
        <div class="text-title mb-[6vw] text-highlight font-gasoek">illustrateur</div>
        <p class="mb-[2vw] text-left text-body font-dm">
            J'ai eu l'occasion de travailler pour le youtubeur <router-link :to="{ name: 'epopee-temporelle' }"
                class="text-marker cursor-pointer">Cyprien</router-link>, illustrer un projet de jeu de
            société et même un jeu vidéo web que j'ai conçu et développé. </p>
        <p class="mb-[2vw] text-right text-body font-dm">
            J'ai réalisé des
            <router-link :to="{ name: 'illustrations' }" class="text-marker cursor-pointer">
                illustrations</router-link>
            en pleine page et des personnages.
        </p>
        <p class="mb-[2vw] text-left text-body font-dm">
            En parallèle, j'aime dessiner <router-link :to="{ name: 'studies' }" class="text-marker cursor-pointer">
                planches d'études</router-link> et me suis même essayé à
            <router-link :to="{ name: 'animations' }" class="text-marker cursor-pointer">
                l'animation 2D
            </router-link>
        </p>
        <p class="mb-[2vw] text-right text-body font-dm">
            J'ai aussi pratiqué le
            <router-link :to="{ name: 'traditional-drawings' }" class="text-marker cursor-pointer">
                dessin traditionnel</router-link>
            sur papier ou dans mes carnets.
        </p>
        <p class="mt-[4vw] text-center text-body font-dm">
            Vous hésitez ? <br /> Découvrez
            <router-link :to="{ name: 'all' }" class="text-marker cursor-pointer">
                toutes mes créations</router-link> réunies au même endroit.
        </p>
    </div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { usePersonSchema, usePortfolioSchema } from '@/composables/useStructuredData'

// Add structured data for SEO
usePersonSchema()
usePortfolioSchema()

useHead({
    title: 'Florian Leux (Toyso) - Illustrateur Freelance Bordeaux | Portfolio Illustration Digitale',
    meta: [
        {
            name: 'description',
            content:
                "Portfolio d'illustrations digitales de Florian Leux (Toyso). Illustrations pour livres, jeux de société, personnages et direction artistique. Freelance basé à Bordeaux.",
        },
        {
            name: 'keywords',
            content:
                'florian leux, toyso, illustrateur bordeaux, illustration digitale, illustration livre, illustration jeu de société, character design, direction artistique bordeaux',
        },
        {
            property: 'og:title',
            content: 'Florian Leux (Toyso) - Illustrateur Freelance Portfolio',
        },
        {
            property: 'og:description',
            content:
                "Portfolio d'illustrations digitales de Florian Leux (Toyso) pour livres, jeux de société et projets créatifs.",
        },
        {
            property: 'og:url',
            content: 'https://florianleux.fr/art',
        },
        {
            name: 'twitter:title',
            content: 'Florian Leux (Toyso) - Illustrateur Freelance Portfolio',
        },
    ],
    link: [
        {
            rel: 'canonical',
            href: 'https://florianleux.fr/art',
        },
    ],
})
</script>
