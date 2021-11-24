<template>
  <el-submenu :popper-append-to-body="false" :index="`${routesObject.path}`">
    <template v-slot:title>
      <span>{{ routesObject.meta.title }}</span>
    </template>

    <template v-for="(item,index) in routesObject.children">
      <tree-menu-item v-if="item.children" :key="`${item.name}_${index}`" :routes-object="item"/>
      <el-menu-item v-else
                    :index="`${routesObject.path || ''}/${item.path}`"
                    :key="`${item.name}_${index}`">
        {{ item.meta.title }}
      </el-menu-item>
    </template>

  </el-submenu>
</template>

<script>
  export default {
    name: "tree-menu-item",
    props: {
      routesObject: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {};
    },
    methods: {},
    mounted() {
    },
  }
</script>

<style lang='less' scoped>

</style>
