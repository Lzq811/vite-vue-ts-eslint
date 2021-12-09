<template>
  <el-aside :width="asidewidth" class="aside-com">
    <div class="logo-box">LOGO</div>
    <el-button type="primary" @click="showCollapse" :icon="isCollapse ? Fold : Expand"></el-button>
    <el-menu
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
import { Location, Fold, Expand } from '@element-plus/icons'
import { onMounted, ref } from 'vue'

const Menus = ref([
  {
    title: '基础配置',
    order: 'base',
    icon: Location,
    children: [
      { name: '二级菜单1', index: '1-1' },
      { name: '二级菜单2', index: '1-2' }
    ]
  },
  {
    title: '收发货管理',
    order: 'manage',
    icon: Location,
    children: [
      { name: '二级菜单1', index: '2-1' },
      { name: '二级菜单2', index: '2-2' }
    ]
  },
  {
    title: '运营监控',
    order: 'control',
    icon: Location,
    children: [
      { name: '二级菜单1', index: '2-1' },
      { name: '二级菜单2', index: '2-2' }
    ]
  }
])
const isCollapse = ref(false)
const asidewidth = ref('180px')

onMounted(() => {})

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
