<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="form.age"></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="地址">
        <el-input v-model="form.address"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {setSesstion} from "@/utils/sesstionStorage";

  export default {
    name: "demo",
    data() {
      return {
        form: {
          name: '',
          age: '',
          phone: '',
          address: '',
        },
      }
    },
    methods: {
      onSubmit() {
        setSesstion('userInfo', JSON.stringify(this.form).toString())
        this.$store.commit('setUserInfo', this.form)
        this.$router.push({
          name: 'detail',
          params: {
            name: this.form.name,
            age: this.form.age,
            phone: this.form.phone,
            address: this.form.address
          },
        })
        // console.log(typeof this.$router.push())
      },
    },
    mounted() {
    },
  }
</script>

<style lang='' scoped>

</style>
