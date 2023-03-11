import { Blog } from '@/types/base'
import { http, useHttp } from './request'

const BLOG_BASE_URL = '/blog'

/**
 * 博客模块
 */

export const useArticleList = (param?: Partial<Blog>) => {
  const res = useHttp<Partial<Blog>, Blog[]>(BLOG_BASE_URL + '/list', {
    method: 'GET',
    data: param
  })

  return res
}

export const getArticleDetail = (id: number) => {
  return new Promise<Blog>(resolve => {
    http<{ id: number }, Blog[]>(BLOG_BASE_URL + '/list', {
      method: 'GET',
      data: { id }
    }).then(data => resolve(data[0]))
  })
}
