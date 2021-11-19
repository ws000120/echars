import bar from './bar'
import pie from './pie'
import line from './line'

export default [
  {
    path: 'bar',
    name: '柱状图',
    children: [
      ...bar
    ]
  },
  {
    path: 'pie',
    name: '饼图',
    children: [
      ...pie
    ]
  },
  {
    path: 'line',
    name: '折线图',
    children: [
      ...line
    ]
  }
]
