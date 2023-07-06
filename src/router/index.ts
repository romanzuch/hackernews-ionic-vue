import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import BestStoriesPage from '../views/Best/BestStoriesPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/best'
  },
  {
    path: '/best',
    name: 'Best Stories',
    component: BestStoriesPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
