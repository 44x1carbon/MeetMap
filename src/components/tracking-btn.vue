<template>
	<div class="fixed-action-btn">
      <a class="btn-floating  btn-large waves-effect waves-light blue z-depth-2" :disabled="!tracking" @click="toggleTracking"><i class="material-icons">navigation</i></a>
    </div>
</template>

<script>
import { tracking } from '../vuex/getters.js'
import { toggleTracking } from '../vuex/actions.js'

export default {
	vuex: {
		getters: {
			tracking
		},
		actions: {
			toggleTracking
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