<template>
  <div id="app" class="h-full">
    <div class="px-[5vw] py-[28px]">
      <Header class="mb-[1vw]" />
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue'
</script>
