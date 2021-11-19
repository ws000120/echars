import Main from '@/components/Layout/Layout'
import menu from './menu'

export default [
  {
    path: '/',
    name: 'home',
    component: Main,
    children: [
      ...menu
    ]
  },
]
