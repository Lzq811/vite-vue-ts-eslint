import { createRouter, createWebHistory } from 'vue-router'
import * as RouteNames from './routesname'

interface RoutesItem {
  path: string
  component: any
  name?: string
  redirect?: string
}

const routes: Array<RoutesItem> = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('@pages/home/index.vue')
  },
  {
    path: '/default',
    name: RouteNames.HOME,
    component: () => import('@pages/home/index.vue')
  },
  {
    path: '/home',
    name: RouteNames.HOME,
    component: () => import('@pages/home/index.vue')
  },
  {
    path: '/login',
    name: RouteNames.LOGIN,
    component: () => import('@pages/login/index.vue')
  }
]

// 配置路由
const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from) => {
  const { path: toPath } = to
  const { path: fromPath } = from
  if (toPath === fromPath) {
    return false
  }
})

export default router
