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
