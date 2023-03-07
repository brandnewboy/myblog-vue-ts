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

export interface RequestConfigProps<T = unknown> {
  data?: T
  token?: string
  method: HttpMethods
  headers?: {
    [x: string]: string
  }
  [k: string]: any
}

export interface ResponseProps<T = unknown> {
  msg: string
  code: number
  data?: T
}
