import { createStore, ModuleTree } from 'vuex'
import { RootStateProps } from '@/types/store'
import Utils from '@/utils'
import getters from './getters'

/**
 * 此处自己规定了模块命名规范为 'xxx'Module, 'xxx'为命名文件时的名字除去后缀名
 * 利用webpack的API会自动按该名字引入注册为模块
 */

// 模块引入
const moduleContext = require.context('./modules', false, /\.ts$/)
const modules = moduleContext
  .keys()
  .reduce<ModuleTree<RootStateProps>>((modules, modulePath) => {
    const moduleName: string = Utils.getModuleName(modulePath, 'Module')
    modules[moduleName] = moduleContext(modulePath).default
    return modules
  }, {})

export default createStore<RootStateProps>({
  modules,
  getters
})
