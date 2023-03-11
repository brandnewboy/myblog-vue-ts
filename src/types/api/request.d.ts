export type HttpMethods =
  | 'get'
  | 'GET'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'
  | 'delete'
  | 'DELETE'

export interface RequestConfigProps<
  T extends object | string | number | any = unknown
> {
  data?: T
  token?: string
  method: HttpMethods
  timeout: number
  headers?: {
    [x: string]: string
  }
  [k: string]: any
}

/**
 * 统一响应格式，泛型为除状态码与消息以外的具体的数据类型
 */
export interface ResponseProps<T = unknown> {
  msg: string
  code: number
  data?: T
}
