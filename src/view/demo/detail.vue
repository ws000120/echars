<template>
  <div>
    {{ name }}
    {{ age }}
    {{ phone }}
    {{ address }}
  </div>
</template>

<script>
  export default {
    name: "detail",
    props: [
      'name',
      'age',
      'phone',
      'address',
    ],
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
