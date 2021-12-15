<template>
  <el-container class="home-page">
    <Aside @chage-crumb="chageCrumb"></Aside>
    <el-container>
      <el-header class="head-com"><Head :currBreadCrumb="currBreadCrumb"></Head></el-header>
      <el-main>
        <router-view v-slot="{ Component }" :key="$route.path">
          <transition>
            <keep-alive>
              <component :is="Component" />
            </keep-alive>
          </transition>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts" setup>
import Aside from '@components/common/aside/index.vue'
import Head from '@components/common/head/index.vue'
import { ref } from 'vue-demi'

const currBreadCrumb = ref('')

const chageCrumb = (val: string) => {
  currBreadCrumb.value = val
}
</script>

<style lang="less" scoped>
.home-page {
  height: 100%;
}
.head-com {
  width: 100%;
  background-color: #1f2f48;
}
</style>
