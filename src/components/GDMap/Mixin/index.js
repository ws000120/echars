export default {
  data() {
    return {
      map: null,
      opt: {
        // center: [115.446057, 38.829123],//设置地图中心点坐标 不配置中心坐标 会定位到当前位置
        zoom: 11,  //设置地图显示的缩放级别
        // layers: [new AMap.TileLayer.Satellite()],  //设置图层,可设置成包含一个或多个图层的数组
        pitch: 5, // 地图俯仰角度，有效范围 0 度- 83 度
        viewMode: '3D', // 地图模式
        lang: 'zh_cn',  //设置地图语言类型
        resizeEnable: true,
        isHotspot: true,//地图热点
        /*标准 normal
        幻影黑 dark
        月光银 light
        远山黛 whitesmoke
        草色青 fresh
        雅士灰 grey
        涂鸦 graffiti
        马卡龙 macaron
        靛青蓝 blue
        极夜蓝 darkblue
        酱籽 wine*/
        mapStyle: 'amap://styles/macaron',
      },
      plugin: [
        'AMap.ToolBar',
        'AMap.Scale',
        'AMap.MapType',
        'AMap.Geolocation',
        'AMap.PlaceSearch',
        'AMap.AdvancedInfoWindow',
        'AMap.OverView',
        'AMap.Marker',
      ],
      markers: [],
      count: 0,
    }
  },
  methods: {
    // 引入插件
    importOfThePlugin() {
      // 插件引入
      AMap.plugin(this.plugin, () => {
        this.map.addControl(new AMap.ToolBar())//工具条
        this.map.addControl(new AMap.Scale())//比例尺
        this.map.addControl(new AMap.OverView({}))//鹰眼
        this.map.addControl(new AMap.MapType({
          // defaultType: 1,
          // showTraffic: true,
          showRoad: true
        }))//类别切换
        this.map.addControl(new AMap.Geolocation({
          enableHighAccuracy: true,//是否使用高精度定位，默认:true
          timeout: 10000,          //超过10秒后停止定位，默认：无穷大
          maximumAge: 0,           //定位结果缓存0毫秒，默认：0
          convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
          showButton: true,        //显示定位按钮，默认：true
          buttonPosition: 'RB',    //定位按钮停靠位置，默认：'LB'，左下角
          buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
          showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
          showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
          panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
          zoomToAccuracy: true      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        }))//定位
      })
    },
    //单击事件
    click_Event() {
      this.map_addListener('click', (e) => {
        //点标记
        let marker = new AMap.Marker({
          position: e.lnglat,//点标记在地图上显示的位置
          // offset: new AMap.Pixel(-10,-34),//点标记显示位置偏移量
          draggable: true,//设置点标记是否可拖拽移动
          raiseOnDrag: true,//设置拖拽点标记时是否开启点标记离开地图的效果
          // animation: 'AMAP_ANIMATION_BOUNCE',//点标记的动画效果 点标弹跳效果 AMAP_ANIMATION_BOUNCE 点标掉落效果 AMAP_ANIMATION_DROP
          anchor: 'top-left',
          icon: AMap.Icon({size: 16,}),//需在点标记中显示的图标
          label: {
            content: `<span>${this.count}</span>`,
            offset: new AMap.Pixel(2, 0)
          },
          //自定义属性
          extData: {
            id: this.count++,
          }
        })
        //删除事件
        marker.on('click', (mapsEvent, data) => {
          this.markers = this.markers.filter(item => {
            if (item.getExtData() === mapsEvent.target.getExtData()) {
              this.map.remove(item)
              return false
            }
            return true
          })
        })
        this.map.add(marker);
        this.markers.push(marker);
        //longitude 经度
        console.log(e.lnglat.getLng())
        //latitude 纬度
        console.log(e.lnglat.getLat())
      },)
    },
    //点击热区时触发此事件
    hotspot_click_Event() {
      var placeSearch = new AMap.PlaceSearch();  //构造地点查询类
      var infoWindow = new AMap.AdvancedInfoWindow({});
      this.map_addListener('hotspotclick', (e) => {
        placeSearch.getDetails(e.id, (status, result) => {
          if (status === 'complete' && result.info === 'OK') {
            this.placeSearch_CallBack(infoWindow, result);
          }
        });
      })
    },
    placeSearch_CallBack(infoWindow, data) { //infoWindow.open(map, result.lnglat);
      var poiArr = data.poiList.pois;
      var location = poiArr[0].location;
      infoWindow.setContent(this.createContent(poiArr[0]));
      infoWindow.open(this.map, location);
    },
    createContent(poi) {  //信息窗体内容
      var s = [];
      s.push('<div class="info-title">' + poi.name + '</div><div class="info-content">' + "地址：" + poi.address);
      s.push("电话：" + poi.tel);
      s.push("类型：" + poi.type);
      s.push('<div>');
      return s.join("<br>");
    },
    //封装添加事件方法
    map_addListener(type, cb) {
      this.map.on(type, function (e) {
        return cb(e)
      })
    },
  },
  mounted() {

  }
}
