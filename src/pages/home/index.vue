<template>
  <el-container class="home-page">
    <Aside></Aside>
    <el-container>
      <el-header class="head-com"><Head></Head></el-header>
      <el-main><div class="main-box">主体内容</div></el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts" setup>
import Aside from '@components/common/aside/index.vue'
import Head from '@components/common/head/index.vue'
</script>

<style lang="less" scoped>
.home-page {
  height: 100%;
}
.main-box {
  font-size: 60px;
  color: red;
}
.head-com {
  width: 100%;
  background-color: #1f2f48;
}
</style>
