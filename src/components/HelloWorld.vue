<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div>{{ msg }}</div>
  <div class="text">test less</div>
  <el-button type="primary"> 按钮 </el-button>
</template>

<style scoped lang="less">
.text {
  color: red;
}
</style>
