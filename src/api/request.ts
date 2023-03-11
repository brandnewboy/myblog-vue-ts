import { useAuth } from '@/components/AuthProvider'
import { NetErrorMsg, RequestErroMsg, RequestTimeoutMsg } from '@/constants'
import { RequestConfigProps, ResponseProps } from '@/types/api/request'
import Utils from '@/utils'
import { useAsync } from '@/utils/hooks/use-async'

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
  const controller = new AbortController()
  const { method, timeout, data, token, headers } = options
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
    ...options,
    method,
    headers: {
      Authotization: token ? `Bearer ${token}` : '',
      'Content-Type': 'application/json',
      ...headers
    },
    body: JSON.stringify(data),
    signal: controller.signal
  }

  if (method === 'GET' || method === 'get') {
    delete config['body']
  }

  const timeoutId = setTimeout(() => controller.abort(), timeout || 5000)
  return new Promise<ResponseProps<D>>((resolve, reject) => {
    fetch(`${BASE_URL}${path}`, config)
      .then(async res => {
        if (res.status === 401) reject({ msg: '请授权' })
        if (res.ok) {
          const data = await res.json()

          window.$message(
            data.msg || RequestErroMsg,
            data.code !== 200 ? 'error' : 'success'
          )

          resolve(data)
        } else {
          window.$message(NetErrorMsg, 'error')
          reject(new Error(NetErrorMsg))
        }
      })
      .catch((e: Error) => {
        let msg = e ? e.message : ''
        if (msg === 'The user aborted a request.') msg = RequestTimeoutMsg
        window.$message(msg, 'error')
        reject(new Error(RequestErroMsg))
      })
      .finally(() => clearTimeout(timeoutId))
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
