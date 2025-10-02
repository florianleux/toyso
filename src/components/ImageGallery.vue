<template>
    <div class="artwork-gallery" :class="{ 'is-hovering': isHovering }">
        <div v-for="(row, rowIndex) in imageRows" :key="`row-${row.type}-${rowIndex}`" class="mb-[1vw]">
            <div v-if="row.type === 'portrait'" class="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-[1vw]">
                <router-link :to="{ name: 'artwork', params: { id: image.fileName } }" v-for="image in row.images"
                    :key="image.fileName" class="artwork-link" @mouseenter="handleMouseEnter"
                    @mouseleave="handleMouseLeave">
                    <Image :src="`/artworks/${getFullFileName(image)}`" :alt="image.title" :ratio="image.ratio"
                        :class="'w-full h-auto object-cover'" />
                </router-link>
            </div>

            <div v-else-if="row.type === 'landscape'" class="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-[1vw]">
                <template v-for="(item, itemIndex) in row.items"
                    :key="item.type === 'landscape' ? item.image?.fileName : item.images?.[0]?.fileName || itemIndex">
                    <router-link v-if="item.type === 'landscape' && item.image"
                        :to="{ name: 'artwork', params: { id: item.image.fileName } }"
                        class="artwork-link sm:col-span-2" @mouseenter="handleMouseEnter"
                        @mouseleave="handleMouseLeave">
                        <Image :src="`/artworks/${getFullFileName(item.image)}`" :alt="item.image.title"
                            :ratio="item.image.ratio" :class="'w-full h-auto object-cover'" />
                    </router-link>
                    <router-link v-else v-for="img in item.images" :key="img.fileName"
                        :to="{ name: 'artwork', params: { id: img.fileName } }" class="artwork-link"
                        @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                        <Image :src="`/artworks/${getFullFileName(img)}`" :alt="img.title" :ratio="img.ratio"
                            class="w-full h-auto object-cover" />
                    </router-link>
                </template>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Image from '@/components/Image.vue'
import type { Illustration } from '@/types/illustration'

interface ImageRow {
    type: 'portrait' | 'landscape'
    images?: Illustration[]
    items?: Array<{
        type: 'landscape' | 'portrait'
        image?: Illustration
        images?: Illustration[]
    }>
}

interface Props {
    imageRows: ImageRow[]
}

defineProps<Props>()

const getFullFileName = (imageObj: Illustration) => {
    return `${imageObj.fileName}.webp`
}

const isHovering = ref(false)
let hoverTimeout: number | null = null

const handleMouseEnter = () => {
    // Clear any existing timeout
    if (hoverTimeout) {
        clearTimeout(hoverTimeout)
    }

    // Set timeout for 800ms
    hoverTimeout = window.setTimeout(() => {
        isHovering.value = true
    }, 800)
}

const handleMouseLeave = () => {
    // Clear timeout if mouse leaves before 800ms
    if (hoverTimeout) {
        clearTimeout(hoverTimeout)
        hoverTimeout = null
    }

    // Reset hover state immediately when mouse leaves
    isHovering.value = false
}
</script>

<style scoped>
.artwork-link {
    position: relative;
    transition: filter 500ms, transform 500ms ease-out;
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
    background-color: white;
    opacity: 0;
    transition: opacity 1000ms;
    pointer-events: none;
}

/* Zoom immédiat dès le hover */
.artwork-gallery:has(.artwork-link:hover) .artwork-link {
    transform: scale(0.97);
}

.artwork-gallery:has(.artwork-link:hover) .artwork-link:hover {
    transform: scale(1);
}

/* Voile blanc seulement après 800ms */
.artwork-gallery.is-hovering:has(.artwork-link:hover) .artwork-link::after {
    opacity: 0.7;
}

.artwork-gallery.is-hovering:has(.artwork-link:hover) .artwork-link:hover::after {
    opacity: 0;
}
</style>
