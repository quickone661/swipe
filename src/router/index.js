import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/BasicIncomeOverview.vue')
    },
    {
      path: '/apply',
      name: 'apply',
      component: () => import('../views/ApplyBasicIncome.vue')
    },
    {
      path: '/application',
      name: 'application',
      component: () => import('../views/HomeView.vue')
    },
  ]
})

export default router
