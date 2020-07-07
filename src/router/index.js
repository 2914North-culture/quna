import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home')
  },
  {
    path: '/city',
    name: 'City',
    component: () => import('@/views/City')
  },
  {
    path: '/recommend/:id',
    name: 'Recommend',
    component: () => import('@/views/Recommend')
  },
  {
    path: '/getSightImages/:sightId',
    name: 'GetSightImages',
    component: () => import('@/components/public/GetSightImages')
  }
]

const router = new VueRouter({
  routes
})

export default router
