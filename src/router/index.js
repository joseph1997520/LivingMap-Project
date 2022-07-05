import { createRouter, createWebHistory } from 'vue-router'
import Map from '@/views/Map.vue'

const routes = [
  {
    path: '/',
    name: 'Map',
    component:Map,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
