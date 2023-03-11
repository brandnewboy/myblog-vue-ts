export interface LoginFormProps {
  username: string
  password: string
}

export interface Blog {
  id: number
  title: string
  content: string
  createtime: number
  author: string
  desc: string
}

export interface UserProps {
  id: number
  name: string
  age: number
}

type MessageType = 'success' | 'warning' | 'info' | 'error'
