import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { MutActKey, StorageModuleKey } from '@/constants'
import { homeRoutes } from './home'
import store from '@/store'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/css-case',
    name: 'CSSCase',
    meta: {
      title: 'CSS练习',
      notMenu: true,
      keepAlive: false
    },
    component: () => import('@/views/cssCase')
  },
  {
    path: '/',
    name: 'Home',
    redirect: '/user-center',
    component: () => import('@/views/home'),
    meta: {
      title: '我',
      icon: 'home',
      notMenu: false
    },
    children: [...homeRoutes]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/index')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('@/views/test')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const auth = localStorage.getItem(StorageModuleKey.TOKEN_KEY)
  if (to.meta.keepAlive) {
    // 缓存页面
    store.dispatch(MutActKey.ADD_COMPONENT_CACHE, to.name)
  }

  if (auth) {
    if (to.name === 'Login') {
      window.$message('您已处于登录状态', 'warning')
      next({ name: 'Home' })
    } else {
      next()
    }
  } else {
    // TODO 登录权限判断
    window.$message('您尚未登录', 'warning')
    if (to.name === 'Login') {
      next()
    } else {
      next({ name: 'Login' })
    }
  }

  // next()
})

export default router
