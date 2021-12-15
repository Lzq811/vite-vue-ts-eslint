import Table from './Table/index.vue'
import PaginationBox from './PaginationBox/index.vue'
import SearchBox from './SearchBox/index.vue'

export const components: any = {
  Table,
  PaginationBox,
  SearchBox
}

// 注册全局组件
const install: any = (app: any) => {
  if (install.installed) return
  for (const name in components) {
    app.component(name, components[name])
  }
}

export default { install }
