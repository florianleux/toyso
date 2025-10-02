import { ref, watch, onMounted } from 'vue'

const isDark = ref(false)

export const useDarkMode = () => {
  const toggle = () => {
    isDark.value = !isDark.value
  }

  const setDark = (value: boolean) => {
    isDark.value = value
  }

  // Appliquer la classe dark sur le document
  const applyTheme = (dark: boolean) => {
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  // Initialiser le mode depuis localStorage ou préférences système
  onMounted(() => {
    const saved = localStorage.getItem('darkMode')
    if (saved !== null) {
      isDark.value = saved === 'true'
    } else {
      // Utiliser les préférences système par défaut
      isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    applyTheme(isDark.value)
  })

  // Sauvegarder dans localStorage et appliquer le thème
  watch(isDark, (newValue) => {
    localStorage.setItem('darkMode', String(newValue))
    applyTheme(newValue)
  })

  return {
    isDark,
    toggle,
    setDark,
  }
}

