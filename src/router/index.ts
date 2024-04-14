import { createRouter, createWebHistory } from 'vue-router'
import type { App } from 'vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/demo-page.vue')
    }
  ]
})

export const installRouter = (app: App) => {
  app.use(router)
}

export default router
