import Vue from 'vue'
import vuex from 'vuex'
import mutations from './mutations.js'

Vue.use(vuex)

const state = {
	members: [],
  self: {
    position: {},
    icon: {},
    name: ''
  },
  center: {
    lat: 0,
    lng: 0
  }
}

export default new vuex.Store({
  state,
  mutations
})