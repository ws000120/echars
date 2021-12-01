<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import Layout from '@/components/Layout/index'

  export default {
    name: 'App',
    components: {
      Layout
    },
  }
</script>

<style lang="less">
  #app {
  }
</style>
