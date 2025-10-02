<template>
    <Breadcrumb />

    <div class="mx-auto">
        <div class="text-subtitle font-dm">toutes mes</div>
        <div class="text-title mb-[5vw] text-highlight font-gasoek">créations</div>
        <p class="mb-[35px] text-right text-body font-dm">
            Toute la production graphique présente sur mon site, en vrac !<br />
            Cela vous plait ? N'hésitez pas à <router-link :to="{ name: 'contact' }" class="text-marker cursor-pointer">
                me contacter</router-link> pour discuter de votre projet.
        </p>

        <ImageGallery :image-rows="imageRows" :folder-name="'mixed'" :has-links="false" />
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useHead } from '@vueuse/head'
import Breadcrumb from '@/components/Breadcrumb.vue'
import ImageGallery from '@/components/ImageGallery.vue'
import { ALL_COLLECTIONS } from '@/constants/images'
import { useImageLayout } from '@/composables/useImageLayout'
import type { Artwork } from '@/types/artwork'

// Fonction pour mélanger un tableau
function shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
            ;[shuffled[i], shuffled[j]] = [shuffled[j]!, shuffled[i]!]
    }
    return shuffled
}

// Ajouter le type de dossier à chaque artwork pour savoir d'où il vient
interface ArtworkWithFolder extends Artwork {
    folderName: string
}

// Combiner toutes les collections automatiquement
const allArtworks = computed<ArtworkWithFolder[]>(() => {
    const allArtworksArray = ALL_COLLECTIONS.flatMap(collection =>
        collection.artworks.map(art => ({
            ...art,
            folderName: collection.folderName
        }))
    )

    return shuffleArray(allArtworksArray)
})

// Utiliser le layout automatique avec le type étendu
const { imageRows } = useImageLayout(allArtworks.value as any)

// SEO
useHead({
    title: 'Toutes mes créations - Florian Leux (Toyso) | Portfolio Complet',
    meta: [
        {
            name: 'description',
            content: 'Portfolio complet de Florian Leux (Toyso) : illustrations digitales, animations 2D et dessins traditionnels. Découvrez toutes mes créations en un seul endroit.',
        },
        {
            name: 'keywords',
            content: 'portfolio florian leux, toyso portfolio, créations toyso, illustrations animations dessins',
        },
        {
            property: 'og:title',
            content: 'Toutes mes créations - Florian Leux (Toyso)',
        },
        {
            property: 'og:url',
            content: 'https://florianleux.fr/art/all',
        },
    ],
    link: [
        {
            rel: 'canonical',
            href: 'https://florianleux.fr/art/all',
        },
    ],
})
</script>
