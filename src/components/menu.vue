<template>
	<div class="fixed-action-btn  click-to-toggle" style="bottom: 45px; right: 24px;">
		<a class="btn-floating btn-large red z-depth-2" @click="toggle">
			<i class="material-icons">menu</i>
		</a>
		<ul>
			<li>
				<span class="mobile-fab-tip">別の部屋へ</span>
				<a class="btn-floating yellow darken-1"><i class="material-icons">input</i></a>
			</li>
			<li>
				<span class="mobile-fab-tip">友人を招待</span>
				<a class="btn-floating green"><i class="material-icons">contact_mail</i></a>
			</li>
			<li>
				<span class="mobile-fab-tip">待ち合わせ場所を指定</span>
				<a class="btn-floating blue " ><i class="material-icons">room</i></a>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	methods: {
	  toggle(e){
		  if($('.click-to-toggle').hasClass('active')) {
		  	$('.mobile-fab-tip').hide()
		  } else {
			$('.mobile-fab-tip').show()
		  }
	  }
  }
}
</script>

<style scoped>
  @media only screen and (max-width: 992px) {
    .fixed-action-btn ul {
      display: none;
    }
    .fixed-action-btn:hover ul {
      display: block;
    }
    .material-tooltip {
      display: none !important;
    }
    .mobile-fab-tip {
      position: fixed;
      right: 85px;
      padding: 7px 5px 4px 5px;
      text-align: right;
      background-color: #323232;
      border-radius: 2px;
      color: #FFF;
      opacity: 0;
    }
    .mobile-fab-tip {
      -webkit-animation: fadein 1s;
      -moz-animation: fadein 1s;
      -o-animation: fadein 1s;
      animation: fadein 1s;
      -webkit-animation-fill-mode: forwards;
      -moz-animation-fill-mode: forwards;
      -o-animation-fill-mode: forwards;
      animation-fill-mode: forwards;
      -webkit-animation-delay: 0.5s;
      -moz-animation-delay: 0.5s;
      -o-animation-delay: 0.5s;
      animation-delay: 0.5s;
    }
    @keyframes fadein {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }
    @-moz-keyframes fadein {
      /* Firefox */
      0% { opacity: 0; }
      100% { opacity: 1; }
    }
    @-webkit-keyframes fadein {
      /* Safari and Chrome */
      0% { opacity: 0; }
      100% { opacity: 1; }
    }
    @-o-keyframes fadein {
      /* Opera */
      0% { opacity: 0; }
      100% { opacity: 1; }
    }
}
</style>