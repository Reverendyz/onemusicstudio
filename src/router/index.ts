import AboutPage from '@/views/AboutPage.vue'
import HomePage from '@/views/HomePage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: {
        breadcrumbs: [{ title: 'Home', to: '/' }],
      },
    },
    {
      path: '/studio',
      name: 'studio',
      component: () => import('@/views/StudioPage.vue'),
      meta: {
        breadcrumbs: [
          { title: 'Home', to: '/' },
          { title: 'Studio', to: '/studio' },
        ],
      },
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
      meta: {
        breadcrumbs: [
          { title: 'Home', to: '/' },
          { title: 'About', to: '/about' },
        ],
      },
    },
  ],
})

export default router
