<template>
  <header class="flex justify-between items-center pt-[8px]">
    <div class="flex items-center gap-[3vw] sm:gap-4">
      <router-link :to="{ name: 'home' }">
        <img src="/sceau.png" data-no-lastmod alt="Logo toyso"
          class="w-[100px] min-w-[100px] hover:scale-110 transition-transform duration-500 logo-header" />
      </router-link>
      <span class="hidden md:block mr-[5vw] text-body font-gasoek">florian <br />
        leux</span>
      <router-link :to="{ name: 'art' }"
        class="flex items-center gap-1 hover:scale-120 transition-all hover:text-[var(--color-highlight)]">
        <span class="hidden md:inline text-body font-gasoek">art</span>
        <Palette :size="36" :stroke-width="1.8" class="md:ml-[5px] translate-y-[3px]" />
      </router-link>
      <span class="hidden md:block text-body font-gasoek mx-[1vw]"> & </span>
      <router-link :to="{ name: 'dev' }"
        class="flex items-center gap-1 hover:scale-120 transition-all hover:text-[var(--color-highlight)]">
        <span class="hidden md:inline text-body font-gasoek">dev</span>
        <CodeXml :size="36" :stroke-width="1.8" class="md:ml-[5px] translate-y-[3px]" />
      </router-link>
    </div>

    <div class="flex items-center gap-[3vw] sm:gap-4">
      <a href="https://www.linkedin.com/in/florian-leux-255b9384/" target="_blank" rel="noopener noreferrer"
        aria-label="LinkedIn" title="LinkedIn">
        <Linkedin :size="36" :stroke-width="1.8"
          class="hidden sm:block hover:cursor-pointer hover:scale-150 transition-all text-[var(--color-text)] hover:text-[var(--color-highlight)]" />
      </a>
      <a href="https://github.com/florianleux" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
        title="GitHub">
        <Github :size="36" :stroke-width="1.8"
          class="hidden sm:block hover:cursor-pointer hover:scale-150 transition-all text-[var(--color-text)] hover:text-[var(--color-highlight)]" />
      </a>
      <router-link :to="{ name: 'contact' }" aria-label="Contactez-moi" title="Contactez-moi">
        <Mail :size="36" :stroke-width="1.8"
          class="hover:cursor-pointer hover:scale-150 transition-all text-[var(--color-text)] hover:text-[var(--color-highlight)]" />
      </router-link>
      <button ref="darkModeButton" @click="handleToggle"
        class="hover:cursor-pointer hover:scale-150 transition-all text-[var(--color-text)] hover:text-[var(--color-highlight)]"
        aria-label="Passe au mode sombre" :title="isDark ? 'Activer le mode clair' : 'Activer le mode sombre'">
        <Transition name="icon-rotate" mode="out-in">
          <Sun v-if="isDark" key="sun" :size="36" :stroke-width="1.8" />
          <Moon v-else key="moon" :size="36" :stroke-width="1.8" />
        </Transition>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Sun, Moon, Mail, Linkedin, Github, Palette, CodeXml } from 'lucide-vue-next'
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
