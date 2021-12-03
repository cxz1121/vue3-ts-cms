import type { App } from 'vue'
import { ElButton, ElInput, ElTabs } from 'element-plus'
import { ElTabPane } from 'element-plus/lib/components/tabs'
import 'element-plus/dist/index.css'
const components = [ElButton, ElInput, ElTabs, ElTabPane]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
