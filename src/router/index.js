import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/budgeds',
      name: 'budgeds',
      component: Home
    },
    {
      path: '/',
      name: 'welcome',
      component: Welcome
    }
  ]
})

export default router