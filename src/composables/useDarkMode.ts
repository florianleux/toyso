import { ref, onMounted } from 'vue'

const isDark = ref(false)
const isAnimating = ref(false)
let overlay: HTMLElement | null = null

export const useDarkMode = () => {
  const createOverlay = () => {
    if (overlay) return overlay

    overlay = document.createElement('div')
    overlay.className = 'dark-mode-overlay'
    overlay.style.setProperty('--x', '50%')
    overlay.style.setProperty('--y', '50%')
    document.body.appendChild(overlay)
    return overlay
  }

  const toggleWithAnimation = (buttonElement: HTMLElement) => {
    if (isAnimating.value) return
    isAnimating.value = true

    const el = createOverlay()

    // Calculer la position du bouton
    const rect = buttonElement.getBoundingClientRect()
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2

    el.style.setProperty('--x', `${x}px`)
    el.style.setProperty('--y', `${y}px`)

    if (isDark.value) {
      // On passe en mode clair : changer l'icône immédiatement, puis rétrécir le cercle
      isDark.value = false
      document.documentElement.classList.remove('dark-mode')
      localStorage.setItem('darkMode', 'false')
      requestAnimationFrame(() => {
        el.classList.remove('active')
      })
      setTimeout(() => {
        isAnimating.value = false
      }, 800)
    } else {
      // On passe en mode dark : changer l'icône immédiatement, puis agrandir le cercle
      isDark.value = true
      document.documentElement.classList.add('dark-mode')
      localStorage.setItem('darkMode', 'true')
      requestAnimationFrame(() => {
        el.classList.add('active')
      })
      setTimeout(() => {
        isAnimating.value = false
      }, 800)
    }
  }

  // Initialiser le mode depuis localStorage
  onMounted(() => {
    const saved = localStorage.getItem('darkMode')
    isDark.value = saved === 'true'

    if (isDark.value) {
      document.documentElement.classList.add('dark-mode')
      const el = createOverlay()
      el.classList.add('active')
      el.style.transition = 'none'
      requestAnimationFrame(() => {
        el.style.transition = ''
      })
    }
  })

  return {
    isDark,
    toggleWithAnimation,
  }
}

