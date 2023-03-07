/**
 * 表单验证工具类
 */

export class Validator {
  public static validateUsername(rule: any, value: string, callback: any) {
    if (!value) {
      callback(new Error('请输入用户名'))
      return
    }
    callback()
  }

  public static validatePassword(rule: any, value: string, callback: any) {
    if (value.length < 6) {
      callback(new Error('密码长度至少为6位'))
      return
    }
    callback()
  }
}
