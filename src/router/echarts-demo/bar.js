import * as path from "path";

export default [
  {
    path: '/bar',
    name: 'bar',
    meta: {
      title: '柱状图',
      icon: '',
      description: '',
    },
    component: {
      render: (r) => {
        return r('router-view')
      }
    },
    children: [
      {
        path: 'bar1',
        name: 'bar1',
        meta: {
          title: '柱状图1',
          icon: '',
          description: '',
        },
        component: () => import('@/components/bar'),
      },
      {
        path: 'bar2',
        name: 'bar2',
        meta: {
          title: '柱状图2',
          icon: '',
          description: '',
        },
        component: () => import('@/components/bar/bar_2'),
      },
    ],
  },
]
