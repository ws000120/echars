<template>
  <div id="cesiumContainer" style="width: 100%;height: 100%">
  </div>
</template>

<script>
  import * as Cesium from 'cesium'


  export default {
    name: "cesiumDemo",
    data() {
      return {}
    },
    methods: {
      init(){
        Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjYzY0NDUyMy02NmJmLTQ1MDctODE2OS1kMDk4NmMyYmQyMTkiLCJpZCI6ODg0MzUsImlhdCI6MTY0OTIyMjk3Mn0.v6jKNSntce1q_KufWoEme1DTvnMfIwdvbjuTwmdJ7ZA';

        const viewer = new Cesium.Viewer('cesiumContainer', {
          terrainProvider: Cesium.createWorldTerrain()
        });

        const buildingTileset = viewer.scene.primitives.add(Cesium.createOsmBuildings());

        viewer.camera.flyTo({
          destination: Cesium.Cartesian3.fromDegrees(-122.4175, 37.655, 40),
          orientation: {
            heading: Cesium.Math.toRadians(0.0),
            pitch: Cesium.Math.toRadians(-15.0),
          }
        });
      }
    },
    mounted() {
      this.init()
    },
  }
</script>

<style lang='' scoped>

</style>
