<template>
	<div id="app" :model="temp">
		<p>
			title：<input type="text" v-model="temp.title" />
		</p>
		<p>
			content：<input type="text" v-model="temp.content" />
		</p>
		<p>
			category_id：<input type="text" v-model="temp.category_id" />
		</p>
		<p>
			creater_id：<input type="text" v-model="temp.creater_id" />
		</p>
		<!--<p>
			thumbnail：<input type="text" v-model="thumbnail" />
		</p>-->
		<button @click="submit()">提交</button>
	</div>
</template>

<script>
	import { addPost } from '../../api/list'
	export default {
		name: 'app',
		data() {
			return {
				temp: {
					title: '',
					content: '',
					category_id: '',
					creater_id: '',
	//				thumbnail: ''
				},
			}
		},
		methods: {
			submit() {
				addPost(this.temp).then(res => {
					if(!res.error_code) {
						console.log('添加成功')
//						this.$router.push({ path: '/list_' })
					}
				})
			}
		}
	}
</script>

<style>

</style>