<template>
  <el-aside width="200px" class="aside-com">
    <el-menu
      active-text-color="#00A2D8"
      text-color="#fff"
      background-color="rgba(0,0,0,0)"
      :default-openeds="['1', '3']"
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
import { Location } from '@element-plus/icons'
import { ref } from 'vue'

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
</script>

<style lang="less">
.aside-com {
  height: 100%;
  background-color: #1f2f48;
}
</style>
