<template>
  <div :id="id" style="width: 100%;height: 100%">

  </div>
</template>

<script>
  import * as echarts from 'echarts/core';
  import {
    TitleComponent,
    TooltipComponent,
    LegendComponent
  } from 'echarts/components';
  import {PieChart} from 'echarts/charts';
  import {LabelLayout} from 'echarts/features';
  import {CanvasRenderer} from 'echarts/renderers';

  echarts.use([
    TitleComponent,
    TooltipComponent,
    LegendComponent,
    PieChart,
    CanvasRenderer,
    LabelLayout
  ]);

  export default {
    name: "pie1",
    data() {
      return {
        id: 'pie_canvas',
        myChart: null,
      }
    },
    methods: {
      myChart_render() {
        this.myChart = echarts.init(document.getElementById(this.id));
        // pieData就是需要设置给饼图的数据, 数组,数组中包含一个又一个的对象, 每一个对象中, 需要有name和value
        let pieData = [
          {
            name: '淘宝',
            value: 11231
          },
          {
            name: '京东',
            value: 22673
          },
          {
            name: '唯品会',
            value: 6123
          },
          {
            name: '1号店',
            value: 8989
          },
          {
            name: '聚美优品',
            value: 6700
          }
        ]
        let option = {
          series: [
            {
              type: 'pie',
              data: pieData,
              label: { // 饼图文字的显示
                show: true, // 显示文字
                //formatter: 'hehe' // 决定文字显示的内容
                formatter: function (arg) {
                  // console.log(arg)
                  return arg.name + '平台' + arg.value + '元\n' + arg.percent + '%'
                }
              },
              // radius: 20 // 饼图的半径
              // radius: '20%' // 百分比参照的是宽度和高度中较小的那一部分的一半来进行百分比设置
              // radius: ['50%', '75%'] // 第0个元素代表的是內圆的半径 第1个元素外圆的半径
              roseType: 'radius', // 南丁格尔图 饼图的每一个区域的半径是不同的
              // selectedMode: 'single' // 选中的效果,能够将选中的区域偏离圆点一小段距离
              selectedMode: 'multiple',
              selectedOffset: 30
            }
          ]
        }
        option && this.myChart.setOption(option);
        window.addEventListener('resize', () => {
          this.myChart.resize()
        })
      }
    },
    mounted() {
      this.myChart_render()
    },
  }
</script>

<style lang='' scoped>

</style>
