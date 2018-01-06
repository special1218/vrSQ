<template>
	<div id="app">
		<router-view/>
		<div id="box">
			<a href="#"><img src="./assets/img/dingbu.png" /></a>
		</div>
	</div>
</template>

<script>
	window.onscroll = function() {
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		var box = document.getElementById("box");
		box.style.display = scrollTop > 200 ? "block" : "none";
	}

	export default {
		name: 'app',
	}
</script>

<style>
	* {
		margin: 0;
	}
	
	#box {
		position: fixed;
		right: 2%;
		bottom: 15%;
		display: none;
		z-index: 100;
	}
</style>