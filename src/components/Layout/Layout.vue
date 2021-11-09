<template>
  <el-container id="layout-container">
    <el-header class="layout-header">
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light"></div>
        </el-col>
      </el-row>
    </el-header>
    <el-main class="layout-content">
      <el-row type="flex" class="row-bg">
        <el-col :span="6">
          <div class="grid-content">
            <bar style="width: 100%;height: 100%"></bar>
          </div>
          <div class="grid-content">
            <Pie style="width: 100%;height: 100%"></Pie>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content">
            <bar1 style="width: 100%;height: 100%"></bar1>
          </div>
          <div class="grid-content">
            <pie2 style="width: 100%;height: 100%"></pie2>
          </div>
        </el-col>
        <el-col :span="12">
          <div style="height: 100%;width: 100%">
            <bar2 style="width: 100%;height: 100%"></bar2>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
  import Bar from '@/components/bar'
  import Bar1 from '@/components/bar/bar_1'
  import Bar2 from '@/components/bar/bar_2'
  import Pie from '@/components/pie'
  import Pie2 from '@/components/pie/pie2'

  export default {
    name: "Layout",
    components: {Bar, Bar1, Bar2, Pie, Pie2,},
    data() {
      return {}
    },
    methods: {
      bg_color() {
        let el = $('.grid-content')
        for (let i = 0; i < el.length; i++) {
          let r = Math.floor(Math.random() * 256);
          let g = Math.floor(Math.random() * 256);
          let b = Math.floor(Math.random() * 256);
          let c = `rgb(${r},${g},${b})`
          $(el[i]).css('background-color', c)
        }
      }
    },
    mounted() {
      // this.bg_color()
    },
  }
</script>

<style lang='less' scoped>
  #layout-container {
    height: inherit;

    /deep/ .el-header {
      overflow: auto;

      .el-row {
        height: 100%;
        width: 100%;

        .el-col {
          height: 100%;
        }
      }

      .grid-content {
        overflow: auto;
        height: 100%;
      }
    }

    .layout-content {
      height: 100%;

      .row-bg {
        height: 100%;

        .grid-content {
          height: 50%;
        }


      }
    }


  }
</style>
