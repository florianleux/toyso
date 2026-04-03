<template>
    <Breadcrumb />

    <div class="mx-auto">
        <div class="text-subtitle font-dm">une conférence sur</div>
        <div class="text-title mb-[5vw] text-highlight font-gasoek">Once upon a time in frontend</div>

        <p class="mb-[35px] text-body font-dm">
            Une conférence illustrée sous la forme d'un livre de contes, sur la stack frontend de Back Market.
        </p>

        <p class="mb-[35px] text-right text-body font-dm">
            Le public suit la quête du héros, un développeur backend, qui doit créer un "Backbutton". Pour cela il se
            pose des questions sur la stack frontend nécessaire, permettant un parallèle avec l'architecture Back
            Market.
        </p>

        <p class="mb-[35px] text-left text-body font-dm">
            Cette conférence a été présentée lors de l'édition 2025 de la BackCon,
            la convention technique interne annuelle de Back Market.
        </p>

        <ImageGallery
            :image-rows="imageRows"
            :folder-name="ONCE_UPON_A_TIME_IN_FRONTEND.folderName"
            :has-links="false"
        />
    </div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'
import Breadcrumb from '@/components/Breadcrumb.vue'
import ImageGallery from '@/components/ImageGallery.vue'
import { ONCE_UPON_A_TIME_IN_FRONTEND } from '@/constants/images'
import { useImageLayout } from '@/composables/useImageLayout'

const { imageRows } = useImageLayout(ONCE_UPON_A_TIME_IN_FRONTEND.artworks)

useHead({
    title: 'Once upon a time in frontend - Florian Leux | Keynote Frontend',
    meta: [
        {
            name: 'description',
            content:
                "Conférence technique illustrée de Florian Leux sur la stack frontend de Back Market, présentée sous la forme d'un livre de contes.",
        },
        {
            property: 'og:title',
            content: 'Once upon a time in frontend - Florian Leux',
        },
        {
            property: 'og:description',
            content: 'Keynote illustrée sur la stack frontend de Back Market.',
        },
        {
            property: 'og:url',
            content: 'https://florianleux.fr/dev/keynotes/once-upon-a-time-in-frontend',
        },
    ],
    link: [
        {
            rel: 'canonical',
            href: 'https://florianleux.fr/dev/keynotes/once-upon-a-time-in-frontend',
        },
    ],
})
</script>
