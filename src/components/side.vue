<template>
	<div class="side card" :class="[pos]">
		<div class="tab" @click="show = !show">
			<slot name="icon"></slot>		
		</div>
		<slot></slot>
	</div>
	<div class="overlay" v-show="show" @click="show = !show"></div>
</template>

<script>
import $ from 'jquery'
import Velocity from 'velocity-animate'

export default {
	props: [ 'pos' ],
	data(){
		return {
			show: false
		}
	},
	methods: {
		slide() {
			
			this.show = !this.show				
		}
	},
	watch: {
		show(val, old){
			const dilay = 300
			if(old) {
				if( this.pos === 'left') $('.side.left').animate({ left: '-70%' }, dilay)
				if( this.pos === 'right') $('.side.right').animate({ right: '-70%' }, dilay)
			} else {
				if( this.pos === 'left') $('.side.left').animate({ left: '0%' }, dilay)
				if( this.pos === 'right') $('.side.right').animate({ right: '0%' }, dilay)
			}
		}
	}
}
</script>

<style scoped>
	.side.card {
		position:absolute;
		z-index: 1001;
		top:0;
		width: 70%;
		height: 100%;
		margin: 0;		
	}
	.side.left {
		left: -70%;
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
	.left .tab {
		border-radius: 0 50%  50%  0;
		left:100%;
	}
	.right .tab {
		border-radius: 50% 0 0 50%;
		right:100%;
		text-align: right;
	}
	.overlay {
		position:absolute;
		top:0;
		left:0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 1000;
	}
</style>