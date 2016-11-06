<template>
	<div class="chat-box">
		<div class="chat-face">
			<svg data-jdenticon-hash="ff8adece0631821959f443c9d956fc39"></svg>
		</div>
		<div class="chat-area">
			<div class="chat-name">ほげ男</div>
			<div class="chat-hukidashi">
			ふきだしなのですーふきだしですーふきだー
			</div>
		</div>
	</div>
</template>

<style>
.chat-box {
	width: 100%;
	height: auto;
	overflow: hidden; /*floatの解除*/
	margin-bottom: 8px;
	padding: 5px;
}
.chat-face {
    float: left;
    margin-right: -120px;
}
.chat-face svg{
    border: 1px solid #ccc;
    box-shadow: 0 0 4px #ddd;
	border-radius: 10px;
	width: 3rem;
	height: 3rem;
}
.chat-area {
    width: 100%;
    float: right;
}
.chat-hukidashi {
    display: inline-block; /*コメントの文字数に合わせて可変*/
    padding: 5px 10px;	
    margin-top: 2px;
    border: 1px solid gray;
    border-radius: 10px;
	
}
.chat-hukidashi, .chat-name {
	margin-left: 3.5rem;
	margin-right: 5px;
	font-size: 0.8rem
}
</style>