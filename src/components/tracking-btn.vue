<template>
	<div class="fixed-action-btn">
      <a class="btn-floating  btn-large waves-effect waves-light blue z-depth-2" :disabled="!trackingMode" @click="toggleTrackingMode"><i class="material-icons">navigation</i></a>
    </div>
</template>

<script>
import { trackingMode } from '../vuex/getters.js'
import { toggleTrackingMode } from '../vuex/actions.js'

export default {
	vuex: {
		getters: {
			trackingMode
		},
		actions: {
			toggleTrackingMode
		}
	}
}
</script>

<style scoped>
.fixed-action-btn {
	bottom: 45px; 
	left: 24px;
}
</style>