<template>
    <Breadcrumb />
    <div class="mx-auto py-16 flex flex-col gap-[6vh]">
        <div>
            <div class="text-subtitle font-dm">voici mes</div>
            <div class="text-title text-highlight font-gasoek">keynotes</div>
        </div>
        <p class="text-justify sm:text-left text-body font-dm">
            J'aime aussi concevoir et illustrer des conférences techniques originales.
        </p>
        <p class="text-justify sm:text-right text-body font-dm">
            Une sur la stack frontend de Back Market, sous la forme d'un livre de contes :
            <router-link :to="{ name: 'once-upon-a-time-in-frontend' }" class="text-marker cursor-pointer">
                "Once upon a time in frontend"</router-link>.
        </p>
        <p class="text-justify sm:text-left text-body font-dm">
            Une autre, interactive où le public décide du contenu au fur et à mesure, sur le score Lighthouse et les
            performances web, dans une thématique pirate :
            <router-link :to="{ name: 'lets-build-a-lighthouse' }" class="text-marker cursor-pointer">
                "Let's build a Lighthouse"</router-link>.
        </p>
    </div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'
import Breadcrumb from '@/components/Breadcrumb.vue'

useHead({
    title: 'Keynotes - Florian Leux | Conférences Techniques Frontend',
    meta: [
        {
            name: 'description',
            content:
                'Conférences techniques de Florian Leux : "Once upon a time in frontend" sur la stack Back Market et "Let\'s build a Lighthouse" sur les performances web.',
        },
        {
            property: 'og:title',
            content: 'Keynotes - Florian Leux | Conférences Techniques',
        },
        {
            property: 'og:description',
            content:
                'Conférences techniques illustrées et originales sur le frontend',
        },
        {
            property: 'og:url',
            content: 'https://florianleux.fr/dev/keynotes',
        },
    ],
    link: [
        {
            rel: 'canonical',
            href: 'https://florianleux.fr/dev/keynotes',
        },
    ],
})
</script>
