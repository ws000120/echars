<template>
  <el-pagination :page-size="20"
                 :pager-count="11"
                 layout="prev, pager, next"
                 :total="1000"
                 @current-change="$emit('current-change',$event)"
  ></el-pagination>
</template>

<script>
  export default {
    name: "pageDemo",
    data() {
      return {}
    },
    methods: {},
    mounted() {
    },
  }
</script>

<style lang='' scoped>

</style>
