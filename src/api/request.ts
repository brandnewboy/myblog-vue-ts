import { useAuth } from '@/components/AuthProvider'
import { RequestConfigProps, ResponseProps } from '@/types/api/request'
import Utils from '@/utils'
import { useAsync } from '@/utils/hooks/useAsync'
import { ElMessage } from 'element-plus'

const BASE_URL = 'http://localhost:3001/api/v1'

/**
 * 网络请求
 * @param {string} path 请求路径
 * @param {RequestConfigProps} options 请求配置
 * @returns 请求结果
 */
export const http = async <R extends object | string | number, D>(
  path: string,
  options: RequestConfigProps<R>
) => {
  const { method, data, token, headers } = options
  let param = ''
  if (
    (method === 'get' || method === 'GET') &&
    data &&
    typeof data === 'object'
  ) {
    param = Utils.getQueryStr(Utils.cleanObject(data))
    if (param) path += `?${param}`
  }

  const config: RequestInit = {
    method,
    headers: {
      Authotization: token ? `Bearer ${token}` : '',
      'Content-Type': 'application/json',
      ...headers
    },
    body: JSON.stringify(data)
  }

  if (method === 'GET' || method === 'get') {
    delete config['body']
  }

  return new Promise<ResponseProps<D>>((resolve, reject) => {
    fetch(`${BASE_URL}${path}`, config)
      .then(async res => {
        if (res.status === 401) reject({ msg: '请授权' })
        if (res.ok) {
          const data = await res.json()
          if (data.code !== 200) {
            ElMessage({
              message: data.msg || '请求出错',
              type: 'error'
            })
          }
          resolve(data)
        } else {
          ElMessage({
            message: '请求出错!请检查网络或服务端设置!',
            type: 'error'
          })
          reject(new Error('请求出错'))
        }
      })
      .catch(() => {
        ElMessage({
          message: '请求出错!请检查网络或服务端设置!',
          type: 'error'
        })
        reject(new Error('请求出错!'))
      })
  })
}

/**
 * useHtpp Hook
 * @param path 请求路径
 * @param options 配置选项
 * @returns
 */
export const useHttp = <
  RequestData extends object | number | string,
  ResponseData
>(
  path: string,
  options: RequestConfigProps<RequestData>
) => {
  const auth = useAuth()
  if (!options.token && auth) {
    options.token = auth
  }
  const res = useAsync<ResponseProps<ResponseData>>(
    http<RequestData, ResponseData>(path, options)
  )
  return res
}
