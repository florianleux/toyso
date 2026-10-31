import { createApp } from 'vue'
import { createWebHistory } from 'vue-router'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import { createAppRouter } from './router'
import './style.css'

const app = createApp(App)
const head = createHead()

app.use(createAppRouter(createWebHistory()))
app.use(head)
app.mount('#app')
