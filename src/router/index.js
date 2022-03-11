import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Welcome from '../components/welcome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/inici',
      name: 'inici',
      component: Welcome
    }
  ]
})

export default router