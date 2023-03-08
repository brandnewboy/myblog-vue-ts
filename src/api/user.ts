import { LoginFormProps } from '@/types/base'
import { http, useHttp } from './request'

const USER_BASE_URL = '/user'
/**
 * 用户登录
 * @param formData 登录表单
 * @returns 结果
 */
export const userLogin = (formData: LoginFormProps) => {
  return http<LoginFormProps, { token: string }>(USER_BASE_URL + '/login', {
    method: 'POST',
    data: formData
  })
}

/**
 * 获取用户列表
 * @param param 搜索参数
 */
export const useUserList = (param: string) => {
  const res = useHttp(USER_BASE_URL + '/list', {
    method: 'GET',
    data: param
  })

  return res
}
