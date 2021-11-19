<template>
  <!--  background-color="#545c64"-->
  <!--  text-color="#fff"-->
  <!--  active-text-color="#ffd04b"-->
  <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      router
      @select="handleSelect"
  >
    <template v-for="(item,index) in $router.options.routes">
      <el-menu-item
          v-if="item.children && item.children.length===0"
          :index="item.path"
          :key="index">
        {{ item.name }}
      </el-menu-item>
      <el-submenu
          v-else
          :index="item.path"
          :key="item.path +'-'+ item.name"
      >
        <template #title>{{ item.name }}</template>
      </el-submenu>
    </template>


    <!--    <el-submenu index="2">-->
    <!--      <template slot="title">我的工作台</template>-->
    <!--      <el-menu-item index="2-1">选项1</el-menu-item>-->
    <!--      <el-menu-item index="2-2">选项2</el-menu-item>-->
    <!--      <el-menu-item index="2-3">选项3</el-menu-item>-->
    <!--      <el-submenu index="2-4">-->
    <!--        <template slot="title">选项4</template>-->
    <!--        <el-menu-item index="2-4-1">选项1</el-menu-item>-->
    <!--        <el-menu-item index="2-4-2">选项2</el-menu-item>-->
    <!--        <el-menu-item index="2-4-3">选项3</el-menu-item>-->
    <!--      </el-submenu>-->
    <!--    </el-submenu>-->
    <!--    <el-menu-item index="3" disabled>消息中心</el-menu-item>-->
    <!--    <el-menu-item index="4">-->
    <!--      <router-link to="/bar_1">柱状图1</router-link>-->
    <!--    </el-menu-item>-->
  </el-menu>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
        console.log(keyPath);
      }
    },
    mounted() {
      console.log(this.$router.options)
      console.log()
    },
  }
</script>

<style lang='less' scoped>

</style>
