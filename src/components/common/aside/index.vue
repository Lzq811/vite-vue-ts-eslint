<template>
  <el-aside :width="asidewidth" class="aside-com">
    <div class="logo-box">LOGO</div>
    <el-button type="primary" @click="showCollapse" :icon="isCollapse ? Fold : Expand"></el-button>
    <el-menu
      @select="changMenu"
      class="menus-box"
      active-text-color="#00A2D8"
      text-color="#fff"
      background-color="rgba(0,0,0,0)"
      :default-openeds="['1', '3']"
      :collapse="isCollapse"
    >
      <el-sub-menu v-for="item in Menus" :key="item.order" :index="item.order">
        <template #title>
          <el-icon :size="24" color="#fff">
            <component :is="item.icon"></component>
          </el-icon>
          <span>{{ item.title }}</span>
        </template>
        <el-menu-item v-for="menu in item.children" :key="menu.index" :index="menu.index">{{
          menu.name
        }}</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </el-aside>
</template>

<script lang="ts" setup>
import { MenuItem, MenuChild } from '@ts/menus'
import { useRouter } from 'vue-router'
import { Location, Fold, Expand } from '@element-plus/icons'
import { onMounted, reactive, ref, shallowRef } from 'vue'

const router = useRouter()

const emit = defineEmits(['chage-crumb'])

const Menus: Array<MenuItem> = reactive([
  {
    title: '基础配置',
    order: 'base',
    icon: shallowRef(Location),
    children: [
      { name: '系统配置', index: 'system-manage' },
      { name: '收发货规则', index: 'send-receive-rule' },
      { name: '仓库管理', index: 'store-manage' },
      { name: '车道管理', index: 'track-manage' },
      { name: '货品管理', index: 'goods-manage' },
      { name: '队列管理', index: 'stack-manage' }
    ]
  },
  {
    title: '收发货管理',
    order: 'send-receive',
    icon: shallowRef(Location),
    children: [
      { name: '排队跟踪', index: 'line-up-track' },
      { name: '收发货任务', index: 'send-receive-task' },
      { name: '预警通知', index: 'warning-notice' },
      { name: '数据中心', index: 'data-center' },
      { name: '数据中心-总部', index: 'data-center-unit' },
      { name: '车船监控', index: 'car-boat-control' }
    ]
  },
  {
    title: '运营监控',
    order: 'user-control',
    icon: shallowRef(Location),
    children: [
      { name: '日志监控', index: 'log-control' },
      { name: '设备监控', index: 'equ-control' },
      { name: '设备预警', index: 'equ-warning' },
      { name: '异常预警', index: 'error-warning' },
      { name: '调用日志', index: 'scan-log' }
    ]
  }
])
const currBreadCrumb = ref(`${Menus[0].title},${Menus[0].children[0].name}`)
const isCollapse = ref(false)
const asidewidth = ref('180px')

onMounted(() => {
  emit('chage-crumb', currBreadCrumb.value)
})

const changMenu = (path: string): void => {
  console.log(path)
  router.push(path)
  computedBreadCrumb(path)
}

const findItem: any = (list: Array<MenuItem> = [], path: string) => {
  return list.reduce((now, item: any) => {
    if (now) return now
    if (path === item.index) return item
    if (item.children) return findItem(item.children, path)
  }, null)
}

const computedBreadCrumb = (path: string) => {
  Menus.forEach((order: MenuItem) => {
    order.children.forEach((item: MenuChild) => {
      if (item.index === path) {
        currBreadCrumb.value = `${order.title},${item.name}`
        emit('chage-crumb', currBreadCrumb.value)
      }
    })
  })
  console.log(currBreadCrumb.value)
}

const handleOpen = (key: any, keyPath: any): void => {
  console.log(key, keyPath)
}
const handleClose = (key: any, keyPath: any): void => {
  console.log(key, keyPath)
}
const showCollapse = (): void => {
  isCollapse.value = !isCollapse.value
  asidewidth.value = !isCollapse.value ? '180px' : '60px'
}
</script>

<style lang="less">
.aside-com {
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
  transition: all 0.25s linear;
  background-color: #1f2f48;
  .logo-box {
    width: 100%;
    height: 60px;
    background-color: rgba(255, 255, 255, 0.4);
    text-align: center;
    line-height: 60px;
  }
  .menus-box {
    border: none;
    transition: all 0.2s linear;
  }
}
</style>
