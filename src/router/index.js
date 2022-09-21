import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'NavAndCopyright',
    meta:{
      name:'导航和版权'
    },
    component: HomeView,
    children:[
      {
        path: '/',
        name: 'home',
        title: '首页',
        meta: {
          title: '首页'
        },
        //懒加载模式  可以不用再头部import
        component: () => import('../views/Home/index.vue'),
        children:[{
          path: '/',
          name: 'home',
          title: '首页列表',
          meta: {
            title: '首页列表'
          },
          //懒加载模式  可以不用再头部import
          component: () => import('../views/Home//HomeList/index.vue'),

        }]
      },  
      {
        path: '/activity',
        name: 'Activity',
        title: '活动界面',
        meta: {
          title: '活动页面'
        },
        //懒加载模式  可以不用再头部import
        component: () => import('../views/Activity/index.vue'),
        children:[{
          path: '/activityInfo',
          name: 'ActivityInfo',
          title: '活动详细信息',
          meta: {
            title: '活动详细信息'
          },
          //懒加载模式  可以不用再头部import
          component: () => import('../views/Activity/ActivityInfo/index.vue'),

        },
        {
          path: '/activityList',
          name: 'ActivityList',
          title: '活动列表搜索',
          meta: {
            title: '活动列表搜索'
          },
          //懒加载模式  可以不用再头部import
          component: () => import('../views/Activity/ActivityList/index.vue'),

        }
      ]
      },  
      {
        path: '/personalCenter',
        name: 'PersonalCenter',
        title: '个人中心界面',
        meta: {
          title: '个人中心页面'
        },
        //懒加载模式  可以不用再头部import
        component: () => import('../views/PersonalCenter/index.vue'),
        children:[{
          path: '/personalCenterList',
          name: 'PersonalCenterList',
          title: '个人中心界面列表',
          meta: {
            title: '个人中心页面列表'
          },
          //懒加载模式  可以不用再头部import
          component: () => import('../views/PersonalCenter/PersonalCenterList/index.vue'),
          children:[{
            path: '/',
            name: 'join',
            title: '我参加的活动',
            meta: {
              title: '我参加的活动'
            },
            //懒加载模式  可以不用再头部import
            component: () => import('../views/PersonalCenter/Show/Join/index.vue'),
           }
           //,{
          //   path: '/Apply',
          //   name: 'apply',
          //   title: '我申请的活动',
          //   meta: {
          //     title: '我申请的活动'
          //   },
          //   //懒加载模式  可以不用再头部import
          //   component: () => import('../views/PersonalCenter/Show/Apply/index.vue'),
          // }
           ,{
            path: '/collection',
            name: 'Collection',
            title: '我收藏的活动',
            meta: {
              title: '我收藏的活动'
            },
            //懒加载模式  可以不用再头部import
            component: () => import('../views/PersonalCenter/Show/Collection/index.vue'),
          },{
            path: '/Setting',
            name: 'setting',
            title: '设置',
            meta: {
              title: '设置'
            },
            //懒加载模式  可以不用再头部import
            component: () => import('../views/PersonalCenter/Show/Setting/index.vue'),
          }]
        }]
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    title: '登入界面',
    meta: {
      title: '登入界面'
    },
    //懒加载模式  可以不用再头部import
    component: () => import('../views/Login/index.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
