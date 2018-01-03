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
      <table id="table">
          <tr>
            <td  v-for="data in arr1">
              <img src="http://www.52vr.com/data/attachment/common/ec/common_3_icon.gif"/>
              <dl>
                <dt>
                  <a href="" class="bt" @click="pup(data.id)">{{data.name}}</a>
                  <span style="color: #F26C4F;">(39)</span>
                </dt>
                <dd>
                  <span>主题：1399</span>
                  <span style="padding-left:16px;">贴数：2099</span>
                </dd>
              </dl>
            </td>
          </tr>
      </table>
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
    methods:{
      pup(id){
        this.$router.push('/list/'+id)
        console.log(id)
      }
    }
	}
</script>

<style scoped>
.jinri {
  width: 1190px;
  background: white;
  font-size: 14px;
}
#zuo li {
  color: #666666;
  float: left;
  padding: 5px 20px 5px 10px;
  text-align: center;
  list-style: none;
}
#you li {
  float: right;
  padding: 5px 10px;
  list-style: none;
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
  margin-top: 12px;
  padding: 8px 12px;
  border-top: 1px #ccc solid;
}
.bt{
  font-size: 16px;
  color: #333;
  font-weight: 400;
  text-decoration: none;
}
.bt:hover{
  color: #0d58b4;
}
#table{
  word-wrap: break-word;
  color: #666;
  width: 100%;
  font-size: 12px;
}
#table tr{
 display: flex;
  flex-wrap: wrap;
}
#table tr td{
  padding: 10px 0px;
  width: 33.3%;
}
#table tr td img{
  width: 80px;
  height: 80px;
  float: left;
  padding: 0 18px;
}
#table tr td dl dt{
  padding: 6px 0;
  font-weight: 400;
}
#table tr td dl dd{
  color: #666;
}
</style>