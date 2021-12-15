interface MenuChild {
  name: string
  index: string
}
interface MenuItem {
  title: string
  order: string
  icon: any
  children: Array<MenuChild>
}

export type { MenuItem, MenuChild }
