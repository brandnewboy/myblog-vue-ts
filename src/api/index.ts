import { ref } from 'vue'
import { useDebouncedRef } from '@/utils/hooks/use-debounced-ref'
import { UserProps } from '@/types/base'

export const useUserList = (param?: string) => {
  const userList = ref<UserProps[]>([])
  const debouncedParam = useDebouncedRef(param, 1000, param => {
    /**
     * 随便模仿一下请求
     */
    fetch('http:xxxxxxxxxxxx', {
      method: 'POST',
      body: param
    }).then(async res => {
      userList.value = await res.json()
    })
  })

  return {
    data: useUserList,
    refValue: debouncedParam
  }
}
