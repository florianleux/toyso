<template>
  <div id="app" class="h-full">
    <div class="px-[5vw] py-[28px]">
      <Header />
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import Header from './components/Header.vue'

// Initialiser le thème immédiatement pour éviter le flash
onMounted(() => {
  const saved = localStorage.getItem('darkMode')
  if (saved !== null) {
    if (saved === 'true') {
      document.documentElement.classList.add('dark')
    }
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark')
  }
})
</script>
