import { createApp, nextTick } from 'vue'
import { createWebHistory } from 'vue-router'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import { createAppRouter } from './router'
import './style.css'

const app = createApp(App)
const head = createHead()

const router = createAppRouter(createWebHistory())
app.use(router)
app.use(head)
app.mount('#app')

// Le composant de la route est chargé à la demande : sans ce signal, le prérendu Netlify
// capture la page avant qu'il soit rendu (header seul)
router.isReady().then(() => nextTick(() => (window.prerenderReady = true)))
