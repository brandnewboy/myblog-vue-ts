import MKEditor from '@toast-ui/editor'
import { EditorOptions } from '@toast-ui/editor'
import { onMounted, ref, onUnmounted } from 'vue'

type OptionsProps = { element: string } & Omit<EditorOptions, 'el'>

export const useMarkdown = (options: OptionsProps) => {
  const editor = ref<MKEditor>()

  let el: HTMLElement

  onMounted(() => {
    el = document.querySelector(`.${options.element}`) as HTMLElement
    initEditor()
  })

  onUnmounted(() => {
    editor.value?.destroy()
  })

  const initEditor = () => {
    editor.value = new MKEditor({
      el,
      height: '30rem',
      previewStyle: 'vertical',
      language: 'zh-CN',
      ...options
    })
    editor.value.getMarkdown()
  }

  return editor
}
