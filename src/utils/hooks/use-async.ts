import { ref } from 'vue'

interface RetryProps {
  fn: (...args: any[]) => any
  args: any
}

export const useAsync = <D>(cbResult: Promise<D>, retryConf?: RetryProps) => {
  const data = ref<D>()
  const isError = ref<boolean>(false)
  const error = ref<Error>()
  const isLoading = ref<boolean>(true)
  cbResult
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

  const retry = () => {
    return retryConf?.fn(retryConf.args)
  }

  return { data, error, isError, isLoading, retry }
}
