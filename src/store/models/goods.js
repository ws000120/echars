import {getSesstion} from "@/utils/sesstionStorage";

const goods = {
  state: {
    list: getSesstion('list') || []
  },
  mutations: {
    setlist(state, list) {
      state.list = list
    }
  },
  actions: {
    async getlist(content, list) {
      await list().then(res => {
        content.commit('setlist', res.Data)
      })

    }
  },
}
export default goods
