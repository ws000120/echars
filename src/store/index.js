import Vue from "vue";
import Vuex from 'vuex'
import models from "./models";

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {},
  mutations: {},
  modules: {goods: models.goods, user: models.user},
  actions: {}
})
export default store
