<template>
  <div :id="id" style="width: 100%;height: 100%">

  </div>
</template>

<script>
  import * as echarts from 'echarts/core';
  import {LegendComponent} from 'echarts/components';
  import {TitleComponent} from 'echarts/components'
  import {GridComponent} from 'echarts/components';
  import {BarChart} from 'echarts/charts';
  import {CanvasRenderer} from 'echarts/renderers';
  import {TooltipComponent} from 'echarts/components';

  echarts.use([GridComponent,TooltipComponent, BarChart, CanvasRenderer, TitleComponent, LegendComponent,]);

  export default {
    name: "bar1",
    data() {
      return {
        id: 'bar_canvas',
        myChart: null,
        resizeTimer: null
      }
    },
    methods: {
      myChart_render() {
        this.myChart = echarts.init(document.getElementById(this.id));
        var xDataArr = ['张三', '李四', '王五', '闰土', '小明', '茅台', '二妞', '大强']
        var yDataArr = [88, 92, 63, 77, 94, 80, 72, 86]
        var option = {
          title: { // 标题设置
            text: '成绩展示', // 标题文字
            textStyle: { // 标题文字样式设置
              color: 'red'
            },
            borderWidth: 5, // 标题边框宽度
            borderColor: 'blue', // 标题边框颜色
            borderRadius: 5, // 标题边框圆角
            left: 50, // 标题距离左边的距离
            top: 10 // 标题距离顶部的距离
          },
          tooltip: { // 工具提示
            // trigger: 'item' 工具提示的类型 item代表的是每个柱本身, axis代表的是坐标轴
            trigger: 'axis',
            triggerOn: 'click', // 触发时机, click代表点击, mouseOver代表鼠标移过
            // formatter: '{b} 的成绩是 {c}'
            formatter: function (arg) { // 文字格式化
              return arg[0].name + '的分数是:' + arg[0].data
            }
          },
          xAxis: {
            type: 'category',
            data: xDataArr
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '语文',
              type: 'bar',
              data: yDataArr
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
