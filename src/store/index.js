import { createStore } from 'vuex'

export default createStore({
  state: {
    data: null,
  },
  mutations: {
    updateData(state, data){
      state.data = data;
    }
  },
  actions: {
    updateData({ commit }, data) {
      commit('updateData', data);
    }
  },
  getters: {
    recieveData(state) {
      return state.data;
    },
  },
  modules: {
  }
})
