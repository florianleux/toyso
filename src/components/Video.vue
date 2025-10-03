<template>
  <img fetchpriority="high" :src="`/placeholders/placeholder-${ratio}.webp`" v-show="isLoading" :class loading="lazy" />
  <video ref="videoRef" v-show="!isLoading" @canplay="handleLoad" :autoplay="autoplay" :controls="!autoplay" loop muted
    :aria-label="alt" :src :class />
</template>

<script setup lang="ts">
import { ref, onBeforeUnmount } from 'vue'
import { useMediaLoading } from '@/composables/useMediaLoading'

interface Props {
  ratio: 'portrait' | 'landscape'
  class?: string
  src: string
  alt: string
  autoplay?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  autoplay: true
})

const { isLoading, handleLoad } = useMediaLoading()
const videoRef = ref<HTMLVideoElement>()

onBeforeUnmount(() => {
  if (videoRef.value) {
    videoRef.value.pause()
    videoRef.value.src = ''
    videoRef.value.load()
  }
})
</script>
