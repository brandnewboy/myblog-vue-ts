import { customRef } from 'vue'

export const useDebouncedRef = <T>(
  value: T,
  delay = 1000,
  fn?: (value?: T) => void
) => {
  let timer: NodeJS.Timeout

  return customRef<T>((track: () => void, trigger: () => void) => {
    return {
      get() {
        track()
        return value
      },
      set(newValue) {
        clearTimeout(timer)

        timer = setTimeout(() => {
          trigger()
          value = newValue
          fn?.(value)
        }, delay)
      }
    }
  })
}
