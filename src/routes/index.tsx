import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import * as RouteNames from './routesname'
import Base from './base'
import SendReceiveManage from './send-receive-manage'
import UserControl from './user-control'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home/system-manage'
  },
  {
    path: '/home',
    redirect: '/home/system-manage',
    component: () => import('@pages/home/index.vue'),
    children: [...Base, ...SendReceiveManage, ...UserControl]
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

/* router.beforeEach((to, from) => {
  console.log(to, from)
  const { path: toPath } = to
  const { path: fromPath } = from
  if (toPath === fromPath) {
    return false
  }
}) */

export default router
