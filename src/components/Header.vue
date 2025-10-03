<template>
  <header class="flex justify-between items-center pt-[8px]">
    <div class="w-12"></div>
    <router-link :to="{ name: 'home' }">
      <img src="/sceau.png" alt="Logo toyso"
        class="w-[100px] hover:scale-110 transition-transform duration-500 logo-header" />
    </router-link>
    <button ref="darkModeButton" @click="handleToggle"
      class="hover:cursor-pointer hover:scale-150 transition-all w-12 flex justify-end text-[var(--color-text)] hover:text-[var(--color-highlight)]"
      aria-label="Passe au mode sombre" :title="isDark ? 'Activer le mode clair' : 'Activer le mode sombre'">
      <Transition name="icon-rotate" mode="out-in">
        <Sun v-if="isDark" key="sun" :size="36" :stroke-width="1.5" />
        <Moon v-else key="moon" :size="36" :stroke-width="1.5" />
      </Transition>
    </button>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Sun, Moon } from 'lucide-vue-next'
import { useDarkMode } from '@/composables/useDarkMode'

const { isDark, toggleWithAnimation } = useDarkMode()
const darkModeButton = ref<HTMLElement>()

const handleToggle = () => {
  if (darkModeButton.value) {
    toggleWithAnimation(darkModeButton.value)
  }
}
</script>

<style scoped>
.icon-rotate-enter-active,
.icon-rotate-leave-active {
  transition: all 0.3s ease;
}

.icon-rotate-enter-from {
  transform: rotate(-180deg);
  opacity: 0;
}

.icon-rotate-leave-to {
  transform: rotate(180deg);
  opacity: 0;
}
</style>
