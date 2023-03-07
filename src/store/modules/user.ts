import { Module } from 'vuex'
import { UserModuleStateProps, RootStateProps } from '@/types/store'
import { LoginFormProps } from '@/types/base'

const userModule: Module<UserModuleStateProps, RootStateProps> = {
  namespaced: true,
  state: () => ({
    isLogin: false
  }),
  mutations: {
    LOGIN(state) {
      state.isLogin = true
    }
  },
  actions: {
    LOGIN({ commit }, loginForm: LoginFormProps) {
      return new Promise<boolean>((resolve, reject) => {
        if (loginForm.password === '123456') {
          commit('LOGIN', loginForm)
          resolve(true)
        } else {
          reject(false)
        }
      })
    }
  }
}

export default userModule
