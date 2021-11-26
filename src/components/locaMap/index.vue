<template>
  <div :id="id"></div>
</template>

<script>
  import citys from "@/utility/citys";
  import {openInfoWin, closeInfoWin} from "@/components/locaMap/infoWindow";

  export default {
    name: "index",
    props: {
      id: {
        type: String,
        default: 'locaMap',
      }
    },
    data() {
      return {
        AMap: null,
        map: null,
        layer: null,
      }
    },
    methods: {
      initMap() {
        if (this.map)
          return
        this.AMap = new AMap.Map(this.id, {
          mapStyle: 'amap://styles/grey',
          zoom: 9,
        })
        this.map = Loca.create(this.AMap);
        this.map.on('mapload', () => {
          var amap = this.map.getMap()
          amap.plugin(['AMap.ToolBar', 'AMap.Scale', 'AMap.ControlBar'], () => {
            // 工具条
            amap.addControl(new AMap.ToolBar());

            // 比例尺
            amap.addControl(new AMap.Scale());

            // 控制条
            amap.addControl(new AMap.ControlBar());
          });
        });
        this.layer_point_circle()

      },
      layer_point_circle() {
        this.layer = Loca.visualLayer({
          container: this.map,
          type: 'point',
          shape: 'circle',
          fitView: true,
          eventSupport: true
        });

        // this.layer.on('click', function (event) {
        //   console.log('layer_point_circle')
        //   console.log('触发click事件的元素: ', event.target) // 触发click事件的元素
        //   console.log('事件名称: ', event.type) // 事件名称
        //   console.log('原始DomEvent事件: ', event.originalEvent) // 原始DomEvent事件
        //   console.log('触发元素对应的原始数据: ', event.rawData) // 触发元素对应的原始数据
        //   // console.log('元素所在经纬度: ', event.lnglat) // 元素所在经纬度
        // });

        this.layer.on('mouseenter', (ev) => {
          // 事件类型
          var type = ev.type;
          // 当前元素的原始数据
          var rawData = ev.rawData;
          // 原始鼠标事件
          var originalEvent = ev.originalEvent;
          console.log(rawData)
          openInfoWin(this.AMap, originalEvent, {
            '名称': rawData.name,
            '位置': rawData.lnglat
          });
        });
        this.layer.on('mouseleave', function (event) {
          closeInfoWin();
        });

        this.layer.setData(citys, {
          lnglat: (res) => {
            return res.value['lnglat']
          }
        })

        this.layer.setOptions({
          style: {
            radius(obj) {
              var style = obj.value.style;
              var r
              if (style === 0) {
                r = 6;
              } else if (style === 1) {
                r = 3
              } else {
                r = 1.5
              }
              return r
            },
            color(obj) {
              var style = obj.value.style;
              var c
              if (style === 0) {
                c = '#0ebee7';
              } else if (style === 1) {
                c = '#298898'
              } else {
                c = '#37cff7'
              }
              return c
            },
            borderColor: '#c3faff',
            borderWidth: 1,
            opacity: 0.8,
            // 图层上元素被 mouseenter 或者 click 时会触发 selectStyle，
            // 同时 selectStyle 配置需要开启 eventSupport: true 才会生效，
            // 只有 selectStyle 设置的属性才会变化，其他属性不变，
            // 如果关闭 selectStyle，设置 selectStyle: false 即可。
          },
          selectStyle: {
            radius: 10,
            color: '#0ef806'
          }
        })
        this.layer.render();
      },
    },
    mounted() {
      $(`#${this.id}`).height('100%')
      this.initMap()
    },
    destroyed() {
      this.map && this.map.destroy()
    }
  }
</script>

<style lang='less'>
  .info-window {
    background: #363F49;
    color: #A0A7B4;
    padding: 10px;
    max-width: 300px;
    min-width: 200px;
    font-size: 12px;
  }

  .info-window tr .content {
    text-align: right;
    color: #D3D8E0;
    max-width: 200px;
  }
</style>
