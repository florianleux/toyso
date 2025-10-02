import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/Home.vue')
const ArtHome = () => import('../views/art/Home.vue')
const ArtworkDetail = () => import('../views/art/ArtworkDetail.vue')
const Artworks = () => import('../views/art/Artworks.vue')

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
