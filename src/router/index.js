import Vue from "vue";
import VueRouter from "vue-router";
import App from "@/App";
import echartsDemo from "@/router/echarts-demo";

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
      ...echartsDemo
    ],
  },
]
export default new VueRouter({
  routes
})

