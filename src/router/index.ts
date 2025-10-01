import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ArtworkDetail from '../views/ArtworkDetail.vue'
import Artworks from '../views/Artworks.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/artworks',
      name: 'artworks',
      component: Artworks
    },
    {
      path: '/artwork/:id',
      name: 'artwork',
      component: ArtworkDetail 
    }
  ]
})

export default router
