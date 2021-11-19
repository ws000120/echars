<template>
  <div :id="id" style="width: 100%;height: 100%">

  </div>
</template>

<script>
  import * as echarts from 'echarts/core';
  import {ToolboxComponent, LegendComponent} from 'echarts/components';
  import {PieChart} from 'echarts/charts';
  import {LabelLayout} from 'echarts/features';
  import {CanvasRenderer} from 'echarts/renderers';

  echarts.use([
    ToolboxComponent,
    LegendComponent,
    PieChart,
    CanvasRenderer,
    LabelLayout
  ]);

  export default {
    name: "pie1",
    data() {
      return {
        id: 'pie2_canvas',
        myChart: null,
      }
    },
    methods: {
      myChart_render() {
        this.myChart = echarts.init(document.getElementById(this.id));
        // 绘制图表
        let option = {
          // legend: {
          //   top: 'bottom'
          // },
          toolbox: {
            show: false,
            feature: {
              mark: {show: true},
              dataView: {show: true, readOnly: false},
              restore: {show: true},
              saveAsImage: {show: true}
            }
          },
          series: [
            {
              name: '玫瑰图',
              type: 'pie',
              radius: 110,
              center: ['50%', '50%'],
              roseType: 'area',
              itemStyle: {
                borderRadius: 4
              },
              data: [
                {value: 40, name: 'rose 1'},
                {value: 38, name: 'rose 2'},
                {value: 32, name: 'rose 3'},
                {value: 30, name: 'rose 4'},
                {value: 28, name: 'rose 5'},
                {value: 26, name: 'rose 6'},
                {value: 22, name: 'rose 7'},
                {value: 18, name: 'rose 8'}
              ]
            }
          ]
        };

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
