<template>
  <div :id="id">
  </div>

</template>
<script>
  import Mixin from './Mixin'

  export default {
    name: "index",
    mixins: [Mixin],
    props: {
      id: {
        type: String,
        default: 'container'
      }
    },
    data() {
      return {}
    },
    methods: {
      initMap() {
        if (!this.map) {
          this.map = new AMap.Map(this.id, this.opt);
          this.importOfThePlugin()
          this.click_Event()
          // 与添加点标记冲突
          // this.hotspot_click_Event()
        }
      },
    },
    mounted() {
      $(`#${this.id}`).height('100%')
      this.initMap();
    },
    destroyed() {
    }
  }
</script>

<style lang='less'>
</style>
