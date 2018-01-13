<template>
	<div id="hello">
		<top1 class="top1"></top1>
		<main1 class="main1"></main1>
		<footer1 class="footer"></footer1>
	</div>
</template>
 
<script>
import top1 from '../zym_components/detailsTop.vue'
import main1 from '../zym_components/detailsMain.vue'
import footer1 from '../main_components/footer.vue'

export default {
	name: 'HelloWorld',
	data() {
		return {

		}
	},
	components: {
		top1,
		main1,
		footer1
	}
}
</script>

<style scoped>
#hello{
	background: #F5F5F5;
}
.top1{
	width: 100%;
	height: 200px;
	margin-bottom: 30px;
}
.main1{
	width: 100%;
}
.footer {
    position: fixed;
    bottom: 0;
	background: #F5F5F5;
	border-top: 1px solid #EDEDED;
	width: 100%;
	height: 103px;
}
</style>