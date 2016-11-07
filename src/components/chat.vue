<template>
	<div class="side card left">
		<div class="tab" @click="toggleChatShow">
        	<i class="material-icons small">chat</i>
      	</div>
		<div class="chat">
			<div class="chat-header">
				Chat Room
			</div>
			<div class="chat-body">
				<chat-comment></chat-comment>
				<chat-comment></chat-comment>
				<chat-comment></chat-comment>
				<chat-comment></chat-comment>
				<chat-comment></chat-comment>
				<chat-comment></chat-comment>
			</div>
			<div class="chat-footer">
				<textarea cols="50" rows="5"></textarea>
			</div>
		</div>
	</div>
</template>

<script>
import chatComment from './chat-comment.vue' 
import { toggleChatShow } from '../vuex/actions.js'
import { chatShow } from '../vuex/getters.js'

export default {
	vuex: {
		actions: {
			toggleChatShow
		},
		getters: {
			chatShow
		}
	},
	created() {
		this.$store.watch(chatShow,(val, old) => { 
			const dilay = 300
			if(old) {
				$('.side.left').animate({ left: '-70%' }, dilay)			
			} else {
				$('.side.left').animate({ left: '0%' }, dilay)				
			}
		})
	},
	components: {
		chatComment
	}
}
</script>

<style scoped>
.chat {
	height: 100%;
}
.chat-header {
	font-size: 16px;
	padding: 10px 8px;
	background: red;
	font-weight: bold;
}
.chat-body {
	height: calc(90% - 44px);
	overflow-y: scroll;
}
.chat-footer {
	height: 10%;
	display:inline-flex;
}
.chat-footer textarea {
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	resize: none;
	border: none;
	border-top: 1px solid #DDDDDD;
}

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
</style>