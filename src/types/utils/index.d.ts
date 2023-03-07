export type FocusControlType = 'focus'
export type BlurControlType = 'blur'

export interface ContainerBgControllerProps {
  loginInput?: NodeListOf<HTMLElement>
  loginForm?: HTMLElement | null
  container?: HTMLElement | null
  foucusControl: () => void
  blurControl: () => void
}
