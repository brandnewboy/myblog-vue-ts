import { App } from 'vue'
import {
  ElButton,
  ElDatePicker,
  ElForm,
  ElFormItem,
  ElInput,
  ElContainer,
  ElHeader,
  ElAside,
  ElMain,
  ElScrollbar,
  ElMenu,
  ElMenuItem,
  ElSubMenu,
  ElMenuItemGroup,
  ElCard,
  ElDivider,
  ElTag,
  ElCollapse,
  ElCollapseItem,
  ElSteps,
  ElStep,
  ElTabs,
  ElTabPane
} from 'element-plus'

const components = [
  ElButton,
  ElDatePicker,
  ElForm,
  ElFormItem,
  ElInput,
  ElContainer,
  ElHeader,
  ElAside,
  ElMain,
  ElScrollbar,
  ElMenu,
  ElMenuItem,
  ElSubMenu,
  ElMenuItemGroup,
  ElCard,
  ElDivider,
  ElTag,
  ElCollapse,
  ElCollapseItem,
  ElSteps,
  ElStep,
  ElTabs,
  ElTabPane
]

const Element = {
  install(app: App<Element>) {
    components.forEach(component => {
      app.component(component.name, component)
    })
  }
}

export default Element
