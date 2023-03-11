import { Blog } from '@/types/base'
import { useHttp } from './request'

const BLOG_BASE_URL = '/blog'
export const useArticleList = (param?: Partial<Blog>) => {
  const res = useHttp<Partial<Blog>, Blog[]>(BLOG_BASE_URL + '/list', {
    method: 'GET',
    data: param
  })

  return res
}
