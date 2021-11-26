import * as path from "path";

export default [
  {
    path: '/locamap',
    name: 'locamap',
    meta: {
      title: '数据可视化地图',
      icon: '',
      description: '',
    },
    component: () => import('@/components/locaMap'),
  },
]
