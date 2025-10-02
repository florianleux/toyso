<template>
    <div>
        <Breadcrumb :custom-label="artwork?.title" />

        <div class="text-subtitle font-dm">les étapes de création de</div>
        <div class="text-title mb-[5vw] highlight font-gasoek lowercase">
            {{ artwork?.title }}
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2  gap-[16px]" :key="artwork.fileName">
            <div>
                <Image class="w-full h-full object-cover" :src="`/sketches/${artwork.fileName}.webp`"
                    :alt="artwork.fileName" :ratio="artwork.ratio" />
            </div>

            <div>
                <Image class="w-full h-full object-cover" :src="`/inkings/${artwork.fileName}.webp`"
                    :alt="artwork.fileName" :ratio="artwork.ratio" />

            </div>
            <div>
                <Image class="w-full h-full object-cover" :src="`/artworks/${artwork.fileName}.webp`"
                    :alt="artwork.fileName" :ratio="artwork.ratio" />
            </div>
            <div>
                <Video class="w-full h-full object-cover" :src="`/timelapses/${artwork.fileName}.mp4`"
                    :alt="artwork.fileName" :ratio="artwork.ratio" autoplay loop muted />
            </div>
        </div>
        <p class="text-body text-right font-dm mt-[5vw]">Vous pouvez en découvrir <router-link :to="randomArtworkUrl"
                class="text-marker hover:opacity-80 transition-opacity duration-300 cursor-pointer">une
                autre</router-link>
            ou revenir à la liste des <router-link to="/art/artworks"
                class="text-marker hover:opacity-80 transition-opacity duration-300 cursor-pointer">illustrations</router-link>
        </p>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { ALL_ILLUSTRATIONS } from '@/constants/images'
import Breadcrumb from '@/components/Breadcrumb.vue'
import Image from '@/components/Image.vue'
import Video from '@/components/Video.vue'
const route = useRoute()

const artwork = computed(() => {
    return ALL_ILLUSTRATIONS.find((artwork) => artwork.fileName === route.params.id)
})

const randomArtworkUrl = computed(() => {
    const otherArtworks = ALL_ILLUSTRATIONS.filter(art => art.fileName !== route.params.id)
    const randomArtwork = otherArtworks[Math.floor(Math.random() * otherArtworks.length)]
    return `/art/artworks/${randomArtwork.fileName}`
})


</script>