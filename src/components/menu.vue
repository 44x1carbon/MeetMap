<template>
	<div class="fixed-action-btn  click-to-toggle" style="bottom: 45px; right: 24px;">
		<a class="btn-floating btn-large red z-depth-2" @click="toggle">
			<i class="material-icons">menu</i>
		</a>
		<ul>
			<li>
				<menu-btn color="yellow" caption="他の部屋に参加" icon="contact_mail" ></menu-btn>
			</li>
			<li>
        <menu-btn color="green" caption="友人を招待" icon="input"></menu-btn>
			</li>
			<li>
        <menu-btn color="blue" caption="待ち合わせ場所を指定" icon="room" :click="clickSetGoal"></menu-btn>
			</li>
		</ul>
	</div>
</template>

<script>
import menuBtn from './menu-btn.vue'
import { toggleGoalSetMode } from '../vuex/actions.js' 

export default {
  vuex: {
    actions: {
      toggleGoalSetMode
    }
  },
	methods: {
	  toggle(e){
		  if($('.click-to-toggle').hasClass('active')) {
		  	$('.mobile-fab-tip').hide()
		  } else {
			$('.mobile-fab-tip').show()
		  }
	  },
    clickSetGoal(){
      this.toggleGoalSetMode()
    }
  },
  components: {
    menuBtn
  }
}
</script>

<style scoped>
</style>