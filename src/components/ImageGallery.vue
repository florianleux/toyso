<template>
    <div class="artwork-gallery" :class="{ 'is-hovering': isHovering }">
        <div v-for="(row, rowIndex) in imageRows" :key="`row-${row.type}-${rowIndex}`" class="mb-[1vw]">
            <div v-if="row.type === 'portrait'" class="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-[1vw]">
                <template v-for="image in row.images" :key="image.fileName">
                    <router-link v-if="hasLinks" :to="getArtworkPath(image.fileName)" class="artwork-link"
                        @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                        <Image :src="getImagePath(image)" :alt="getAltText(image.title)" :ratio="image.ratio"
                            :class="'w-full h-auto object-cover'" />
                    </router-link>
                    <div v-else class="artwork-link" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                        <Image :src="getImagePath(image)" :alt="getAltText(image.title)" :ratio="image.ratio"
                            :class="'w-full h-auto object-cover'" />
                    </div>
                </template>
            </div>

            <div v-else-if="row.type === 'landscape'" class="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-[1vw]">
                <template v-for="(item, itemIndex) in row.items" :key="
            item.type === 'landscape'
              ? item.image?.fileName
              : item.images?.[0]?.fileName || itemIndex
          ">
                    <router-link v-if="hasLinks && item.type === 'landscape' && item.image"
                        :to="getArtworkPath(item.image.fileName)" class="artwork-link sm:col-span-2"
                        @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                        <Image :src="getImagePath(item.image)" :alt="getAltText(item.image.title)"
                            :ratio="item.image.ratio" :class="'w-full h-auto object-cover'" />
                    </router-link>
                    <div v-else-if="!hasLinks && item.type === 'landscape' && item.image"
                        class="artwork-link sm:col-span-2" @mouseenter="handleMouseEnter"
                        @mouseleave="handleMouseLeave">
                        <Image :src="getImagePath(item.image)" :alt="getAltText(item.image.title)"
                            :ratio="item.image.ratio" :class="'w-full h-auto object-cover'" />
                    </div>
                    <template v-else v-for="img in item.images" :key="img.fileName">
                        <router-link v-if="hasLinks" :to="getArtworkPath(img.fileName)" class="artwork-link"
                            @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                            <Image :src="getImagePath(img)" :alt="getAltText(img.title)" :ratio="img.ratio"
                                class="w-full h-auto object-cover" />
                        </router-link>
                        <div v-else class="artwork-link" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                            <Image :src="getImagePath(img)" :alt="getAltText(img.title)" :ratio="img.ratio"
                                class="w-full h-auto object-cover" />
                        </div>
                    </template>
                </template>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import Image from '@/components/Image.vue'
import type { Artwork } from '@/types/artwork'
import {
    getIllustrationAlt,
    getAnimationAlt,
    getTraditionalDrawingAlt,
} from '@/utils/altText'

// Support Artwork with optional folderName extension
type ArtworkWithFolder = Artwork & { folderName?: string }

interface ImageRow {
    type: 'portrait' | 'landscape'
    images?: ArtworkWithFolder[]
    items?: Array<{
        type: 'landscape' | 'portrait'
        image?: ArtworkWithFolder
        images?: ArtworkWithFolder[]
    }>
}

interface Props {
    imageRows: ImageRow[]
    folderName: string
    hasLinks?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    hasLinks: false,
})

// Génère un alt text SEO-optimisé selon le type d'artwork
const getAltText = (title: string): string => {
    switch (props.folderName) {
        case 'illustrations':
            return getIllustrationAlt(title)
        case 'animations':
            return getAnimationAlt(title)
        case 'traditional':
            return getTraditionalDrawingAlt(title)
        default:
            return `${title} - Illustration par Florian Leux (Toyso)`
    }
}

const route = useRoute()

const getArtworkPath = (id: string) => {
    return `${route.path}/${id}`
}

const getImagePath = (imageObj: ArtworkWithFolder) => {
    // Si l'image a un folderName spécifique (pour la page "all"), l'utiliser
    // Sinon utiliser le folderName de la galerie
    const folder = imageObj.folderName || props.folderName
    return `/${folder}/${imageObj.fileName}.webp`
}

const isHovering = ref(false)
let hoverTimeout: number | null = null

const handleMouseEnter = () => {
    if (hoverTimeout) {
        clearTimeout(hoverTimeout)
    }

    hoverTimeout = window.setTimeout(() => {
        isHovering.value = true
    }, 800)
}

const handleMouseLeave = () => {
    if (hoverTimeout) {
        clearTimeout(hoverTimeout)
        hoverTimeout = null
    }

    isHovering.value = false
}

// Clean up timeout on component unmount to prevent memory leaks
onBeforeUnmount(() => {
    if (hoverTimeout) {
        clearTimeout(hoverTimeout)
        hoverTimeout = null
    }
})
</script>

<style scoped>
.artwork-link {
    position: relative;
    z-index: 2;
    transition:
        filter 500ms,
        transform 500ms ease-out;
}

.artwork-link:hover {
    filter: drop-shadow(0 5px 15px rgba(0, 0, 0, 0.5));
}

.artwork-link::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--color-background);
    opacity: 0;
    transition: opacity 1000ms;
    pointer-events: none;
    z-index: 2;
}

.dark-mode .artwork-link::after {
    background-color: #000;
}

.artwork-gallery:has(.artwork-link:hover) .artwork-link {
    transform: scale(0.97);
}

.artwork-gallery:has(.artwork-link:hover) .artwork-link:hover {
    transform: scale(1);
}

.artwork-gallery.is-hovering:has(.artwork-link:hover) .artwork-link::after {
    opacity: 0.7;
}

.artwork-gallery.is-hovering:has(.artwork-link:hover) .artwork-link:hover::after {
    opacity: 0;
}
</style>
