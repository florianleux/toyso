<template>
  <header class="flex justify-between items-center pt-[8px]">
    <div class="w-12"></div>
    <router-link :to="{ name: 'home' }">
      <img src="/sceau.png" alt="Logo toyso" class="w-[100px]" />
    </router-link>
    <button @click="toggleDarkMode"
      class="text-4xl hover:opacity-70 hover:cursor-pointer transition-opacity w-12 text-right"
      aria-label="Passe au mode sombre">
      {{ isDark ? '☼' : '☽' }}
    </button>
  </header>
</template>

<script setup lang="ts">
import { useDarkMode } from '@/composables/useDarkMode'

const { isDark, toggle: toggleDarkMode } = useDarkMode()
</script>
