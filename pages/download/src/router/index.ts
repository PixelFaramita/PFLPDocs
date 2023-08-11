import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'downloadpage',
      component: () => import('../views/DownloadPage.vue')
    },
  ]
})

export default router
