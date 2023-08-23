import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
      path: '/Home',
      name: 'Home',
      component: () => import('../views/Home.vue')
    }]
})

export default router
