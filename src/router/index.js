import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import SplashView from '../views/SplashView.vue'
import WelcomeView from '../views/WelcomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'splash',
      component: SplashView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView
      //() => import('../views/AboutView.vue')
    },
    {
      path: '/generated-welcome-page',
      name: 'welcome',
      component: WelcomeView
      //() => import('../views/WelcomeView.vue')
    }
  ]
})

export default router
