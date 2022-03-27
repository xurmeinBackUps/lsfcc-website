import { createRouter, createWebHistory } from 'vue-router'
import PageAbout from '../pages/PageAbout.vue'
import PageLanding from '../pages/PageLanding.vue'
import WelcomeView from '../pages/WelcomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'splash',
      component: PageLanding
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: PageAbout
      //() => import('../pages/PageAbout.vue')
    },
    {
      // TODO: delete
      path: '/generated-welcome-page',
      name: 'welcome',
      component: WelcomeView
      //() => import('../pages/WelcomeView.vue')
    }
  ]
})

export default router
