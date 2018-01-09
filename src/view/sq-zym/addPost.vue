<template>
	<div id="app">
		<p>
			title：<input type="text"/>
		</p>
		<p>
			content：<input type="text"/>
		</p>
		<p>
			creater_id：<input type="text"/>
		</p>
		<p>
			thumbnail：<input type="text"/>
		</p>
		<button class="submit()">提交</button>
	</div>
</template>

<script>
import {list} from '../../api/list'
export default {
	name: 'app',
	data(){
		return{

		}
	},
	methods:{
		submit(){

		}
	}
}
</script>

<style>

</style>