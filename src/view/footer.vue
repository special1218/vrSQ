<template>
	<div id="app" style="margin-top: 16px;">

		<div id="zaixian">
			<p>在线会员 - 147 人在线 - 5 会员(0 隐藏)，142 位游客 - 最高记录是 5500 于 2018-1-1.</p>
			<ul id="guanli">
				<li>
					<img src="http://www.52vr.com/static/image/common/online_admin.gif" /> 管理员
				</li>
				<li>
					<img src="http://www.52vr.com/static/image/common/online_supermod.gif" /> 超级版主
				</li>
				<li>
					<img src="http://www.52vr.com/static/image/common/online_moderator.gif" /> 版主
				</li>
				<li>
					<img src="http://www.52vr.com/static/image/common/online_member.gif" /> 会员
				</li>
			</ul>

			<ul id="sheji">
				<li>
					<img src="http://www.52vr.com/static/image/common/online_member.gif" /> 设计空间
				</li>
				<li>
					<img src="http://www.52vr.com/static/image/common/online_member.gif" /> qingpingguo007
				</li>
				<li>
					<img src="http://www.52vr.com/static/image/common/online_member.gif" /> 我的领域
				</li>
				<li>
					<img src="http://www.52vr.com/static/image/common/online_admin.gif" /> PeckBang
				</li>
				<li>
					<img src="http://www.52vr.com/static/image/common/online_member.gif" /> hyx19850404
				</li>
			</ul>

		</div>

		<div id="box1">
			<div class="zuo">
				<p>
					<a href="#">www.52vr.com</a>
				</p>
			</div>
			<div class="you">
				<p>
					<a href="#">手机版</a> |
					<a href="#" style="font-weight: bold;">VR开发网</a> |
					<a href="#" title="网站地图">网站地图</a>
					<a href="#">统计</a> 津ICP备16006248号</p>
				<p>GMT+8,2017-12-27 10:08 AM</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
	}
	
	.pg {
		position: absolute;
		right: 10px;
		top: -10px;
	}
	
	#zaixian {
		font-size: 14px;
		width: 1190px;
		background: white;
		margin: 0 auto;
	}
	
	#zaixian p {
		font-weight: bold;
		padding-left: 10px;
		line-height: 40px;
		border-bottom: 1px #ccc solid;
	}
	
	#guanli {
		display: flex;
		border-bottom: 1px #ccc solid;
	}
	
	#guanli li {
		list-style: none;
		padding: 10px 15px;
	}
	
	#sheji {
		display: flex;
	}
	
	#sheji li {
		list-style: none;
		padding: 10px 0px 10px 15px;
		margin-right: 90px;
	}
	
	#box1 {
		position: relative;
		width: 1190px;
		height: 73px;
		margin: 0 auto;
		padding: 20px 0px;
		font-size: 10px;
	}
	
	.zuo {
		width: 50%;
		float: left;
		font-weight: bold;
	}
	
	.zuo p a {
		text-decoration: none;
		color: black;
	}
	
	.zuo p a:hover {
		color: blue;
	}
	
	.you {
		width: 50%;
		float: right;
	}
	
	.you p a {
		text-decoration: none;
		color: black;
	}
	
	.you p a:hover {
		color: blue;
	}
	
	.you p {
		text-align: right;
		color: #666;
	}
</style>