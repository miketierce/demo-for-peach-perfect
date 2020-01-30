const state = () => {
  return {
    message: 'test message from vuex'
  }
}
const getters = {
  vuexMessage: state.message
}

const mutations = {
  // Some Vuex mutations here
}

export default {
  state,
  getters,
  mutations
}
