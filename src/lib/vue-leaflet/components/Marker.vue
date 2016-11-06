<script>
import mapComponent from './mapComponent.js'
import L from 'leaflet'
import _ from 'lodash'

const props = {
	icon: {
		type: Object,
    	twoWay: true
	},
	position: {
		type: Object,
		twoWay: true,
	}
}

export default mapComponent.extend({
	props,
	created() {
		L.Icon.Default.imagePath = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.1/images/'		
	},
	deferredReady (){
		const _props =  _.mapValues(props, (value, prop) => this[prop])		
		const options = _.pickBy(_props, (value, key) => {
			return value !== undefined
		})
		this.$markerObject = this.createMarker(options, this.$map)
	},
	methods: {
		createMarker(options, map) {
			const {lat,lng} = options.position
			let icon = L.icon(options.icon)
			return L.marker([lat, lng], {icon} ).addTo(map)
		}
	},
	watch: {
		position: {
			deep: true,
			handler(val, old) {
				const {lat,lng} = val
				this.$markerObject.setLatLng([lat, lng])
			}
		}
	},
	events: {
		'ready-map'(map){
			this.$map = map
			if( this.$markerObject ){
				const _props =  _.mapValues(props, (value, prop) => this[prop])		
				const options = _.pickBy(_props, (value, key) => {
					return value !== undefined
				})
				this.$markerObject = this.createMarker(options, this.$map)
			}
		}
	}
})
</script>