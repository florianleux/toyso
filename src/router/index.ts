import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ArtHome from '../views/art/Home.vue'
import ArtworkDetail from '../views/art/ArtworkDetail.vue'
import Artworks from '../views/art/Artworks.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/art',
      name: 'art',
      component: ArtHome,
      meta: { breadcrumb: 'Art' }
    },
    {
      path: '/art/artworks',
      name: 'artworks',
      component: Artworks,
      meta: { breadcrumb: 'Illustrations', parent: 'art' }
    },
    {
      path: '/art/artworks/:id',
      name: 'artwork',
      component: ArtworkDetail,
      meta: { breadcrumb: 'Detail', parent: 'artworks' }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

export default router
