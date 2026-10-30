import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import Sitemap from 'vite-plugin-sitemap'
import { ILLUSTRATIONS, STUDIES, CHARACTERS } from './src/constants/images'
import { detailPaths } from './src/utils/collection'

const routes = [
  '/',
  '/contact',
  '/art',
  '/art/illustrations',
  '/art/animations',
  '/art/traditional-drawings',
  '/art/all',
  '/art/epopee-temporelle',
  '/art/studies',
  '/art/characters',
  '/dev',
  '/dev/keynotes',
  '/dev/keynotes/once-upon-a-time-in-frontend',
  '/dev/keynotes/lets-build-a-lighthouse',
  '/dev/la-haute-tour',
  ...[ILLUSTRATIONS, STUDIES, CHARACTERS].flatMap(detailPaths),
]

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
    Sitemap({
      hostname: 'https://florianleux.fr',
      dynamicRoutes: routes,
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
