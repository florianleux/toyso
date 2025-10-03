import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/Home.vue')
const Contact = () => import('../views/Contact.vue')
const ArtHome = () => import('../views/art/Home.vue')
const IllustrationDetail = () => import('../views/art/IllustrationDetail.vue')
const Illustrations = () => import('../views/art/Illustrations.vue')
const TraditionalDrawings = () => import('../views/art/TraditionalDrawings.vue')
const Animations = () => import('../views/art/Animations.vue')
const All = () => import('../views/art/All.vue')
const EpopeeTemporelle = () => import('../views/art/EpopeeTemporelle.vue')
const Studies = () => import('../views/art/Studies.vue')
const StudyDetail = () => import('../views/art/StudyDetail.vue')
const Characters = () => import('../views/art/Characters.vue')
const CharacterDetail = () => import('../views/art/CharacterDetail.vue')
const DevHome = () => import('../views/dev/Home.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
      meta: { breadcrumb: 'Contact' },
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
    {
      path: '/art/all',
      name: 'all',
      component: All,
      meta: { breadcrumb: 'Tout', parent: 'art' },
    },
    {
      path: '/art/epopee-temporelle',
      name: 'epopee-temporelle',
      component: EpopeeTemporelle,
      meta: { breadcrumb: 'Épopée temporelle', parent: 'art' },
    },
    {
      path: '/art/studies',
      name: 'studies',
      component: Studies,
      meta: { breadcrumb: "Planches d'études", parent: 'art' },
    },
    {
      path: '/art/studies/:id',
      name: 'study',
      component: StudyDetail,
      meta: { breadcrumb: 'Detail', parent: 'studies' },
    },
    {
      path: '/art/characters',
      name: 'characters',
      component: Characters,
      meta: { breadcrumb: 'Personnages', parent: 'art' },
    },
    {
      path: '/art/characters/:id',
      name: 'character',
      component: CharacterDetail,
      meta: { breadcrumb: 'Detail', parent: 'characters' },
    },
    {
      path: '/dev',
      name: 'dev',
      component: DevHome,
      meta: { breadcrumb: 'Dev' },
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
