import * as path from "path";

export default [
  {
    path: '/gdmap',
    name: 'gdmap',
    meta: {
      title: '地图',
      icon: '',
      description: '',
    },
    component: () => import('@/components/GDMap'),
  },
]
