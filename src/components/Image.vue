<template>
  <img
    fetchpriority="high"
    :src="`/placeholders/placeholder-${ratio}.webp`"
    data-no-lastmod
    v-show="isLoading"
    :class
  />
  <img v-show="!isLoading" @load="handleLoad" :alt :src :class />
</template>

<script setup lang="ts">
import { useMediaLoading } from '@/composables/useMediaLoading'

const props = defineProps<{
  ratio: 'portrait' | 'landscape'
  class?: string
  src: string
  alt: string
}>()

const { isLoading, handleLoad } = useMediaLoading()
</script>
