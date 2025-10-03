import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import Sitemap from 'vite-plugin-sitemap'
import { ILLUSTRATIONS, STUDIES } from './src/constants/images'

// Generate all routes for sitemap from single source of truth
const illustrationRoutes = ILLUSTRATIONS.artworks.map(
  (art: { fileName: string }) => `/art/illustrations/${art.fileName}`
)

const studyRoutes = STUDIES.artworks.map(
  (art: { fileName: string }) => `/art/studies/${art.fileName}`
)

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
  ...illustrationRoutes,
  ...studyRoutes
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
