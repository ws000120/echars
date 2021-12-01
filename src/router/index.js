import Vue from "vue";
import VueRouter from "vue-router";
import App from "@/App";
import echartsDemo from "@/router/echarts-demo";
import GDMap from "@/router/GDMap";
import locaMap from "@/router/locaMap";
import el from "element-ui/src/locale/lang/el";
import * as path from "path";

Vue.use(VueRouter)
let routes = [
  // {
  //   path: '',
  //   name: 'login',
  //   component: () => import('@/login'),
  // },
  {
    path: '',
    name: 'layout',
    component: () => import('@/components/Layout'),
    meta: {
      title: '首页',
      icon: '',
      description: '',
    },
    redirect: '/bar/bar1',
    children: [
      ...echartsDemo,
      ...GDMap,
      ...locaMap,
      {
        path: '/demo',
        name: 'demo',
        meta: {
          title: 'Vuex状态管理',
          icon: '',
          description: '',
        },
        component: () => import('@/view/demo'),
      },
      {
        path: '/detail',
        name: 'detail',
        meta: {
          title: '详情',
          icon: '',
          description: '',
          isHideMenu: true
        },
        props(route) {
          return {
            name: route.params.name,
            age: route.params.age,
            phone: route.params.phone,
            address: route.params.address,
          }
        },
        //路由独享守卫
        beforeEnter(to, from, next) {
          if (Object.keys(to.params).length) {
            next()
          } else {
            next({
              name: "demo"
            })
          }
        },
        component: () => import('@/view/demo/detail'),
      },
    ],
  },
]
export default new VueRouter({
  routes
})

