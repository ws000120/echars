<template>
  <!-- 步骤2：准备一个呈现图表的盒子 -->
  <div :id="id"></div>
</template>

<script>
  //  步骤1：引入echarts.js文件
  import * as echarts from 'echarts'

  export default {
    name: "bar_2",
    data() {
      return {
        id: 'bar_2',
        myChart: null,
      }
    },
    methods: {
      myChart_render() {
        // 步骤3：初始化echarts实例对象
        // 参数, dom,决定图表最终呈现的位置
        this.myChart = echarts.init(document.getElementById(this.id))
        let xDataArr = ['张三', '李四', '王五', '闰土', '小明', '茅台', '二妞', '大强'] // 准备x轴数据
        let yDataArr1 = [88, 92, 63, 77, 94, 80, 72, 86] // 为x轴每一个元素指明数据
        let yDataArr2 = [93, 60, 61, 62, 85, 79, 92, 30]
        // 步骤4：准备配置项
        let option = {
          title: { // 标题设置
            text: '成绩展示', // 标题文字
            textStyle: { // 标题文字样式设置
              // color: 'red'
            },
            // borderWidth: 5, // 标题边框宽度
            // borderColor: 'blue', // 标题边框颜色
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
            type: 'value'
          },
          yAxis: {
            type: 'category',
            data: xDataArr
          },
          legend: { // 图例, 图例中的data数据来源于series中每个对象的name, 图例可以帮助我们对图表进行筛选
            data: ['语文', '数学']
          },
          toolbox: { // 工具箱按钮
            feature: {
              saveAsImage: {}, // 导出图片
              dataView: {}, // 数据视图
              restore: {}, // 重置
              dataZoom: {}, // 区域缩放
              magicType: {
                type: ['bar', 'line']
              } // 动态图表类型的切换
            }
          },
          series: [
            {
              name: '语文',
              type: 'bar',
              markPoint: { // 标记点
                data: [
                  {
                    type: 'max', name: '最大值'
                  }, {
                    type: 'min', name: '最小值'
                  }
                ]
              },
              markLine: { // 标记线
                data: [
                  {
                    type: 'average', name: '平均值'
                  }
                ]
              },
              label: { // 柱状图上的文字设置
                show: true, // 是否显示
                rotate: 60, // 旋转角度
                position: 'top' // 显示位置
              },
              barWidth: '30%', // 柱的宽度
              data: yDataArr1
            },{
              name: '数学',
              type: 'bar',
              markPoint: { // 标记点
                data: [
                  {
                    type: 'max', name: '最大值'
                  }, {
                    type: 'min', name: '最小值'
                  }
                ]
              },
              markLine: { // 标记线
                data: [
                  {
                    type: 'average', name: '平均值'
                  }
                ]
              },
              label: { // 柱状图上的文字设置
                show: true, // 是否显示
                rotate: 60, // 旋转角度
                position: 'top' // 显示位置
              },
              barWidth: '30%', // 柱的宽度
              data: yDataArr2
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
      this.myChart_render()
    },
  }
</script>

<style lang='' scoped>

</style>
