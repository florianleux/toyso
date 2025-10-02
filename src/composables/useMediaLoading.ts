import { ref } from 'vue'

export function useMediaLoading() {
  const isLoading = ref(true)

  function handleLoad() {
    isLoading.value = false
  }

  return { isLoading, handleLoad }
}

