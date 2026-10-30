<template>
  <div class="artwork-gallery" :class="{ 'is-hovering': isHovering }">
    <div v-for="(row, rowIndex) in imageRows" :key="`row-${row.type}-${rowIndex}`" class="mb-[1vw]">
      <div
        v-if="row.type === 'portrait'"
        class="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-[1vw] items-center"
      >
        <component
          :is="image.to ? RouterLink : 'div'"
          v-for="image in row.images"
          :key="image.fileName"
          :to="image.to"
          class="artwork-link"
          @mouseenter="handleMouseEnter"
          @mouseleave="handleMouseLeave"
        >
          <Image
            :src="image.src"
            :alt="image.alt"
            :ratio="image.ratio"
            class="w-full h-auto object-cover"
          />
        </component>
      </div>

      <div
        v-else-if="row.type === 'landscape'"
        class="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-[1vw] items-center"
      >
        <template
          v-for="(item, itemIndex) in row.items"
          :key="
            item.type === 'landscape'
              ? item.image?.fileName
              : item.images?.[0]?.fileName || itemIndex
          "
        >
          <component
            :is="item.image.to ? RouterLink : 'div'"
            v-if="item.type === 'landscape' && item.image"
            :to="item.image.to"
            class="artwork-link sm:col-span-2"
            @mouseenter="handleMouseEnter"
            @mouseleave="handleMouseLeave"
          >
            <Image
              :src="item.image.src"
              :alt="item.image.alt"
              :ratio="item.image.ratio"
              class="w-full h-auto object-cover"
            />
          </component>
          <template v-else>
            <component
              :is="img.to ? RouterLink : 'div'"
              v-for="img in item.images"
              :key="img.fileName"
              :to="img.to"
              class="artwork-link"
              @mouseenter="handleMouseEnter"
              @mouseleave="handleMouseLeave"
            >
              <Image
                :src="img.src"
                :alt="img.alt"
                :ratio="img.ratio"
                class="w-full h-auto object-cover"
              />
            </component>
          </template>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'
import Image from '@/components/Image.vue'
import type { ResolvedArtwork } from '@/types/artwork'
import type { ImageRow } from '@/composables/useImageLayout'
import { HOVER_DELAY_MS } from '@/constants/animations'

defineProps<{
  imageRows: ImageRow<ResolvedArtwork>[]
}>()

const isHovering = ref(false)
const hoverTimeout = ref<number | null>(null)

const handleMouseEnter = () => {
  if (hoverTimeout.value) {
    clearTimeout(hoverTimeout.value)
  }

  hoverTimeout.value = window.setTimeout(() => {
    isHovering.value = true
  }, HOVER_DELAY_MS)
}

const handleMouseLeave = () => {
  if (hoverTimeout.value) {
    clearTimeout(hoverTimeout.value)
    hoverTimeout.value = null
  }

  isHovering.value = false
}

// Clean up timeout on component unmount to prevent memory leaks
onBeforeUnmount(() => {
  if (hoverTimeout.value) {
    clearTimeout(hoverTimeout.value)
    hoverTimeout.value = null
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
