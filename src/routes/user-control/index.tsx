/**
 * 运营监控路由
 */

import { RouteRecordRaw } from 'vue-router'
import * as RouterNames from '../routesName'

const UserControl: Array<RouteRecordRaw> = [
  {
    path: 'log-control',
    name: RouterNames.LOG_CONTROL, // 日志监控
    component: () => import('@pages/user-control/log-control/index.vue')
  },
  {
    path: 'equ-control',
    name: RouterNames.EQU_CONTROL, // 设备监控
    component: () => import('@pages/user-control/equ-control/index.vue')
  },
  {
    path: 'equ-warning',
    name: RouterNames.EQU_WARNING, // 设备预警
    component: () => import('@pages/user-control/equ-warning/index.vue')
  },
  {
    path: 'error-warning',
    name: RouterNames.ERROR_WARNING, // 异常预警
    component: () => import('@pages/user-control/error-warning/index.vue')
  },
  {
    path: 'scan-log',
    name: RouterNames.SCAN_LOG, // 调用日志
    component: () => import('@pages/user-control/scan-log/index.vue')
  }
]

export default UserControl
