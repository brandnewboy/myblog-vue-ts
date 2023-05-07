/* eslint-disable */

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '@toast-ui/editor/dist/toastui-editor-viewer'

interface Window {
  $message: (
    message: string,
    type: 'success' | 'warning' | 'info' | 'error'
  ) => void
}

declare const window: Window & typeof globalThis
// declare function $message()

declare module 'dayjs'

declare module '@kangc/v-md-editor/lib/theme/vuepress.js'
declare module '@kangc/v-md-editor'
declare module '@kangc/v-md-editor/lib/theme/github.js'
declare module '@kangc/v-md-editor/lib/preview-html'
declare module '@kangc/v-md-editor/lib/preview'
