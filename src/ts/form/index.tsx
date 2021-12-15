enum EnumFormTypes {
  INPUT = 'input',
  SELECT = 'select',
  DATE = 'date'
}

enum EnumEditTypes {
  SEARCH = 'search',
  RESET = 'reset',
  ADD = 'add',
  UPLOAD = 'upload'
}
enum EnumBtnsLabelItems {
  SEARCH = '查询',
  RESET = '重置',
  ADD = '新增',
  UPLOAD = '导入'
}

interface InterSelectOptionsItems {
  label: string
  value: string
}

interface IterFormItems {
  field: string
  type: EnumFormTypes
  label: string
  placeholder: string
  options?: Array<InterSelectOptionsItems>
}

interface IterEditBtnsItems {
  field: EnumEditTypes
  label?: EnumBtnsLabelItems
}

interface IterFormData {
  name?: string
  status?: string
  date?: string
}

export {
  EnumFormTypes,
  EnumEditTypes,
  EnumBtnsLabelItems,
  IterFormItems,
  IterEditBtnsItems,
  IterFormData
}
