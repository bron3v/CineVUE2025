import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactsView from '@/views/ContactsView.vue'
import NewsView from '@/views/NewsView.vue'
import WhoView from '@/views/WhoView.vue'
import LoginView from '@/views/LoginView.vue' 
import NewReview from '@/views/NewReviewView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView,
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactsView,
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView,
    },
    {
      path: '/who',
      name: 'who',
      component: WhoView,
    }, 
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/newreview',
      name: 'newreview',
      component: NewReview,
    }
  ],
})

export default router
