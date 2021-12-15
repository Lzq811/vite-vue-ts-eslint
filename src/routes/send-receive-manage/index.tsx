/**
 * 收发货管理路由
 */

import { RouteRecordRaw } from 'vue-router'
import * as RouterNames from '../routesName'

const SendReceiveManage: Array<RouteRecordRaw> = [
  {
    path: 'line-up-track',
    name: RouterNames.LINE_UP_CONTROL, // 排队跟踪
    component: () => import('@pages/send-receive-manage/line-up-track/index.vue')
  },
  {
    path: 'send-receive-task',
    name: RouterNames.SEND_RECEIVE_TASK, // 收发货任务
    component: () => import('@pages/send-receive-manage/send-receive-task/index.vue')
  },
  {
    path: 'warning-notice',
    name: RouterNames.WARNING_NOTICE, // 预警通知
    component: () => import('@pages/send-receive-manage/warning-notice/index.vue')
  },
  {
    path: 'data-center',
    name: RouterNames.DATA_CENTER, // 数据中心
    component: () => import('@pages/send-receive-manage/data-center/index.vue')
  },
  {
    path: 'data-center-unit',
    name: RouterNames.DATA_CENTER_UNIT, // 数据中心-总部
    component: () => import('@pages/send-receive-manage/data-center-unit/index.vue')
  },
  {
    path: 'car-boat-control',
    name: RouterNames.CAR_BOAT_CONTROL, // 车船监控
    component: () => import('@pages/send-receive-manage/car-boat-control/index.vue')
  }
]

export default SendReceiveManage
