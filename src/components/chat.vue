<template>
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
</template>

<script>
import chatComment from './chat-comment.vue' 
export default {
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
</style>