import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { MutActKey } from '@/constants'
import store from '@/store'

const routes: Array<RouteRecordRaw> = [
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
    children: [
      {
        path: 'user-center',
        name: 'UserCenter',
        component: () => import('@/views/userCenter'),
        meta: {
          title: '关于自己',
          notMenu: false,
          keepAlive: true,
          icon: 'user_center'
        }
      },
      {
        path: 'user-article',
        name: 'UserArticle',
        component: () => import('@/views/userArticle'),
        meta: {
          title: '我的文章',
          notMenu: false,
          icon: 'user_article'
        }
      },
      {
        path: 'article-detail',
        name: 'ArticleDetail',
        component: () => import('@/views/articleDetail'),
        meta: {
          title: '文章详情',
          notMenu: true
        }
      },
      {
        path: 'create-article',
        name: 'CreateArticle',
        component: () => import('@/views/createArticle'),
        meta: {
          title: '创建文章',
          notMenu: true
          // keepAlive: true
        }
      }
    ]
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

router.beforeEach((to, from) => {
  if (to.meta.keepAlive) {
    // 缓存页面
    store.dispatch(MutActKey.ADD_COMPONENT_CACHE, to.name)
  }
})

export default router
