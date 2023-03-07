const { defineConfig } = require('@vue/cli-service')
const { resolve } = require('path')

const IS_PROD = process.NODE_ENV === 'production'
const path = require('path')

module.exports = defineConfig({
  /**
   * 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。你可以启用本选项，以避免构建后的代码中出现未转译的第三方依赖。
   * 如果对构建性能有所顾虑，你可以只转译部分特定的依赖：给本选项传一个数组，列出需要转译的第三方包包名或正则表达式即可。
   */
  transpileDependencies: true,

  // 开启保存自动代码检测
  lintOnSave: !IS_PROD,

  chainWebpack: config => {
    // 链式调用
    // 配置网站标题
    config.plugin('html').tap(args => {
      args[0].title = '谁的小破站'
      return args
    })

    config.resolve.alias.set('@', path.resolve('src'))

    config.module.rule('svg').exclude.add(resolve('src/icons')).end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  }
})
