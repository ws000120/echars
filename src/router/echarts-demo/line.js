export default [
  {
    path: '/line',
    name: 'line',
    meta: {
      title: '折线图',
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
        path: 'line1',
        name: 'line1',
        meta: {
          title: '折线图1',
          icon: '',
          description: '',
        },
        component: () => import('@/components/line'),
      },
    ],
  },
]
