<template>
    <div>
        <div class="text-subtitle font-dm">les étapes de création de</div>
        <div class="text-title mb-[5vw] highlight font-gasoek lowercase">
            {{ artwork.title }}
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2  gap-[16px]">
            <div class="placeholder ">
                <img preload="auto" class="w-full h-full object-cover" :src="`/sketches/${artwork.fileName}.webp`"
                    :alt="artwork.fileName" />
            </div>

            <div class="placeholder">
                <img preload="auto" class="w-full h-full object-cover" :src="`/inkings/${artwork.fileName}.webp`"
                    :alt="artwork.fileName" />

            </div>
            <div class="placeholder">
                <img preload="auto" class="w-full h-full object-cover" :src="`/artworks/${artwork.fileName}.webp`"
                    :alt="artworkId" />
            </div>
            <div class="placeholder">
                <video preload="auto" class="w-full h-full object-cover" :src="`/timelapses/${artwork.fileName}.mp4`"
                    :alt="artwork.fileName" autoplay loop muted />
            </div>
        </div>
        <p class="text-body text-right font-dm mt-[5vw]">Vous pouvez en découvrir <router-link :to="randomArtworkUrl"
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

const randomArtworkUrl = computed(() => {
    const otherArtworks = ALL_ILLUSTRATIONS.filter(art => art.fileName !== route.params.id)
    const randomArtwork = otherArtworks[Math.floor(Math.random() * otherArtworks.length)]
    return `/artwork/${randomArtwork.fileName}`
})


</script>

<style>
.placeholder {
    height: 100%;
    background-color: #f0f0f0;
    background-image: url('/sceau.png');
    background-position: center;
    background-repeat: no-repeat;
    background-blend-mode: luminosity;
    background-size: 30%;
}
</style>