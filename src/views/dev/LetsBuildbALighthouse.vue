<template>
    <Breadcrumb />

    <div class="mx-auto">
        <div class="text-subtitle font-dm">ma keynote</div>
        <div class="text-title mb-[5vw] text-highlight font-gasoek">Let's build a Lighthouse</div>

        <p class="mb-[35px] text-body font-dm">
            Une conférence immersive et interactive sur le score Lighthouse et les performances web.
            Le public joue le role d'un équipage de pirates chargé d'améliorer le score Lighthouse de
            <a
                href="https://blackmarket.florianleux.fr/"
                target="_blank"
                class="text-marker cursor-pointer"
            >BlackMarket</a>,
            un site parodique de BackMarket au score Lighthouse catastrophique.
        </p>

        <p class="mb-[35px] text-right text-body font-dm">
            Pour cela il doivent pour chaque métrique composant le score Lighthouse, voter via une
            <a
                href="https://pirate-crew.florianleux.fr/"
                target="_blank"
                class="text-marker cursor-pointer"
            >application web de vote</a>
            développée pour l'occasion quel patch ils veulent appliquer.
            En fonction du vote, le phare, allégorie du score lighthouse, se met à jour et
            les slides suivantes se concentrent sur le patch choisi.
        </p>

        <p class="mb-[35px] text-left text-body font-dm">Chaque occurence de cette présentation est unique, car le
            contenu des slides est directement déterminé par les 5 votes du public.
        </p>

        <p class="mb-[35px] text-right text-body font-dm">
            Cette conférence a été présentée pour la première fois lors de l'édition 2026 de la BackCon,
            la convention technique interne annuelle de Back Market, en anglais devant un public de 75 personnes.
        </p>

        <ImageGallery :image-rows="slideRows" />

        <div class="grid grid-cols-1 md:grid-cols-2 gap-[1vw] my-[1vw]">
            <div
                v-for="gif in gifs"
                :key="gif.src"
                class="relative w-full aspect-[16/9]"
            >
                <img
                    :src="gif.src"
                    :alt="gif.alt"
                    class="absolute inset-0 w-full h-full object-cover"
                />
            </div>
        </div>
        <ImageGallery :image-rows="voteRows" />
    </div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'
import Breadcrumb from '@/components/Breadcrumb.vue'
import ImageGallery from '@/components/ImageGallery.vue'
import { LETS_BUILD_A_LIGHTHOUSE_SLIDES, LETS_BUILD_A_LIGHTHOUSE_VOTES } from '@/constants/images'
import { useImageLayout } from '@/composables/useImageLayout'
import { resolveArtworks } from '@/utils/collection'

const { imageRows: slideRows } = useImageLayout(resolveArtworks(LETS_BUILD_A_LIGHTHOUSE_SLIDES))
const { imageRows: voteRows } = useImageLayout(resolveArtworks(LETS_BUILD_A_LIGHTHOUSE_VOTES))

const gifs = [
    { src: '/lets-build-a-lighthouse/lighthouse-anim-01.gif', alt: "Let's build a Lighthouse - démo 1" },
    { src: '/lets-build-a-lighthouse/lighthouse-anim-02.gif', alt: "Let's build a Lighthouse - démo 2" },
]

useHead({
    title: "Let's build a Lighthouse - Florian Leux | Keynote Performances Web",
    meta: [
        {
            name: 'description',
            content:
                "Conférence interactive de Florian Leux sur le score Lighthouse et les performances web, dans une thématique pirate. Le public décide du contenu.",
        },
        {
            property: 'og:title',
            content: "Let's build a Lighthouse - Florian Leux",
        },
        {
            property: 'og:description',
            content: 'Keynote interactive sur les performances web et le score Lighthouse.',
        },
        {
            property: 'og:url',
            content: 'https://florianleux.fr/dev/keynotes/lets-build-a-lighthouse',
        },
    ],
    link: [
        {
            rel: 'canonical',
            href: 'https://florianleux.fr/dev/keynotes/lets-build-a-lighthouse',
        },
    ],
})
</script>
