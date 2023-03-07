import { ResponseProps } from '@/types/api/request'
import { LoginFormProps } from '@/types/base'
import { useHttp } from './request'

/**
 * 用户登录
 * @param formData 登录表单
 * @returns 结果
 */
export const userLogin = (formData: LoginFormProps) => {
  const res = useHttp<LoginFormProps, ResponseProps<boolean>>('/login', {
    method: 'POST',
    data: formData
  })

  return { ...res }
}
