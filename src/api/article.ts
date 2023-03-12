import { Blog } from '@/types/base'
import { useLoading } from '@/utils/hooks'
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

export const getArticleDetail = (id: string) => {
  return new Promise<Blog>(resolve => {
    http<{ id: string }, Blog[]>(BLOG_BASE_URL + '/list', {
      method: 'GET',
      data: { id }
    }).then(data => resolve(data[0]))
  })
}

export const useAddBlog = (blog: Blog) => {
  const { startLoading, stopLoading } = useLoading({ text: '提交中' })
  startLoading()
  return new Promise(resolve => {
    http<Blog, { success: boolean }>(BLOG_BASE_URL + '/add', {
      method: 'POST',
      data: blog
    })
      .then(res => resolve(res))
      .finally(stopLoading)
  })
}
