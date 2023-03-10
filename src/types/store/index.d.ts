export type LocaleType = 'zhCn' | 'en'

export interface AppModuleStateProps {
  locale: LocaleType
  asideCollapse: boolean
  activeMenuIndex: string
  componentCacheList: string[]
  articleList: ArticleProps[]
}

export interface UserModuleStateProps {
  token?: string
  isLogin: boolean
}

export interface RootStateProps {
  AppModule: AppModuleStateProps
  UserModule: UserModuleStateProps
}
