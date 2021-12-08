
<template>
  <div class="login-page">
    <h1>Login page</h1>
    <el-button type="primary" @click="jumpTohome"> 登陆 </el-button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const jumpTohome: any = (): void => {
  router.replace('/home')
}
</script>

<style lang="less" scoped>
.login-page {
  font-size: 40px;
}
</style>