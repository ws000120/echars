<template>
  <div :id="id">

  </div>
</template>

<script>
  import * as echarts from 'echarts';
  import {resize} from "@/util/tool";

  export default {
    name: "index",
    data() {
      return {
        id: 'bar_canvas',
        myChart: null,
        option: {},
        color: {}
      }
    },
    methods: {
      myChart_render() {
        // 基于准备好的dom，初始化echarts实例
        $("#bar_canvas").height($("#bar_canvas").parent().height())
        this.myChart = echarts.init(document.getElementById(this.id));
        // 绘制图表
        this.option = {
          title: {
            text: 'ECharts 柱状图示例'
          },
          tooltip: {},
          xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          yAxis: {},
          series: [
            {
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
            }
          ]
        }
        this.myChart && this.myChart.setOption(this.option);
        resize(this.myChart, $("#bar_canvas"), $("#bar_canvas").parent())
      }
    },
    mounted() {
      this.myChart_render()
    },
  }
</script>

<style lang='' scoped>

</style>
