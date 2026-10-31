import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import Sitemap from 'vite-plugin-sitemap'
import { SITE_URL } from './src/constants/site'
import { SITE_PATHS } from './src/router/paths'

// https://vite.dev/config/
// Le build SSR ne sert qu'au pré-rendu du head (scripts/prerender.ts) : ni public/ ni sitemap
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
    !isSsrBuild &&
      Sitemap({
        hostname: SITE_URL,
        dynamicRoutes: SITE_PATHS,
        // Pas de scan de dist/ : il y trouverait 404.html et index.html (/ en double)
        extensions: [],
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: new Date(),
      }),
  ],
  build: {
    copyPublicDir: !isSsrBuild,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
}))
