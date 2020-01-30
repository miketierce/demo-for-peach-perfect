import Vue from 'vue'
import store from '../store'
// import Vuex from 'vuex'

// Vue.use(Vuex)
Vue.mixin({
  computed: {
    store () {
      return store
    }
  }
})
