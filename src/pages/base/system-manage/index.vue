<template>
  <div class="system-page">
    <SearchBox
      :formData="formData"
      :formItems="formItems"
      :editBtns="editBtns"
      @change="searchChange"
    ></SearchBox>
    <Table :tableData="tableData" :tableHead="tableHead"></Table>
    <PaginationBox
      :currPage="currPage"
      :totalSize="totalSize"
      @page-change="pageChange"
      @size-change="sizeChange"
    ></PaginationBox>
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
import { reactive, ref, watch } from 'vue-demi'

const tableData: Array<any> = reactive([
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'Los Angeles'
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'Los Angeles'
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'Los Angeles'
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'Los Angeles'
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'Los Angeles'
  }
])
const tableHead: Array<any> = reactive([
  { label: 'Date', prop: 'date', align: 'center' },
  { label: 'Name', prop: 'name' },
  { label: 'Address', prop: 'address' }
])

const currPage = ref(1)
const totalSize = ref(tableData.length)
const formData: IterFormData = reactive({
  name: '',
  status: ''
})
const formItems: Array<IterFormItems> = reactive([
  {
    field: 'name',
    type: EnumFormTypes.INPUT,
    label: '厂区名称',
    placeholder: '请输入厂区名称!'
  },
  {
    field: 'status',
    type: EnumFormTypes.SELECT,
    label: '状态',
    placeholder: '请选择厂区状态!',
    options: [
      { label: '正常', value: 'normal' },
      { label: '歇业', value: 'dowm' },
      { label: '加班', value: 'working' },
      { label: '放假', value: 'hoilday' }
    ]
  },
  {
    field: 'date',
    type: EnumFormTypes.DATE,
    label: '日期',
    placeholder: ''
  }
])
const editBtns: Array<IterEditBtnsItems> = reactive([
  { field: EnumEditTypes.SEARCH, label: EnumBtnsLabelItems.SEARCH },
  { field: EnumEditTypes.RESET, label: EnumBtnsLabelItems.RESET },
  { field: EnumEditTypes.ADD, label: EnumBtnsLabelItems.ADD },
  { field: EnumEditTypes.UPLOAD, label: EnumBtnsLabelItems.UPLOAD }
])

const searchChange = (val: any) => {
  const { type, form } = val
  console.log('1111111111', form)
  if (type === EnumEditTypes.SEARCH || type === EnumEditTypes.RESET) {
    GetData(form)
  } else if (type === EnumEditTypes.ADD) {
    console.log('add')
  } else if (type === EnumEditTypes.UPLOAD) {
    console.log('导入')
  }
}

const GetData = (form: IterFormData) => {
  console.log('获取数据', form)
}

const pageChange = (val: number) => {
  console.log('curr-page', val)
}
const sizeChange = (val: number) => {
  console.log('page-size', val)
}
const search = (form: any) => {
  console.log(form)
}
const reset = () => {
  console.log('重置')
}
</script>

<style lang="less" scoped>
.system-page {
  color: red;
}
</style>
