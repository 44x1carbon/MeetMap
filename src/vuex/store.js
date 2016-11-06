import Vue from 'vue'
import vuex from 'vuex'
import mutations from './mutations.js'

Vue.use(vuex)

const state = {
	members: [],    //ルームに参加しているメンバ-
  self: {         //自分の情報
    position: {},
    icon: {},
    name: ''
  },
  center: {       //地図の中心
    lat: 0,
    lng: 0
  },
  tracking: true, //追跡するか
}

export default new vuex.Store({
  state,
  mutations
})