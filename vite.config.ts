import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// Le build SSR ne sert qu'au pré-rendu (scripts/prerender.ts), qui écrit aussi le sitemap : pas de public/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [vue(), vueDevTools(), tailwindcss()],
  build: {
    copyPublicDir: !isSsrBuild,
    // Un seul CSS, lié dans le head : un CSS de route chargé par le JS fait échouer la navigation
    // quand le prérendu Netlify bloque les CSS (option « Skip CSS files »), la page reste vide
    cssCodeSplit: false,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
}))
