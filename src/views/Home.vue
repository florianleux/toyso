<template>
  <div class=" w-full flex items-center justify-center pt-[100px] px-[5vw]">
    <div class="grid grid-cols-12 gap-8 items-center w-full mx-auto">
      <div class="col-span-12 text-center md:text-left">
        <div class="text-subtitle font-dm">Bienvenue! Je m'appelle</div>
        <div class="text-title mb-[64px] text-center md:text-left highlight font-gasoek ">
          florian leux
        </div>

        <div class="text-subtitle font-dm text-center md:text-right">mais je suis aussi connu sous le nom de</div>

        <div class="text-title mb-[120px] text-center md:text-right font-gasoek highlight">
          toyso
        </div>
        <p class="text-subtitle text-center font-dm mb-[32px]">Je suis <span class="text-marker">
            développeur
            web</span>
          et <router-link to="/artworks"
            class="text-marker hover:opacity-80 transition-opacity duration-300 cursor-pointer">illustrateur</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>