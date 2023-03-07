import { Module } from 'vuex'
import { UserModuleStateProps, RootStateProps } from '@/types/store'
import { LoginFormProps } from '@/types/base'
import { StorageModuleKey } from '@/constants'

const userModule: Module<UserModuleStateProps, RootStateProps> = {
  namespaced: true,
  state: () => ({
    isLogin: false,
    token: localStorage.getItem(StorageModuleKey.TOKEN_KEY) || ''
  }),
  mutations: {
    LOGIN(state, { token }) {
      state.isLogin = true
      state.token = token
    }
  },
  actions: {
    LOGIN({ commit }, token: string) {
      localStorage.setItem(StorageModuleKey.TOKEN_KEY, '123')
      commit('LOGIN', token)
    }
  }
}

export default userModule
