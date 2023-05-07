import { Blog } from '@/types/base'
import { useLoading } from '@/utils/hooks'
import { http, useHttp } from './request'
import { ref } from 'vue'

const BLOG_BASE_URL = '/blog'

/**
 * 博客模块
 */

// export const useArticleList = (param?: Partial<Blog>) => {
//   const res = useHttp<Partial<Blog>, Blog[]>(BLOG_BASE_URL + '/list', {
//     method: 'GET',
//     data: param
//   })

//   return res
// }

export const useArticleList = (param?: Partial<Blog>) => {
  const data = ref<Blog[]>()
  const isError = ref<boolean>(false)
  const error = ref<Error>()
  const isLoading = ref<boolean>(true)
  const reFetch = () => {
    http<Partial<Blog>, Blog[]>(BLOG_BASE_URL + '/list', {
      method: 'GET',
      data: param
    })
      .then(res => {
        data.value = res
      })
      .catch(err => {
        isError.value = true
        error.value = err
      })
      .finally(() => {
        isLoading.value = false
      })
  }

  reFetch()

  return {
    data,
    isError,
    isLoading,
    error,
    reFetch
  }
}

export const useArticleDetail = (id: string) => {
  const data = ref<Blog>()
  const reFetch = () => {
    return new Promise<Blog>(resolve => {
      http<{ id: string }, Blog[]>(BLOG_BASE_URL + '/list', {
        method: 'GET',
        data: { id }
      }).then(res => {
        data.value = res[0]
      })
    })
  }

  reFetch()

  return { reFetch, data }
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
