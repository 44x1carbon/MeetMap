<template>
	<div class="member-list">
		<div class="member-list-header">
			Member List
		</div>
		<div class="member-list-body">
			<member></member>
			<member></member>
			<member></member>
		</div>
	</div>
</template>

<script>
import member from './member.vue'
export default {
	components: {
		member
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
</style>