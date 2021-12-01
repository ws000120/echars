<template>
  <el-container id="layout-container">
    <el-header class="layout-header">
      <el-menu
          :default-active="$route.path"
          mode="horizontal"
          class="el-menu-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
      >
        <template v-for="(item,index) in this.routes.children">
          <tree-menu :routes-object="item" :key="item.name" v-if="item.children"/>
          <el-menu-item v-else :index="`${item.path || '/'}`">
            {{ item.meta.title }}
          </el-menu-item>
        </template>
      </el-menu>
    </el-header>
    <el-main class="layout-content">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
  import TreeMenu from '@/components/menu'

  export default {
    name: "Layout",
    components: {
      TreeMenu
    },
    data() {
      return {
        routes: [],
      }
    },
    created() {
      let obj = this.$router.options.routes[0];
      let children = obj.children.filter(item => {
        return !item.meta.isHideMenu
      })
      obj.children = children
      this.routes = obj;
    },
    methods: {},
    mounted() {
    },
  }
</script>
