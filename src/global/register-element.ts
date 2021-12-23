import type { App } from 'vue'
import {
  ElButton,
  ElIcon,
  ElInput,
  ElForm,
  ElTabs,
  ElCheckbox,
  ElLink,
  ElAvatar
} from 'element-plus'
import {
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu
} from 'element-plus/lib/components/dropdown'
import { ElTabPane } from 'element-plus/lib/components/tabs'
import { ElFormItem } from 'element-plus/lib/components/form'
import {
  ElContainer,
  ElHeader,
  ElMain,
  ElFooter,
  ElAside
} from 'element-plus/lib/components/container'
import {
  ElMenu,
  ElSubMenu,
  ElMenuItem,
  ElMenuItemGroup
} from 'element-plus/lib/components/menu'
import 'element-plus/dist/index.css'
// import 'element-plus/theme-chalk/base.css'
const components = [
  ElButton,
  ElInput,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElForm,
  ElFormItem,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElHeader,
  ElMain,
  ElFooter,
  ElAside,
  ElMenu,
  ElSubMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElAvatar
]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
