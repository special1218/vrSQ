<template>
	<div class="jinri">
		<ul id="zuo">
			<li>今日:7187</li>
			<li>昨日:1855</li>
			<li>帖子:134768</li>
			<li>会员:53417</li>
			<li>欢迎新会员:</li>
		</ul>
		<ul id="you">
			<li>
				<a href="#">最新回复</a>
			</li>
			<li>
				<a href="#">关注微信</a>
			</li>
		</ul>
		<p id="yx">yxl9926</p>
		<div v-for="data in arr">
			<div id="shang">
				<h4 id="hangye">{{data.name}}</h4>
			</div>
			<div v-for="data in arr1" id="erji">
				<dl>
					<dt><img src="http://www.52vr.com/data/attachment/common/ec/common_3_icon.gif"/></dt>
					<dd>
						<h4>{{data.name}}</h4>
						<ul id="zhuti">
							<li>主题: 1413</li>
							<li>帖数: 2万</li>
						</ul>
					</dd>
				</dl>
			</div>
		</div>
	</div>
</template>

<script>
	import { bbscategories } from '../api/VRhangye'

	export default {
		data() {
			return {
				arr: [],
				arr1: []
			}
		},
		created() {
			bbscategories().then(res => {
				this.arr = res.data.data;
				this.arr1 = res.data.data;
				this.arr = this.arr.filter(function(item) {
					if(item.pid == "0") {
						return true;
					}
				})
				this.arr1 = this.arr1.filter(function(item) {
					if(item.pid == "1") {
						return true;
					}
				})

			})
		},
	}
</script>

<style scoped>
	.jinri {
		width: 1190px;
		background: white;
	}
	
	#zuo li {
		color: #666666;
		float: left;
		padding: 5px 20px 5px 10px;
		text-align: center;
		list-style: none;
		font-size: 15px;
	}
	
	#you li {
		float: right;
		padding: 5px 10px;
		list-style: none;
		font-size: 14px;
	}
	
	#you li a {
		text-decoration: none;
		color: #9fa19f;
	}
	
	#you li a:hover {
		color: #0d58b4;
	}
	
	#yx {
		clear: both;
		font-size: 12px;
		padding: 0px 0px 10px 10px;
		color: #a6a19f;
	}
	
	#hangye {
		border-left: 5px #4691f3 solid;
		margin-top: 10px;
		padding: 5px 10px;
		border-top: 1px #ccc solid;
	}
	
	#erji {
		display: flex;
	}
	
	.jinri dl {
		background: white;
		width: 300px;
		padding: 10px 0px 10px 39.5px;
	}
	
	.jinri dl dt img {
		width: 90px;
		float: left;
	}
	
	.jinri dl dd h4 {
		padding-top: 12px;
	}
	
	#zhuti li {
		font-size: 14px;
		float: left;
		padding: 5px 15px 0px 0px;
		list-style: none;
		color: #9c9b99;
	}
</style>