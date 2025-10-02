import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import Sitemap from 'vite-plugin-sitemap'

// Import illustrations list for dynamic routes
const illustrations = [
  'abyss', 'molitor', 'game-night', 'gatcha', 'soup', 'morning-hunt',
  'houston', 'sento', 'all-in', 'bivouac', 'checkmate', 'gone-fishing',
  'situation-room', 'fish-market', 'monster', 'mushroom', 'night-shift',
  'scarecrow', 'gladiator', 'legacy', 'bonsai', 'roleplay', 'izakaya'
]

// Generate all routes for sitemap
const routes = [
  '/',
  '/contact',
  '/art',
  '/art/illustrations',
  '/art/animations',
  '/art/traditional-drawings',
  '/art/all',
  ...illustrations.map((id) => `/art/illustrations/${id}`)
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
