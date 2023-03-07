import { RequestConfigProps } from '@/types/api/request'
import Utils from '@/utils'

const BASE_URL = 'http://localhost:3001'

/**
 * 网络请求
 * @param {string} path 请求路径
 * @param {RequestConfigProps} options 请求配置
 * @returns 请求结果
 */
export const http = async <R extends { [k: string]: any }, D>(
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
    param = Utils.getQueryStr(Utils.cleanObject<R>(data))
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

  return new Promise<D>((resolve, reject) => {
    fetch(`${BASE_URL}${path}`, config)
      .then(async res => {
        if (res.status === 401) reject({ msg: '请授权' })
        if (res.ok) {
          resolve(await res.json())
        } else {
          reject(new Error('请求出错'))
        }
      })
      .catch(() => {
        reject(new Error('请求出错!'))
      })
  })
}
