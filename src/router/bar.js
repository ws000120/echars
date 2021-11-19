import * as path from "path";

export default [
  {
    path: 'index',
    name: '柱状图',
    children: [
      {
        path: '',
        name: '柱状图1',
        component: () => import('@/components/bar')
      },
      {
        path: 'bar_1',
        name: '柱状图2',
        component: () => import('@/components/bar/bar_1')
      },
      {
        path: 'bar_2',
        name: '柱状图3',
        component: () => import('@/components/bar/bar_2')
      },

    ]
  }
]
