<template>
	<div class="side card right">
		<div class="tab" @click="toggleMemberShow">
        	<i class="material-icons small">chat</i>
      	</div>
		<div class="member-list">
			<div class="member-list-header">
				Member List
			</div>
			<div class="member-list-body">
				<self :member="self"></self>
				<member v-for="member in members" :member="member"></member>
			</div>
		</div>
	</div>
</template>

<script>
import member from './member.vue'
import Self from './self.vue'
import { members } from '../vuex/getters.js' 
import { toggleMemberShow } from '../vuex/actions.js'
import { memberShow, self } from '../vuex/getters.js'

export default {
	vuex: {
		getters: {
			members,
			memberShow,
			self
		},
		actions: {
			toggleMemberShow
		}
	},
	created() {
		this.$store.watch(memberShow,(val, old) => { 
			const dilay = 300
			if(old) {
				$('.side.right').animate({ right: '-70%' }, dilay)			
			} else {
				$('.side.right').animate({ right: '0%' }, dilay)				
			}
		})
	},
	components: {
		member,
		Self
	}
}
</script>

<style scoped>
.member-list {
	height: 100%;
}

.member-list-header {
	font-size: 16px;
	padding: 10px 8px;
	background: red;
	font-weight: bold;
}

.member-list-body {
	height: calc(100% - 44px);
	overflow: scroll;
}
.side.card {
	position:absolute;
	z-index: 1001;
	top:0;
	width: 70%;
	height: 100%;
	margin: 0;		
}

.side.right {
	right: -70%;
}
.tab {
	position:absolute;
	z-index: 1001;
	width: 50px;
	height: 80px;
	line-height: 94px;
	top:100px;
	background-color: #ffffff;		
	padding: 0 8px;	
	box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)
}	

.right .tab {
	border-radius: 50% 0 0 50%;
	right:100%;
	text-align: right;
}
</style>