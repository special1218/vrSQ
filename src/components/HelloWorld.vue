<template>
  <div id="hello">
    <top1 class="top1" style="background: #232121;"></top1>
    <banner1 class="banner"></banner1>
		<img1 class="img1"></img1>
    <main1></main1>
    <footer1 class="footer"></footer1>
    <div id="box">
			<a href="#"><img src="../assets/img/dingbu.png" /></a>
		</div>
  </div>
</template>

<script>

window.onscroll = function() {
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		var box = document.getElementById("box");
		box.style.display = scrollTop > 200 ? "block" : "none";
	}

import top1 from '../view/top.vue'
import banner1 from '../view/banner.vue'
import img1 from '../view/img.vue'
import main1 from '../view/main.vue'
import footer1 from '../view/footer.vue'

export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  },
  components:{
    top1,
		banner1,
		img1,
    main1,
    footer1    
  }
}
</script>

<style>
* {
		margin: 0;
		padding: 0;
	}
	#hello{
	   background: #F5F5F5;
	}
	.top1 {
		width: 100%;
		height: 164px;
	}
	.banner{
		width: 1190px;
		height: 310px;
		margin: 0 auto;
	}
	.img1{
		width: 1190px;
		height: 103px;
		margin: 0 auto;
	}
  .footer {
		border-top: 1px solid #EDEDED;
		clear: both;
		width: 100%;
		height: 103px;
	}

  #box {
		position: fixed;
		right: 2%;
		bottom: 15%;
		display: none;
		z-index: 100;
	}
</style>
