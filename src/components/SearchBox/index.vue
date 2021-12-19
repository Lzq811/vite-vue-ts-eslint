<template>
  <div class="search-box">
    <el-form :inline="true" v-model="FormValue" label-width="80px" size="mini">
      <el-form-item v-for="item in formItems" :key="item.field" :label="item.label">
        <template v-if="item.type === 'input'">
          <el-input v-model="FormValue.name" :placeholder="item.placeholder"></el-input>
        </template>
        <template v-else-if="item.type === 'select'">
          <el-select v-model="FormValue.status" :placeholder="item.placeholder">
            <el-option
              v-for="item in item.options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </template>
        <template v-else-if="item.type === 'date'">
          <el-date-picker
            v-model="FormValue.date"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
        </template>
      </el-form-item>
      <el-form-item class="edit-btns">
        <template v-for="item in editBtns" :key="item.field">
          <el-button
            v-if="item.field === EnumEditTypes.SEARCH"
            type="primary"
            @click="onSubmit(EnumEditTypes.SEARCH)"
            >{{ EnumBtnsLabelItems.SEARCH }}</el-button
          >
          <el-button
            v-if="item.field === EnumEditTypes.RESET"
            plain
            @click="onSubmit(EnumEditTypes.RESET)"
            >{{ EnumBtnsLabelItems.RESET }}</el-button
          >
          <el-button
            v-if="item.field === EnumEditTypes.ADD"
            type="success"
            @click="onSubmit(EnumEditTypes.ADD)"
            >{{ EnumBtnsLabelItems.ADD }}</el-button
          >
          <el-button
            v-if="item.field === EnumEditTypes.UPLOAD"
            type="primary"
            plain
            @click="onSubmit(EnumEditTypes.UPLOAD)"
            >{{ EnumBtnsLabelItems.UPLOAD }}</el-button
          >
        </template>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import {
  EnumFormTypes,
  EnumEditTypes,
  IterFormItems,
  IterEditBtnsItems,
  EnumBtnsLabelItems,
  IterFormData
} from '@ts/form/index'
import { ref, watch, PropType } from 'vue-demi'
const props = defineProps({
  formData: {
    type: Object as PropType<IterFormData>,
    default: () => ({})
  },
  formItems: {
    type: Array as PropType<any>,
    default: () => []
  },
  editBtns: {
    type: Array as PropType<any>,
    default: () => []
  }
})
const emit = defineEmits(['change'])
const FormValue: any = ref({ ...props.formData })

// watch(
//   FormValue,
//   (val: any) => {
//     console.log('val', val)
//     emit('change', val)
//   },
//   {
//     deep: true
//   }
// )

const onSubmit = (type: EnumEditTypes) => {
  if (type === EnumEditTypes.RESET) {
    FormValue.value = { ...props.formData }
  }
  emit('change', { type, form: FormValue._value })
}
</script>

<style lang="less" scoped>
.search-box {
  width: 100%;
  min-height: 60px;
  border-radius: 6px;
  box-shadow: 0 0 6px #ccc;
  .edit-btns {
    float: right;
  }
  .el-form-item {
    margin: 15px 10px;
  }
}
</style>

