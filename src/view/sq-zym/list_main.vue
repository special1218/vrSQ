<template>
	<div class="app">
		<div class="main">
			<div class="left">
				<div class="img" v-for="data in arr">
					<img :src="data.thumbnail" />
					<p>{{data.title}}</p>
				</div>
				
				<span style="border-right: 1px solid gainsboro; margin-left: 30px;">1<br />今日</span>
				<span>93<br />主题</span>
			</div>
			<div class="right">
				<div class="right_top">
					<span class="span1">共有<span class="span2">149</span>篇帖子</span>
					<button class="btn1" @click="send()">我要发帖</button>
				</div>
				<div class="right_main">
					<div class="aa">
						<h3>[我要约课] 下期VR直播内容由你来定！</h3>
						<p>obuli | 2016-12-27发表  | Sixiaoying 于前天 03:00 PM 参与评论</p>
					</div>
				</div>
			</div>
	    </div>
	</div>
</template>

<script>

import {listByPage} from '../../api/list'
export default {
  data () {
    return {
	  arr:[],
	  id:''
    }
  },
  created(){
	  this.id=this.$route.params.id
      listByPage({category_id:this.id}).then(res=>{
      this.arr=res.data.data
    })
  },
  methods:{
	  send(){
		  this.$router.push({path:'/addPost'})
	  }
  }
}

</script>

<style scoped="scoped">
.main{
	margin:0 auto; 
	width: 1190px;
	height: 1000px;
}
.left{
	border: 1px solid beige;
	float: left;
	text-align: center;
	position: relative;
	width: 180px;
	background: white;
}
.img img{
	position: absolute;
	top: -60px;
	left: 20px;
	border-radius: 50%;
}

.left span{
	float: left;
	width: 60px;
	text-align: center;
	font-size: 14px;
	margin-bottom: 40px;
}
.right{
	margin-left: 28px;
	float: left;
	width: 970px;
	height: 1000px;
	background: white;
}
.right_top{
	width: 953px;
	height: 52px;
	padding-left: 15px;
	border-bottom: none;
	border-left: 1px solid white;
	border-top: 1px solid white;
	border-right: 1px solid white;
}
.span1{
	float: left;
    margin: 17px 0px 0px 0;
    line-height: 14px;
    display: inline-block;
    color: #999;
}
.span2{
	font-size: 18px;
	color: black;
}
.btn1{
	float: right;
	width: 92px;
	height: 41px;
	border: none;
	background-color: #0d58b4 !important;
	color: white;
	margin-right: 10px;
	margin-top: 6px;
}
.aa{
	width: 912px;
	height: 55px;
	float: right;
	padding-top: 20px;
	padding-bottom: 20px;
	padding-right: 20px;
	border-bottom: 1px solid gainsboro;
}
.aa h3{
	color: red;
	margin-bottom: 5px;
}
.aa p {
	font-size: 10px;
	color: grey;
}
</style>