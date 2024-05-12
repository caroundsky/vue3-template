import { RouteRecordRaw } from 'vue-router'
import staticRoutes from './routes-static'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    meta: {
      noAuthRequired: true
    },
    component: () => import('@/views/home.vue'),
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
