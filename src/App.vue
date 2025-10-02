<template>
  <div id="app" class="h-full">
    <Header />
    <div class="px-[5vw] py-[28px]">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue'
</script>
