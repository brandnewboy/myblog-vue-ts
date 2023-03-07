import { App } from 'vue'
import SvgIcon from '@/components/SvgIcon'

const svgIconsContext = require.context('./svg', false, /\.svg$/)

svgIconsContext.keys().forEach(path => svgIconsContext(path))

export default {
  install(app: App) {
    app.component('svg-icon', SvgIcon)
  }
}
