<template>
	<div id="app" :model="temp">
		<p>
			标签：<input type="text" v-model="temp.title" />
		</p>
		<p>
			内容：<input type="text" v-model="temp.content" />
		</p>
		<p>
			分类ID：<input type="text" v-model="temp.category_id" />
			<!-- <select name="" id="">
				<option value="">VR聊吧</option>
				<option value="">VR硬件</option>
				<option value="">VR软件</option>
				<option value="">AR|MR讨论区</option>
				<option value="">VR资源下载</option>
				<option value="">VR视景仿真</option>
			</select> -->
		</p>
		<p>
			creater_id：<input type="text" v-model="temp.creater_id" />
		</p>
		<p><button @click="submit(temp.category_id)">提交</button></p>
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
					creater_id: ''
				},
			}
		},
		methods: {
			submit(category_id) {
				addPost(this.temp).then(res => {
					if(!res.error_code) {
						console.log('添加成功')
						this.$router.push({
							path: '/list/'+category_id
						})
					}
				})
			}
		}
	}
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
	}
	#app{0
		width: 300px;
		height: 500px;
		margin: 0 auto;
	}
	
	#app p {
		margin-top: 30px;
		text-align: right;
	}
	
	#app input {
		width: 60%;
		height: 30px;
	}
	
	#app button {
		width: 95%;
		height: 35px;
		text-align: center;
		background: #ca3232;
		color: white;
		border: none;
	}
</style>