export interface LoginFormProps {
  username: string
  password: string
}

export interface ArticleProps {
  id: string | number
  desc: string
  title: string
  content: string
}

export interface UserProps {
  id: number
  name: string
  age: number
}

type MessageType = 'success' | 'warning' | 'info' | 'error'
