import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/Home.vue')
const ArtHome = () => import('../views/art/Home.vue')
const IllustrationDetail = () => import('../views/art/IllustrationDetail.vue')
const Illustrations = () => import('../views/art/Illustrations.vue')
const TraditionalDrawings = () => import('../views/art/TraditionnalDrawings.vue')
const Animations = () => import('../views/art/Animations.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/art',
      name: 'art',
      component: ArtHome,
      meta: { breadcrumb: 'Art' },
    },
    {
      path: '/art/illustrations',
      name: 'illustrations',
      component: Illustrations,
      meta: { breadcrumb: 'Illustrations', parent: 'art' },
    },
    {
      path: '/art/traditional-drawings',
      name: 'traditional-drawings',
      component: TraditionalDrawings,
      meta: { breadcrumb: 'Dessin traditionnel', parent: 'art' },
    },
    {
      path: '/art/illustrations/:id',
      name: 'illustration',
      component: IllustrationDetail,
      meta: { breadcrumb: 'Detail', parent: 'illustrations' },
    },
    {
      path: '/art/animations',
      name: 'animations',
      component: Animations,
      meta: { breadcrumb: 'Animations', parent: 'art' },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  },
})

export default router
