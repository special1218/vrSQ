<template>
	<div id="app">
		<div class="nav">
			<div class="top_up">
				<div class="top_left">
					<a href="#">登录</a>
					<a href="#">立即注册</a>
					<a href="#">QQ登陆</a>
					<a href="#">微信登陆</a>
				</div>
				<div class="top_right">
					<a href="#" class="red" title="每日签到，一天学习好心情！">签到得积分 ！</a>
					<a href="#" class="red">做任务赚积分</a>
					<a href="#" class="orange">QQ群;8229505</a>
					<a href="#" style="color: #999;">积分兑换</a>
					<a>
						<select class="sele" style="color: #999;background: none; border: none;outline: none;">
							<option>联系我们</option>
							<option>版权投诉</option>
							<option>广告投放</option>
						</select>
					</a>
				</div>
			</div>
		</div>

		<div class="bottom">
			<div class="top_bottom">

				<div class="bottom_left">
					<img class="logo" style="z-index: 100" src="http://www.52vr.com/template/qu_business/img/logo.png" alt="">
				</div>
				<div class="bottom_center">
					<ul style="z-index: 10;">
						<li>
							<a href="">首页</a>
						</li>
						<li>
							<a href="">VR资讯</a>
						</li>
						<li>
							<a href="">VR教程</a>
						</li>
						<li>
							<a href="">招聘外包</a>
						</li>
						<li>
							<a href="" style="color: #FFA500;">虚幻引擎</a>
						</li>
						<li>
							<a href="">VR公开课</a>
						</li>
						<li>
							<a href="">VR社区</a>
						</li>
					</ul>
				</div>
				<div class="bottom_right">
					<input type="text" placeholder="请输入搜索内容" />
					<button type="submit"><img src="../../assets/img/search.png" alt=""></button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
#app {
	font-size: 12px;
}
.nav{
	width: 100%;
	height: 28px;
	background: #232121;
}
.top_up{
	height: 28px;
	width: 1190px;
	margin: 0 auto;
}
.top_left{
	width: 260px;
    height: 28px;
    line-height: 28px;   
    float: left;                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
}
.top_left a{
	text-decoration: none;
	padding: 0 12px;
	color: #999;
}
.top_left a:hover{
	color: #f86a09;
}
.top_right{
	float: right;
	height: 28px;
    line-height: 28px;
    width: 440px; 
}
.top_right a{
	text-decoration: none;
	padding: 0 2px 0 10px;
}
.red{
	color: red;
}
.red:hover{
	color: #ff7300;
}
.orange{
	color: #ffa504;
}
.orange:hover{
	color: #ff7300;
}

.bottom{
	width: 100%;
	height: 170px;
	background: url(http://www.52vr.com/data/attachment/common/a8/common_4_banner.jpg) no-repeat center 0;
}
.top_bottom{
	width: 1190px;
	height: 136px;
	margin: 0 auto;
	padding-top: 10px;
}
.bottom_left{
	float: left;
	width: 208px;
	height: 62px;
}
.bottom_center{
	margin-left: 12px;
	float: left;
	width: 593px;
	height: 44px;
}
.bottom_center ul{
	padding-left: 0px;
}
.bottom_center ul li{
	float: left;
	list-style: none;
	text-align: center;
	padding: 0 18px;
}
.bottom_center ul li a {
	text-decoration: none;
	font-size: 14px;
	display: block;
	color: white;
}
.bottom_right {
	width: 152px;
	background: #000000;
	color: #B6B6B6;
	height: 28px;
	border-radius: 20px;
	float: right;
	padding: 0px 10px;
}
.bottom_right input{
	width: 100px;
	border: none;
	margin-top: 8px;
	background: none;
	font-size: 12px;
}
.bottom_right button{
	width: 20px;
	height: 20px;
	float: right;
	margin-top: 7px;
	background: none;
	border: none;
}
</style>