import { onMounted, ref } from 'vue'
import Editor from 'wangeditor'
import { DomElementSelector } from 'wangeditor/dist/utils/dom-core'
import { ConfigType } from 'wangeditor/dist/config'

export const useFuTextEditor = (
  element: string,
  config?: Partial<ConfigType>
) => {
  const editor = ref<Editor>()
  const el = ref<DomElementSelector>()
  const initEditor = () => {
    editor.value = new Editor(el.value)

    editor.value.config.zIndex = 1
    editor.value.config.showMenuTooltips = true
    editor.value.config.menuTooltipPosition = 'down'
    editor.value.config.height = 400

    const old = { ...editor.value.config }
    editor.value.config = { ...old, ...config }

    editor.value.create()
  }
  onMounted(() => {
    el.value = document.querySelector(`.${element}`)
    initEditor()
  })

  return editor
}
