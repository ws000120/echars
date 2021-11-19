<template>
  <div :id="id" style="width: 100%;height: 100%"></div>
</template>

<script>
  //  步骤1：引入echarts.js文件
  import * as echarts from 'echarts'

  export default {
    name: "idnex",
    data() {
      return {
        id: 'line_1',
        myChart: null
      }
    },
    methods: {
      myChart_render() {
        // 步骤3：初始化echarts实例对象
        // 参数, dom,决定图表最终呈现的位置
        this.myChart = echarts.init(document.getElementById(this.id))
        // 步骤4：准备配置项
        let xDataArr = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        let yDataArr = [3000, 2800, 900, 1000, 800, 700, 1400, 1300, 900, 1000, 800, 600]

        let yDataArr2 = [2000, 3800, 1900, 500, 900, 1700, 2400, 300, 1900, 1500, 1800, 200]
        let option = {
          xAxis: {
            type: 'category',
            data: xDataArr,
            // boundaryGap: false // x轴的第1个元素是否与y轴有距离
          },
          yAxis: {
            type: 'value',
            // scale: true
          },
          series: [
            {
              name: '康师傅',
              data: yDataArr,
              // stack: 'all', // 堆叠图的设置
              type: 'line',
              markPoint: { // 标记点
                data: [
                  {
                    type: 'max'
                  },
                  {
                    type: 'min'
                  }
                ]
              },
              markLine: { // 标记线
                data: [
                  {
                    type: 'average'
                  }
                ]
              },
              markArea: { // 标记区域
                data: [
                  [
                    {
                      xAxis: '1月'
                    },
                    {
                      xAxis: '2月'
                    }
                  ],
                  [
                    {
                      xAxis: '7月'
                    },
                    {
                      xAxis: '8月'
                    }
                  ]
                ]
              },
              smooth: true, // 是否为平滑线
              lineStyle: { // 线的样式设置
                color: 'green',
                type: 'solid' // dashed dotted solid
              },
              areaStyle: { // 线和x轴形成的区域设置
                color: 'pink'
              }
            },
            {
              type: 'line',
              data: yDataArr2,
              stack: 'all', // 堆叠图的设置
              areaStyle: {} //区域样式
            }
          ]
        }
        option && this.myChart.setOption(option)
        window.addEventListener('resize', () => {
          this.myChart.resize()
        })
      }
    },
    mounted() {
      this.myChart_render();
    },
  }
</script>

<style lang='' scoped>

</style>
