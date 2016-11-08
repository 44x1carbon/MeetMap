<template>
	<div class="content card blue-grey darken-1">
		<Map :zoom="18" :center="center" :click="mapClick">
      <Marker v-if="goal !== null" :position="goal.position" :icon="goal.icon"></Marker>
			<Marker v-for="member in members"
			:position.sync='member.position' :icon="member.icon"></Marker>
		</Map>
    <tracking-btn></tracking-btn>
    <menu></menu>
    <chat></chat>      
    <member-list></member-list>
    <modal></modal>
    <overlay :show="chatShow || memberShow"></overlay>
    {{ showOverlay }}
    {{chatShow}}
  </div>	
</template>

<script>
import { Map, Marker } from '../lib/vue-leaflet'
import side from './side.vue'
import menu from './menu.vue'
import trackingBtn from './tracking-btn.vue'
import chat from './chat.vue'
import memberList from './member-list.vue'
import overlay from './overlay.vue'
import modal from './modal.vue'

import { members, center, chatShow, memberShow, goal, goalSetMode } from '../vuex/getters.js'
import { setGoal, toggleGoalSetMode } from '../vuex/actions.js'
import { posArrToObj } from '../utils/util.js'

export default {
  vuex: {
    getters: {
      members,
      center,
      chatShow,
      memberShow,
      goal,
      goalSetMode,
    },
    actions: {
      setGoal,
      toggleGoalSetMode
    }
  },
  computed: {
      showOverlay() {
        return !this.chatShow || !this.memberShow
      }
  },
  methods: {
    mapClick(e){
      console.log(this.goalSetMode)
      if( this.goalSetMode ) {
        let pos = posArrToObj(e.latlng)
        this.setGoal(pos)
        this.toggleGoalSetMode()
      }
      
    }
  },
  components: {
    Map,
    Marker,
    side,
    menu,
    chat,
    memberList,
    trackingBtn,
    overlay
  }
}
</script>

<style scoped>
	.content.card {
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