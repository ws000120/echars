export default [
  {
    path: '/pie',
    name: 'pie',
    meta: {
      title: '饼状图',
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
        path: 'pie1',
        name: 'pie1',
        meta: {
          title: '饼状图1',
          icon: '',
          description: '',
        },
        component: () => import('@/components/pie'),
      },
      {
        path: 'pie2',
        name: 'pie2',
        meta: {
          title: '饼状图2',
          icon: '',
          description: '',
        },
        component: () => import('@/components/pie/pie2'),
      },
    ],
  },
]
