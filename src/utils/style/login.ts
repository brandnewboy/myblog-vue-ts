import {
  ContainerBgControllerProps,
  FocusControlType,
  BlurControlType
} from '@/types/utils/index'

export class ContainerBgController implements ContainerBgControllerProps {
  // eslint-disable-next-line no-undef
  public loginInput?: NodeListOf<HTMLElement>
  public loginForm?: HTMLElement | null
  public container?: HTMLElement | null

  constructor() {
    this.loginInput = document.querySelectorAll<HTMLElement>('.login-input')
    this.loginForm = document.querySelector('.login-form')
    this.container = document.querySelector('.login-container')
  }

  public toggleControl(type: FocusControlType): void
  public toggleControl(type: BlurControlType): void
  public toggleControl(type: FocusControlType | BlurControlType): void {
    switch (type) {
      case 'focus':
        this.foucusControl()
        break

      case 'blur':
        this.blurControl()
        break
    }
  }

  public foucusControl() {
    this.container?.classList.add('mask')
    if (this.loginForm) {
      this.loginForm.style.height = '330px'
      this.loginForm.style.width = '440px'
    }
    if (this.loginInput) {
      for (const element of this.loginInput) {
        // eslint-disable-next-line no-extra-semi
        ;(element as HTMLElement).style.height = '36px'
        ;(element as HTMLElement).style.width = '220px'
      }
    }
  }

  public blurControl() {
    this.container?.classList.remove('mask')
    if (this.loginForm) {
      this.loginForm.style.height = '300px'
      this.loginForm.style.width = '400px'
    }
    if (this.loginInput) {
      for (const element of this.loginInput) {
        // eslint-disable-next-line no-extra-semi
        ;(element as HTMLElement).style.height = '33px'
        ;(element as HTMLElement).style.width = '200px'
      }
    }
  }
}
