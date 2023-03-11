import { Module } from 'vuex'
import { UserModuleStateProps, RootStateProps } from '@/types/store'
import { StorageModuleKey } from '@/constants'
import router from '@/router'

const userModule: Module<UserModuleStateProps, RootStateProps> = {
  namespaced: true,
  state: () => ({
    isLogin: false,
    token: localStorage.getItem(StorageModuleKey.TOKEN_KEY) || ''
  }),
  mutations: {
    LOGOUT(state) {
      ;(state.isLogin = false), (state.token = '')
    },
    LOGIN(state, token) {
      state.isLogin = true
      state.token = token
    }
  },
  actions: {
    LOGOUT({ commit }) {
      localStorage.clear()
      commit('LOGOUT')
      router.push({ name: 'Login' })
    },
    LOGIN({ commit }, token: string) {
      localStorage.setItem(StorageModuleKey.TOKEN_KEY, token)
      commit('LOGIN', token)
    }
  }
}

export default userModule
