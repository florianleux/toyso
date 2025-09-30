<template>

    <div class="container mx-auto px-8 py-16">

        <div class="text-subtitle font-dm">voici une sélection de mes</div>
        <div class="text-title mb-[64px] highlight font-gasoek ">
            illustrations
        </div>
        <p class="mb-[35px] text-right text-subtitle font-dm">
            J'utilise
            <span class="text-marker">Procreate</span>
            pour tout mon processus de création numérique.
        </p>

        <div class="container">
            <div v-for="(row, rowIndex) in imageRows" :key="rowIndex" class="mb-[16px]">
                <div v-if="row.type === 'portrait'" class="grid grid-cols-4 gap-[16px]">
                    <img v-for="(image, imgIndex) in row.images" :key="imgIndex" :src="`/artworks/${image}`"
                        :alt="image" loading="lazy" class="w-full h-auto object-cover" />
                </div>

                <div v-else-if="row.type === 'landscape'" class="grid grid-cols-4 gap-[16px]">
                    <template v-for="(item, itemIndex) in row.items" :key="itemIndex">
                        <img v-if="item.type === 'landscape'" :src="`/artworks/${item.image}`" :alt="item.image"
                            loading="lazy" class="w-full h-auto object-cover col-span-2" />
                        <img v-else v-for="(img, imgIdx) in item.images" :key="`${itemIndex}-${imgIdx}`"
                            :src="`/artworks/${img}`" :alt="img" loading="lazy" class="w-full h-auto object-cover" />
                    </template>
                </div>
            </div>
        </div>
    </div>


</template>

<script setup lang="ts">
import { computed } from 'vue'

const PORTRAIT_ILLUSTRATIONS = [
    'abyss.jpg',
    'Molitor.png',
    'game-night.png',
    'gatcha.jpg',
    'soup.png',
    'morning-hunt.jpg',
    'houston.jpg',
    'sento.jpg',
    'all-in.jpg',
    'bivouac.jpg',
    'checkmate.jpg',
    'cheese.jpg',
    'crisis-room.jpg',
    'fish-markets.jpg',
    'monster.jpg',
    'mushroom.jpg',
    'night-shift.jpg',
    'scarecrow.jpg',
]

const LANDSCAPE_ILLUSTRATIONS = [
    'gladiator.jpg',
    'king.jpg',
    'bonsai.jpg',
    'game-night.jpg',
    'izakaya.jpg',
]

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
