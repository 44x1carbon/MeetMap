<template>
	<div class="card blue-grey darken-1">
		<Map :zoom="18" :center="center">
			<Marker v-for="member in members"
			:position.sync='member.position' :icon="member.icon"></Marker>
		</Map>
    <tracking-btn></tracking-btn>
    <menu></menu>
    <side pos="left">
      <i class="material-icons small" slot="icon">chat</i>
      <chat></chat>
    </side>
    <side pos="right">
      <i class="material-icons small" slot="icon">group</i>
      <member-list></member-list>
    </side>
    <modal></modal>
  </div>	
</template>

<script>
import { Map, Marker } from '../lib/vue-leaflet'
import side from './side.vue'
import menu from './menu.vue'
import trackingBtn from './tracking-btn.vue'
import chat from './chat.vue'
import memberList from './member-list.vue'
import modal from './modal.vue'

import { addMember, changePosition } from '../vuex/actions.js'
import { members, center } from '../vuex/getters.js'

export default {
  vuex: {
    getters: {
      members,
      center
    },
    actions: {
      addMember,
      changePosition
    }
  },
  created() {
    this.addMember('oBg1Gi6WSyut4qLFAAAA', 'hoge',{
            lat: 51.505,
            lng: -0.09
    })
    this.addMember('zzl4N9HTUXgW4GFZAAAA', 'fuga',{
            lat: 51.506,
            lng: -0.09
    })
    this.addMember('Bqu5vGx_SqpPWITEXAAAB', 'piyo',{
            lat: 51.504,
            lng: -0.09
    })
  },
  components: {
    Map,
    Marker,
    side,
    menu,
    chat,
    memberList,
    trackingBtn
  }
}
</script>

<style scoped>
	.card {
		height: calc(100% - 56px);
    width: 100%;
		margin: 0;
    overflow: hidden;
  }
  @media only screen and (max-width: 992px) {
    .fixed-action-btn ul {
      display: none;
    }
    .fixed-action-btn:hover ul {
      display: block;
    }
    .material-tooltip {
      display: none !important;
    }
    .mobile-fab-tip {
      position: fixed;
      right: 85px;
      padding: 7px 5px 4px 5px;
      text-align: right;
      background-color: #323232;
      border-radius: 2px;
      color: #FFF;
      opacity: 0;
    }
    .mobile-fab-tip {
      -webkit-animation: fadein 1s;
      -moz-animation: fadein 1s;
      -o-animation: fadein 1s;
      animation: fadein 1s;
      -webkit-animation-fill-mode: forwards;
      -moz-animation-fill-mode: forwards;
      -o-animation-fill-mode: forwards;
      animation-fill-mode: forwards;
      -webkit-animation-delay: 0.5s;
      -moz-animation-delay: 0.5s;
      -o-animation-delay: 0.5s;
      animation-delay: 0.5s;
    }
    @keyframes fadein {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }
    @-moz-keyframes fadein {
      /* Firefox */
      0% { opacity: 0; }
      100% { opacity: 1; }
    }
    @-webkit-keyframes fadein {
      /* Safari and Chrome */
      0% { opacity: 0; }
      100% { opacity: 1; }
    }
    @-o-keyframes fadein {
      /* Opera */
      0% { opacity: 0; }
      100% { opacity: 1; }
    }
  }

  .leaflet-control-zoom {
    margin-bottom: 10px;
  }


</style>