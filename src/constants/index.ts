export class StoreModuleName {
  public static APP = 'AppModule'
  public static USER = 'UserModule'
}

export class MutActKey {
  public static LOGIN = StoreModuleName.USER + '/LOGIN'
  public static LOGOUT = StoreModuleName.USER + '/LOGOUT'
  public static TOGGLE_LOCALE = StoreModuleName.APP + '/TOGGLE_LOCALE'
  public static COLLAPSE_ASIDE_BAR = StoreModuleName.APP + '/COLLAPSE_ASIDE_BAR'
  public static TOGGLE_MENU_INDEX = StoreModuleName.APP + '/TOGGLE_MENU_INDEX'
  public static ADD_ARTICLE = StoreModuleName.APP + '/ADD_ARTICLE'
  public static ADD_COMPONENT_CACHE =
    StoreModuleName.APP + '/ADD_COMPONENT_CACHE'
}

export class StorageModuleKey {
  public static TOKEN_KEY = 'TOKEN'
}

export const NetErrorMsg = '请求出错!请检查网络或服务端设置!'
export const RequestErroMsg = '请求出错'
export const RequestTimeoutMsg = '请求超时'
export const UnauthorizedMsg = '请求未授权!'
