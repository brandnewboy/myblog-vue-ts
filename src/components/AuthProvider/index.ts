import AuthProvider from './AuthProvider.vue'
import { inject } from 'vue'

export default AuthProvider

export const useAuth = () => {
  const auth = inject<string>('auth')

  return auth
}
