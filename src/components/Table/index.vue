<template>
  <div class="table-com">
    <el-table
      :data="tableData"
      stripe
      border
      style="width: 100%"
      max-height="720px"
      @selection-change="handleSelectionChange"
    >
      <el-table-column v-for="item in tableHead" :key="item.prop" v-bind="item">
        <template #header="{ column, $index }">
          <slot :name="`table-header-${item.prop}`" :column="column" :$index="$index">
            {{ column.label }}
          </slot>
        </template>
        <template #default="{ row, $index }">
          <slot :name="`table-${item.prop}`" :row="row" :$index="$index">
            {{ row[item.prop] }}
          </slot>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'

const props = defineProps({
  tableData: {
    type: Array as PropType<any>,
    default: () => []
  },
  tableHead: {
    type: Array as PropType<any>,
    default: () => []
  }
})

const handleSelectionChange = () => {}
</script>

<style lang="less" scoped>
.table-com {
  width: 100%;
  max-height: 720px;
  border-radius: 6px;
  margin: 8px 0px;
  box-shadow: 0 0 6px #ccc;
}
</style>

