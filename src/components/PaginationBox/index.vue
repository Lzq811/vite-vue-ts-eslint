<template>
  <div class="pagination-com">
    <el-pagination
      v-model:currentPage="currPage"
      background
      :page-sizes="[20, 50, 100]"
      :page-size="20"
      :total="totalSize"
      :pager-count="11"
      layout="total, sizes, prev, pager, next, jumper"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue-demi'
const props = defineProps({
  currPage: {
    type: Number,
    default: ''
  },
  totalSize: {
    type: Number,
    default: ''
  }
})
const emit = defineEmits(['pageChange', 'sizeChange'])

const handleSizeChange = (val: number) => {
  emit('sizeChange', val)
}
const handleCurrentChange = (val: number) => {
  emit('pageChange', val)
}
</script>

<style lang="less" scoped>
.pagination-com {
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  border-radius: 6px;
  box-shadow: 0 0 6px #ccc;
  text-align: center;
  padding-top: 4px;
}
</style>

