<template>
    <div>
        <div class="text-subtitle font-dm">plongez dans le processus de création de mon illustration</div>
        <div class="text-title mb-[64px] highlight font-gasoek lowercase">
            {{ artwork.title }}
        </div>

        <div :class="isLandscape ? 'grid grid-cols-2 gap-[16px]' : 'grid grid-cols-4 gap-[16px]'">
            <img class="w-full h-full object-cover" :src="`/sketches/${artwork.fileName}.webp`"
                :alt="artwork.fileName" />
            <img class="w-full h-full object-cover" :src="`/inkings/${artwork.fileName}.webp`"
                :alt="artwork.fileName" />
            <img class="w-full h-full object-cover" :src="`/artworks/${artwork.fileName}.webp`" :alt="artworkId" />
            <video class="w-full h-full object-cover" :src="`/timelapses/${artwork.fileName}.mp4`"
                :alt="artwork.fileName" autoplay loop muted />
        </div>
        <p class="text-subtitle text-right font-dm mb-[32px]">Vous pouvez en découvrir <router-link
                :to="randomArtworkUrl"
                class="text-marker hover:opacity-80 transition-opacity duration-300 cursor-pointer">une
                autre</router-link>
            ou revenir à la liste des <router-link to="/artworks"
                class="text-marker hover:opacity-80 transition-opacity duration-300 cursor-pointer">illustrations</router-link>
        </p>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { ALL_ILLUSTRATIONS, LANDSCAPE_ILLUSTRATIONS } from '@/constants/images'

const route = useRoute()

const artwork = computed(() => {
    return ALL_ILLUSTRATIONS.find((artwork) => artwork.fileName === route.params.id)
})

const isLandscape = computed(() => {
    return LANDSCAPE_ILLUSTRATIONS.some(landscapeArtwork => landscapeArtwork.fileName === route.params.id)
})

const randomArtworkUrl = computed(() => {
    const otherArtworks = ALL_ILLUSTRATIONS.filter(art => art.fileName !== route.params.id)
    const randomArtwork = otherArtworks[Math.floor(Math.random() * otherArtworks.length)]
    return `/artwork/${randomArtwork.fileName}`
})


</script>

<style scoped></style>