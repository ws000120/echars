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
      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light"></div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light"></div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light"></div>
        </el-col>
      </el-row>
    </el-header>
    <el-main class="layout-content">
      <el-row type="flex" class="row-bg">
        <el-col :span="6">
          <div class="grid-content">
            <bar></bar>
          </div>
          <div class="grid-content">

          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content"></div>
          <div class="grid-content"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content"></div>
          <div class="grid-content"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content"></div>
          <div class="grid-content"></div>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
  import Bar from '@/components/bar'

  export default {
    name: "Layout",
    components: {Bar},
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
      this.bg_color()
    },
  }
</script>

<style lang='less' scoped>
  #layout-container {
    height: inherit;

    /deep/ .el-header {
      .el-row {
        height: 50%;
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
        overflow: auto;

        .grid-content {
          height: 50%;
        }


      }
    }


  }
</style>
