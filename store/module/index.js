import Vuex from 'vuex'

const store = () => {
  return new Vuex.Store({
    state: {
      vuexMessage: 'message from vuex'
    },
    mutations: {
      increment (state) {
        state.counter++
      }
    }
  })
}

export default store
