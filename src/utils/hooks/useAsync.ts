import { ref } from 'vue'

export const useAsync = <D>(cbResult: Promise<D>) => {
  const result = ref<D>()
  const isError = ref<boolean>(false)
  const error = ref<Error>()
  const isLoading = ref<boolean>(true)
  cbResult
    .then(res => {
      result.value = <D>res
    })
    .catch(err => {
      isError.value = true
      error.value = err
    })
    .finally(() => {
      isLoading.value = false
    })

  return { result, error, isError, isLoading }
}
