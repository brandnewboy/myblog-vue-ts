import { onMounted, ref } from 'vue'
import Viewer from '@toast-ui/editor/dist/toastui-editor-viewer'
import { toastui, ViewerOptions } from '@toast-ui/editor/types'

export const useMarkdownViewer = ({
  className,
  data,
  ...restConfig
}: {
  className: string
  data: string
} & Partial<ViewerOptions>) => {
  const viewer = ref<toastui.Viewer>()
  let el: HTMLElement

  onMounted(() => {
    el = document.querySelector(`.${className}`) as HTMLElement
    if (!el) {
      throw new Error(`can't get the element named ${className}`)
    }
    init(data)
  })

  const init = (content: string) => {
    viewer.value = new Viewer({
      el,
      initialValue: content,
      ...restConfig
    })
  }

  return viewer
}
