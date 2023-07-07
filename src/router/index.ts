import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

// Component Import
import BestStoriesPage from '@/views/best/BestStoriesPage.vue';
import NewStoriesPage from '@/views/new/NewStoriesPage.vue';
import MorePage from '@/views/more/MorePage.vue';
import TabBar from '@/components/TabBar/TabBar.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/best'
  },
  {
    path: '/',
    component: TabBar,
    children: [
      {
        path: '/best',
        name: 'best',
        component: BestStoriesPage
      },
      {
        path: '/new',
        name: 'new',
        component: NewStoriesPage
      },
      {
        path: '/more',
        name: 'more',
        component: MorePage
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
