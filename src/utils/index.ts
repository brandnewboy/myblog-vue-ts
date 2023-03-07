import { Validator } from './formValidate'
import { RouteRecordNormalized } from 'vue-router'

export default class Utils {
  /**
   * 深拷贝
   * @param obj
   * @returns
   */
  public static deepClone<T = any>(obj: T) {
    if (typeof obj !== 'object' || obj === null) return obj

    let res: any
    if (Array.isArray(obj)) {
      res = []
    } else {
      res = {}
    }
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        res[key] = this.deepClone(obj[key])
      }
    }
    return res as T
  }

  /**
   * 清除对象中无效的参数
   * @param obj
   * @returns
   */
  public static cleanObject<T extends { [k: string]: any }>(obj: T) {
    const newObj = this.deepClone(obj)
    return Object.keys(obj).reduce<{ [k: string]: any }>((res, key) => {
      const value = newObj[key]
      if (value && value !== 0) {
        res[key] = value
      }
      return res
    }, {}) as T
  }

  /**
   * 验证指定键值在指定对象中是否合法
   * @param key
   * @param object
   * @returns
   */
  public static isValidKey(
    key: string | number | symbol,
    object: object
  ): key is keyof typeof object {
    return key in object
  }

  /**
   * 根据对象值获得get请求的字符串
   * @param obj
   * @returns
   */
  public static getQueryStr(obj: object) {
    return Object.keys(obj).reduce((res, key, index, arr) => {
      const value = this.isValidKey(key, obj) && obj[key]
      res += `${key}=${value}`
      if (index !== arr.length - 1) res += '&'
      return res
    }, '')
  }

  /**
   * 生产模块名
   * @param path
   * @param moduleSuffix
   * @returns
   */
  public static getModuleName(path: string, moduleSuffix: string): string {
    path = path.replace(/([^]*)\//gi, '').replace('.ts', '')
    const firstChar = path.split('')[0]
    const firstCharUpperCase = firstChar.toUpperCase()
    const resModuleName = path.replace(firstChar, firstCharUpperCase)
    return resModuleName + moduleSuffix
  }

  /**
   * 生成菜单数据
   * @param routes
   * @returns
   */
  public static generateMenuInfo(
    routes: RouteRecordNormalized[]
  ): RouteRecordNormalized[] {
    const menuRoutes = routes.reduce<RouteRecordNormalized[]>(
      (menuRoutes, route) => {
        if (route.children.length !== 0) {
          menuRoutes.push(route)
        }
        return menuRoutes
      },
      []
    )
    return menuRoutes
  }

  /**
   * 判断外部资源
   * @param path
   * @returns
   */
  public static isExternal(path: string): boolean {
    return /^(https?:|mailto:|tel:)/.test(path)
  }

  public static Validator = Validator
}
