import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
      path: '/Home',
      name: 'Home',
      component: () => import('../views/Home.vue')
    }
    {
      path: '/Page_inutile',
      name: 'Page_inutile',
      component: () => import('../views/Page_inutile.vue')
    }]
})

export default router
