import Vue from 'vue'
import {DeferredReadyMixin} from '../deferredReady'
import {DeferredReady} from '../deferredReady.js'

Vue.use(DeferredReady)

export default Vue.extend({
	mixins: [DeferredReadyMixin],
	created() {
		this.$map = null
	},
	deferredReady () {
    	this.$dispatch('register-component', this)
  	},
	events: {
		/*mapが初期化された時*/
		'map-ready' (map) {
			this.$map = map;
		},
	},
})