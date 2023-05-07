import { createApp, defineComponent, h } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import SvgIcon from '@/icons'
import Element from '@/plugins/element-plus'
import '@/icons/index'
import 'element-plus/dist/index.css'
import './assets/styles/index.scss'
import '@toast-ui/editor/dist/toastui-editor.css'
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css'
import '@toast-ui/editor/dist/i18n/zh-cn'
import '@toast-ui/editor/dist/toastui-editor-viewer.css'

import VMdEditor from '@kangc/v-md-editor'
import VMdPreview from '@kangc/v-md-editor/lib/preview'
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js'
import hljs from 'highlight.js'
import '@kangc/v-md-editor/lib/style/base-editor.css'
import '@kangc/v-md-editor/lib/style/preview.css'
import '@kangc/v-md-editor/lib/theme/style/github.css'

VMdEditor.use(githubTheme, {
  Hljs: hljs
})

VMdPreview.use(githubTheme, {
  Hljs: hljs
})

createApp(App)
  .use(store)
  .use(router)
  .use(SvgIcon)
  .use(Element)
  .use(VMdEditor)
  .use(VMdPreview)
  .mount('#app')
