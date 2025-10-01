<template>

    <div class="container mx-auto px-8 py-16">

        <div class="text-subtitle font-dm">voici une sélection de mes</div>
        <div class="text-title mb-[64px] highlight font-gasoek ">
            illustrations
        </div>
        <p class="mb-[35px] text-right text-subtitle font-dm">
            Cliquez sur une illustration pour voir le détail de son processus de création.
        </p>

        <div class="container">
            <div v-for="(row, rowIndex) in imageRows" :key="rowIndex" class="mb-[16px]">
                <div v-if="row.type === 'portrait'" class="grid grid-cols-4 gap-[16px]">
                    <router-link :to="`/artwork/${image.fileName}`" v-for="(image, imgIndex) in row.images"
                        :key="imgIndex" class=" placeholder">
                        <img :src="`/artworks/${getFullFileName(image)}`" :alt="image.title" loading="lazy"
                            class="w-full h-auto object-cover" />
                    </router-link>

                </div>

                <div v-else-if="row.type === 'landscape'" class="grid grid-cols-4 gap-[16px]">
                    <template v-for="(item, itemIndex) in row.items" :key="itemIndex">
                        <router-link v-if="item.type === 'landscape'" :to="`/artwork/${item.image.fileName}`"
                            class=" placeholder col-span-2">
                            <img preload="auto" :src="`/artworks/${getFullFileName(item.image)}`"
                                :alt="item.image.title" loading="lazy" class="w-full h-auto object-cover" />
                        </router-link>
                        <router-link v-else v-for="(img, imgIdx) in item.images" :key="`${itemIndex}-${imgIdx}`"
                            :to="`/artwork/${img.fileName}`" class=" placeholder">
                            <img preload="auto" :src="`/artworks/${getFullFileName(img)}`" :alt="img.title"
                                loading="lazy" class="w-full h-auto object-cover" />
                        </router-link>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { PORTRAIT_ILLUSTRATIONS, LANDSCAPE_ILLUSTRATIONS } from '@/constants/images'

const getFullFileName = (imageObj: { fileName: string; title: string }) => {
    return `${imageObj.fileName}.webp`
}

const imageRows = computed(() => {
    const rows = []
    let portraitIndex = 0
    let landscapeIndex = 0

    const totalImages = PORTRAIT_ILLUSTRATIONS.length + LANDSCAPE_ILLUSTRATIONS.length
    let processedImages = 0

    while (processedImages < totalImages) {
        // Portrait row (4 portrait images)
        if (rows.length % 2 === 0) {
            const portraitRow = []

            for (let i = 0; i < 4 && processedImages < totalImages; i++) {
                if (portraitIndex < PORTRAIT_ILLUSTRATIONS.length) {
                    portraitRow.push(PORTRAIT_ILLUSTRATIONS[portraitIndex])
                    portraitIndex++
                    processedImages++
                } else if (landscapeIndex < LANDSCAPE_ILLUSTRATIONS.length) {
                    // Fallback to landscape if portraits are exhausted
                    // One landscape takes the visual space of 2 portraits, but we just add it
                    portraitRow.push(LANDSCAPE_ILLUSTRATIONS[landscapeIndex])
                    landscapeIndex++
                    processedImages++
                }
            }

            if (portraitRow.length > 0) {
                rows.push({ type: 'portrait', images: portraitRow })
            }
        }
        // Landscape row (2 landscape images OR 4 portrait images total)
        else {
            const landscapeRow = []

            // Try to fill 2 landscape slots
            for (let i = 0; i < 2 && processedImages < totalImages; i++) {
                if (landscapeIndex < LANDSCAPE_ILLUSTRATIONS.length) {
                    // Add a landscape image
                    landscapeRow.push({
                        type: 'landscape',
                        image: LANDSCAPE_ILLUSTRATIONS[landscapeIndex]
                    })
                    landscapeIndex++
                    processedImages++
                } else {
                    // No landscapes left, use 2 portraits to fill this landscape slot
                    const portraits = []
                    for (let j = 0; j < 2 && portraitIndex < PORTRAIT_ILLUSTRATIONS.length && processedImages < totalImages; j++) {
                        portraits.push(PORTRAIT_ILLUSTRATIONS[portraitIndex])
                        portraitIndex++
                        processedImages++
                    }

                    if (portraits.length > 0) {
                        landscapeRow.push({
                            type: 'portrait',
                            images: portraits
                        })
                    }
                }
            }

            if (landscapeRow.length > 0) {
                rows.push({ type: 'landscape', items: landscapeRow })
            }
        }
    }

    return rows
})


</script>
