import { createRouter, createWebHistory } from 'vue-router'
import PageAbout from '../pages/PageAbout.vue'
import PageLanding from '../pages/PageLanding.vue'
import WelcomeView from '../pages/WelcomeView.vue'
import PageBuildingOne from '../pages/PageBuildingOne.vue'
import PageBuildingTwo from '../pages/PageBuildingTwo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PageLanding
    },
    {
      path: '/lincoln-school/building-1',
      name: 'building-1',
      component: PageBuildingOne
    },
    {
      path: '/lincoln-school/building-2',
      name: 'building-2',
      component: PageBuildingTwo
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
