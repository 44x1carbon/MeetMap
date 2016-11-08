<template>
	<div class="member" @click="memberClick">
		<div class="member-face">
			<img :src="member.icon.iconUrl" alt="">
		</div>
		<div class="member-name">{{ member.name }}(自分)</div>
	</div>
</template>

<script>
import { setCenter, changeTrackingMode, toggleMemberShow } from '../vuex/actions.js'

export default {
	props: [ 'member' ],
	vuex: {
		actions: {
			setCenter,
			changeTrackingMode,
			toggleMemberShow
		}
	},
	methods: {
		memberClick() {
			this.changeTrackingMode(true)
			this.setCenter(this.member.position)
			this.toggleMemberShow()
		}
	}
}
</script>

<style scoped>
.member {
	padding: 5px;
	height: 46px;
} 

.member-face {
	float: left;
    margin-right: -120px;
}

.member-face svg{
    border: 1px solid #ccc;
    box-shadow: 0 0 4px #ddd;
	border-radius: 10px;
	width: 40px;
	height: 40px;
}

.member-name {
	margin-left: 45px;
	margin-right: 5px;
	font-size: 18px;
	height: 46px;
	vertical-align: middle;
}
</style>

