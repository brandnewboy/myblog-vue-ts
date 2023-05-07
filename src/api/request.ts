import { useAuth } from '@/components/AuthProvider'
import {
  MutActKey,
  NetErrorMsg,
  RequestErroMsg,
  RequestTimeoutMsg
} from '@/constants'
import { RequestConfigProps, ResponseProps } from '@/types/api/request'
import Utils from '@/utils'
import { useAsync } from '@/utils/hooks/use-async'
import { ElMessageBox } from 'element-plus'
import store from '@/store'

const BASE_URL = 'http://localhost:3001/api/v1'

const logout = () => {
  ElMessageBox.alert('登陆状态已过期!', '提示', {
    confirmButtonText: 'OK',
    callback: () => {
      store.dispatch(MutActKey.LOGOUT)
    }
  })
}

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
  const token = store.getters.token
  const controller = new AbortController()
  const { method, timeout, data, headers } = options
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
      authorization: token ? `Bearer ${token}` : '',
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
  return new Promise<D>((resolve, reject) => {
    fetch(`${BASE_URL}${path}`, config)
      .then(async res => {
        if (res.status === 401) {
          logout()
          reject('请授权')
          return
        }
        if (res.ok) {
          const data = await res.json()

          data.code !== 200 &&
            window.$message(data.msg || RequestErroMsg, 'success')

          if (data.code === 401) {
            logout()
            reject()
            return
          }

          resolve(data.data)
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
  const res = useAsync<ResponseData>(
    http<RequestData, ResponseData>(path, options)
  )

  return res
}
