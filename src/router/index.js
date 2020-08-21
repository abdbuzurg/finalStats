import { createRouter, createWebHistory } from 'vue-router'
import Result from '@/views/Result.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import("@/views/Home.vue"),
  },
  {
    path: '/calculation',
    name: 'Calculation',
    component: () => import('../views/Calculation.vue')
  },
  {
    path: '/result',
    name: 'Result',
    component: Result,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
