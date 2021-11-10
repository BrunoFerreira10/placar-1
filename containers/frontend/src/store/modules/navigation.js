export default {
  namespaced: true,
  state: () => ({
    toogleMenu: true,
    toogleMini: false
  }),
  mutations: {
    setToogleMini (state, payload) {
      state.toogleMini = false;
    },
    setToogleMenu (state, payload) {
      state.toogleMenu = payload.value;
    }
  },
  actions: {
  },
  getters: {

  }
}
