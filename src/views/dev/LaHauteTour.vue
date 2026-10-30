<template>
    <Breadcrumb />

    <div class="mx-auto">
        <div class="text-subtitle font-dm">à l'assaut de</div>
        <div class="text-title mb-[5vw] text-highlight font-gasoek">La Haute Tour</div>

        <p class="mb-[35px] text-body font-dm">
            Un RPG de culture générale, où le joueur gravit une tour de 6 étages et plus de 6000 questions, entre coffres,
            sorts, inventaire et combats de boss.
        </p>

        <p class="mb-[35px] text-right text-body font-dm">
            Un jeu multijoueur : chaque joueur rejoint l'une des deux guildes rivales, peut lancer des sorts sur ses
            alliés comme sur ses ennemis, et doit s'unir à sa guilde pour ouvrir les portes des boss.
        </p>

        <p class="mb-[35px] text-left text-body font-dm">
            Je l'ai imaginé, conçu, illustré et développé avec Nuxt. Il se joue sur
            <a
                href="https://lahautetour.florianleux.fr/"
                target="_blank"
                class="text-marker cursor-pointer"
            >lahautetour.florianleux.fr</a>.
        </p>

        <Image
            src="/la-haute-tour/haute-tour-titre.webp"
            alt="La Haute Tour - écran titre"
            ratio="landscape"
            class="w-full h-auto object-cover mb-[1vw]"
        />

        <ImageGallery
            :image-rows="screenshotRows"
            :folder-name="LA_HAUTE_TOUR_SCREENSHOTS.folderName"
            :has-links="false"
        />
    </div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'
import Breadcrumb from '@/components/Breadcrumb.vue'
import Image from '@/components/Image.vue'
import ImageGallery from '@/components/ImageGallery.vue'
import { LA_HAUTE_TOUR_SCREENSHOTS } from '@/constants/images'
import { useImageLayout } from '@/composables/useImageLayout'

const { imageRows: screenshotRows } = useImageLayout(LA_HAUTE_TOUR_SCREENSHOTS.artworks)

useHead({
    title: 'La Haute Tour - Florian Leux | Jeu web de culture générale',
    meta: [
        {
            name: 'description',
            content:
                'La Haute Tour, jeu web de culture générale imaginé, conçu, illustré et développé par Florian Leux avec Nuxt : 6 étages, des coffres, des sorts et des boss.',
        },
        {
            property: 'og:title',
            content: 'La Haute Tour - Florian Leux',
        },
        {
            property: 'og:description',
            content: 'Jeu web de culture générale illustré, développé avec Nuxt.',
        },
        {
            property: 'og:url',
            content: 'https://florianleux.fr/dev/la-haute-tour',
        },
    ],
    link: [
        {
            rel: 'canonical',
            href: 'https://florianleux.fr/dev/la-haute-tour',
        },
    ],
})
</script>
