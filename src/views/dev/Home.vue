<template>
    <div class="mx-auto py-16 flex flex-col gap-[6vh]">
        <div>
            <div class="text-subtitle font-dm">je suis</div>
            <div class="text-title text-highlight font-gasoek">développeur web</div>
        </div>
        <p class="text-justify sm:text-left text-body font-dm">
            Je suis developpeur web depuis plus de 10 ans, mon activité principale est <a
                href="https://www.linkedin.com/in/florian-leux-255b9384/" class="text-marker cursor-pointer">Senior
                Frontend Engineer</a>chez
            Back Market depuis 2022. En parallele, j'aime m'essayer à différents <a
                href="https://github.com/florianleux" class="text-marker cursor-pointer">projets</a>, pour me former ou
            m'amuser.
        </p>
        <p class="text-justify sm:text-right text-body font-dm">
            Ma stack de prédilection : Vue.js et Nuxt, mais en 10 ans de carrière, j'ai travaillé avec
            beaucoup de technos différentes.
        </p>
        <p class="text-justify sm:text-left text-body font-dm">
            J'ai imaginé, conçu et développé deux jeux vidéo pour navigateurs, Ahoy! et Facettes.
        </p>

        <p class="text-justify sm:text-right text-body font-dm">
            Avec mes enfants, j'ai conçu et développé Scrountch, une application Android familiale avec Flutter et Dart.
        </p>
        <p class="text-justify sm:text-left text-body font-dm">
            J'aime aussi concevoir et illustrer des
            <router-link :to="{ name: 'keynotes' }" class="text-marker cursor-pointer">
                conférences techniques</router-link>
            originales.
        </p>
        <p class="text-justify sm:text-right text-body font-dm">
            Du web design jusqu'à la dernière ligne de code, j'ai aussi réalisé ce site!<br />
        </p>
        <p class="text-center text-subtitle font-dm">
            Vous avez un projet en tête ? <br />
            N'hésitez pas à
            <router-link :to="{ name: 'contact' }" class="text-marker cursor-pointer">
                me contacter</router-link>
            pour en discuter.
        </p>
    </div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { usePersonSchema } from '@/composables/useStructuredData'

// Add structured data for SEO
usePersonSchema()

useHead({
    title: 'Florian Leux - Développeur Web Frontend Freelance Bordeaux | Vue.js & Nuxt',
    meta: [
        {
            name: 'description',
            content:
                "Développeur web frontend freelance spécialisé en Vue.js et Nuxt. Création d'applications web modernes, sites vitrines et direction technique. Basé à Bordeaux.",
        },
        {
            name: 'keywords',
            content:
                'florian leux, développeur web bordeaux, développeur vue.js, développeur nuxt, frontend developer, développeur freelance bordeaux, typescript, tailwind css',
        },
        {
            property: 'og:title',
            content: 'Florian Leux - Développeur Web Frontend Freelance',
        },
        {
            property: 'og:description',
            content:
                'Développeur web frontend freelance spécialisé en Vue.js et Nuxt pour vos projets web.',
        },
        {
            property: 'og:url',
            content: 'https://florianleux.fr/dev',
        },
        {
            name: 'twitter:title',
            content: 'Florian Leux - Développeur Web Frontend Freelance',
        },
    ],
    link: [
        {
            rel: 'canonical',
            href: 'https://florianleux.fr/dev',
        },
    ],
})
</script>
