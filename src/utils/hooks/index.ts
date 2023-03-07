import { reactive, ref } from 'vue'
import { ElLoading } from 'element-plus'

export const useWebmasterInfo = () => {
  const data = reactive<{
    basic: {
      name: string
      birth: string
      address: string
      sex: string
      school: string
      github: string
    }
    tags: string[]
    desc: string
  }>({
    basic: {
      name: '混吃等死的咸鱼仔',
      birth: '2002-09-28',
      address: '中国·云南·昆明',
      sex: '男',
      school: '云南财经大学',
      github: 'www.github.cn/brandnewboy'
    },
    tags: ['javascript', 'java', 'Typescript', 'vue', 'React', '篮球'],
    desc: '自学前端滴大学牲，喜欢打篮球，不打游戏（重点），希望自己能多学一些东西吧'
  })

  const icons = reactive<{
    [k in string]: string
  }>({
    混吃等死的咸鱼仔: 'name',
    '2002-09-28': 'birth',
    '中国·云南·昆明': 'address',
    男: 'sex_boy',
    云南财经大学: 'edu',
    'www.github.cn/brandnewboy': 'github'
  })

  return [data, icons] as const
}

type LoadingOptionsProps = Parameters<typeof ElLoading.service>

export const useLoading = ({
  text,
  background
}: {
  text?: string
  background?: string
} & Partial<Omit<LoadingOptionsProps, 'text' | 'background'>>) => {
  const { service } = ElLoading
  const loadingInstance = ref<ReturnType<typeof service>>()

  const startLoading = () => {
    loadingInstance.value = service({
      lock: true,
      text: text || 'Loading',
      background: background || 'rgba(0, 0, 0, 0.7)'
    })
  }

  return [loadingInstance, startLoading] as const
}
