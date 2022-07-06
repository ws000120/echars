import {getSesstion} from "@/utils/sesstionStorage";

const user = {
  state: {
    userInfo: getSesstion('userInfo') || {}
  },
  mutations: {
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },
  },
  actions: {},
  getters: {}
}
export default user
