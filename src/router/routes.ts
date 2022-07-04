import { RouteRecordRaw } from 'vue-router'
import staticRoutes from './routes-static'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home.vue'),
  },
  {
    path: '/demo',
    name: 'demo',
    component: () => import('@/views/demo.vue'),
  },
]

export default [
  ...routes,
  ...staticRoutes,
  {
    path: '/:catchAll(.*)',
    redirect: { name: '404' },
  },
]
