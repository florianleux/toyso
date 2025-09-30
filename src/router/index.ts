import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
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
    }
  ]
})

export default router
