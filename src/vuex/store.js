import Vue from 'vue'
import vuex from 'vuex'
import mutations from './mutations.js'

import Goal from '../utils/goal.js'

Vue.use(vuex)

const state = {
	members: [],    //ルームに参加しているメンバ-
  self: {         //自分の情報
    id: 'oBg1Gi6WSyut4qLFAAAA',
    position: {
            lat: 51.505,
            lng: -0.09
    },
    icon: {},
    name: '自分'
  },
  goal: null,     //目的地
  center: {       //地図の中心
    lat: 0,
    lng: 0
  },
  trackingMode: true, //追跡するか
  goalSetMode: false, //目的値設定モード
  chatShow: false,  //チャットの表示・非表示
  memberShow: false //メンバー一覧の表示・非表示
}

export default new vuex.Store({
  state,
  mutations
})