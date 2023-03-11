import { RouteRecordRaw } from 'vue-router'

export const homeRoutes: Array<RouteRecordRaw> = [
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
    path: 'article-detail/:id',
    name: 'ArticleDetail',
    component: () => import('@/views/articleDetail'),
    meta: {
      title: '文章详情',
      notMenu: true,
      keepAlive: false
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
