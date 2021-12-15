<template>
  <div>
    <el-breadcrumb separator="/" class="bread-crumb">
      <el-breadcrumb-item v-for="item in breadCrumb" :key="item">{{ item }}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="notice-area">
      <el-dropdown @command="checkMessage">
        <el-badge :value="7" :max="9">
          <el-icon :size="24" color="#fff"><bell /></el-icon>
        </el-badge>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="warning">预警-溢出预警</el-dropdown-item>
            <el-dropdown-item command="car">装车-装车消息</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <div class="user-name">你好,管理员</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Bell } from '@element-plus/icons'
import { on } from 'events'
import { onMounted, ref, watch } from 'vue'
const props = defineProps({
  currBreadCrumb: {
    type: String,
    default: ''
  }
})
const breadCrumb: any = ref([])
watch(props, () => {
  breadCrumb.value = props.currBreadCrumb.split(',') || []
})

onMounted(() => {})

const checkMessage = (val: string): void => {
  console.log(val)
}
</script>

<style lang="less">
.bread-crumb {
  width: 90%;
  margin-top: 30px;
  display: inline-block;
  .el-breadcrumb__inner {
    color: #fff !important;
    font-size: 16px;
  }
  .el-breadcrumb__separator {
    font-size: 16px;
  }
}
.el-dropdown {
  color: #fff;
}
.notice-area {
  float: right;
  margin-top: 28px;
}
.user-name {
  color: #fff;
  font-size: 16px;
  display: inline-block;
  margin-left: 40px;
}
</style>
