<template>
    <img fetchpriority="high" :src="`/placeholders/placeholder-${ratio}.webp`" v-show="isLoading" :class
        loading="lazy" />
    <video v-show="!isLoading" @canplay="handleLoad" autoplay loop muted :alt :src :class />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps<{
    ratio: string
    class?: string
    src: string
    alt: string
}>()
const isLoading = ref(true)

function handleLoad() {
    isLoading.value = false
}
</script>