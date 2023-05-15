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
  ElTabPane,
  ElMessage,
  ElPopconfirm
} from 'element-plus'
import { MessageType } from '@/types/base'

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
  ElTabPane,
  ElPopconfirm
]

const Element = {
  install(app: App<Element>) {
    components.forEach(component => {
      app.component(component.name, component)
    })
    window.$message = (message: string, type: MessageType) => {
      ElMessage({
        message,
        type
      })
    }
  }
}

export default Element
