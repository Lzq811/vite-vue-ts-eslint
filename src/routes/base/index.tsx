/**
 * 基本配置路由
 */

import { RouteRecordRaw } from 'vue-router'
import * as RouterNames from '../routesName'

const Base: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: RouterNames.SYSTEM_MANAGE, // 系统配置
    component: () => import('@pages/base/system-manage/index.vue')
  },
  {
    path: 'system-manage',
    name: RouterNames.SYSTEM_MANAGE, // 系统配置
    component: () => import('@pages/base/system-manage/index.vue')
  },
  {
    path: 'send-receive-rule',
    name: RouterNames.SEND_RECEIVE_RULE, // 收发货规则配置
    component: () => import('@pages/base/send-receive-rule/index.vue')
  },
  {
    path: 'store-manage',
    name: RouterNames.STORE_MANAGE, // 仓库管理
    component: () => import('@pages/base/store-manage/index.vue')
  },
  {
    path: 'track-manage',
    name: RouterNames.TRACK_MANAGE, // 车道管理
    component: () => import('@pages/base/track-manage/index.vue')
  },
  {
    path: 'goods-manage',
    name: RouterNames.GOODS_MANAGE, // 货品管理
    component: () => import('@pages/base/goods-manage/index.vue')
  },
  {
    path: 'stack-manage',
    name: RouterNames.STACK_MANAGE, // 队列管理
    component: () => import('@pages/base/stack-manage/index.vue')
  }
]

export default Base
