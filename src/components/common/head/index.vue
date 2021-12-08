<template>
  <div>
    <el-dropdown>
      <el-icon style="margin-right: 15px"><setting /></el-icon>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>View</el-dropdown-item>
          <el-dropdown-item>Add</el-dropdown-item>
          <el-dropdown-item>Delete</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <span>Tom</span>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="less" scoped>
</style>
