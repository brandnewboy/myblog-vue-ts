import { LoginFormProps } from '@/types/base'
import { http, useHttp } from './request'

/**
 * 用户登录
 * @param formData 登录表单
 * @returns 结果
 */
export const userLogin = (formData: LoginFormProps) => {
  return http<LoginFormProps, { token: string }>('/login', {
    method: 'POST',
    data: formData
  })
}

/**
 * 获取用户列表
 * @param param 搜索参数
 */
export const useUserList = (param: string) => {
  const res = useHttp('/user-list', {
    method: 'GET',
    data: param
  })

  return res
}
