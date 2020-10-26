import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/views/Home.vue'
import ProductDetails from '@/views/ProductDetails.vue'

const history = createWebHistory()
const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      component: Home,
      name: 'Home'
    },
    {
      path: '/product/:codebar',
      component: ProductDetails,
      name: 'ProductDetails'
    }
  ]
})

export default router
