import Vue from "vue";
import VueRouter from "vue-router";
import App from "@/App";
import echartsDemo from "@/router/echarts-demo";
import GDMap from "@/router/GDMap";
import locaMap from "@/router/locaMap";

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
      ...locaMap
    ],
  },
]
export default new VueRouter({
  routes
})

