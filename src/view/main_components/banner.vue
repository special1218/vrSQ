<template>
  <div class="banner">
    <div class="left">
        <leftbanner :arr="imgData"></leftbanner>
    </div>
    <div class="right">
        <div class="top">
          <ul id="ul1">
            <li @mouseover="mose(1)"><a href="">最新帖子</a></li>
            <li @mouseover="mose(2)"><a href="">最新回复</a></li>
            <li @mouseover="mose(3)"><a href="">VR聊吧</a></li>
            <li @mouseover="mose(4)"><a href="">VR案例</a></li>
          </ul>
        </div>
        <div id="bottom">
            <div v-if="show==1">
              <ul>
                <li v-for="data in arr">
                  <a href="" class="blue"> {{data.title}}|  </a>
                  <a href="" class="black">{{data.content}}</a>
                    <span class="gray">&nbsp;{{data.create_time}}</span>
                </li>
              </ul>
            </div>

            <div v-if="show==2">
              <ul>
                <li v-for="data in arr2">
                  <a href="" class="blue"> {{data.title}} |  </a>
                  <a href="" class="black" title="书讯《Vega Prime开发与仿真应用》已出版,">{{data.content}}</a>
                    <span class="gray">&nbsp;{{data.update_time}}</span>
                </li>
              </ul>
            </div>

            <div v-if="show==3">
              <ul>
                <li v-for="data in arr1">
                    <span class="blue">•</span>
                    <a href="" class="black">{{data.content}}</a>
                    <span class="gray">{{data.create_time}} </span>
                </li>
              </ul>
            </div>

            <div v-if="show==4">
              <ul>
                <li v-for="data in arr3">
                    <span class="blue">•</span>
                    <a href="" class="black" title="销售专员（VR/AR方向）">{{data.content}}</a>
                    <span class="gray"> {{data.create_time}} </span>
                </li>
              </ul>
            </div>

        </div>
    </div>
  </div>
</template>

<script>

import { bbsslide, bbsinfosList, listByPage } from '../../api/list'
import leftbanner from '../../components/banner.vue'

export default {
  name: 'HelloWorld',
  data () {
    return {
      loop: true,
      autoPlay: true,
      imgData: [],
      show:1,
      arr:[],
      arr1:[],
      arr2:[],
      arr3:[],
      time:''
    }
  },
  components: {
		leftbanner
  },
  // watch:{
  //   uuu(val){
  //     console.log(val)
  //   }
  // },
  // filters:{
  //   uuu(val){
  //     if(!val) return ''
  //     val=val.slice(3,5)
  //     return val
  //   }
  // },
  created(){
  	bbsslide().then(res =>{
  		this.imgData = res.data.data
  	}),
  	bbsinfosList({limit:9}).then(res =>{
  		this.arr = res.data.data
      // this.time=res.data.data.create_time
  	}),
  	listByPage({
  		page:1,
  		limit:9,
  	  category_id:7
  	}).then(res =>{
  		this.arr1 = res.data.data
  	}),
  	listByPage({
  		page:1,
  		limit:9,
  	  category_id:8
  	}).then(res =>{
  		this.arr3 = res.data.data
  	})
  	bbsinfosList({
  		limit:6,
  		byUpdateTime:true
  	}).then(res =>{
  		this.arr2 = res.data.data
  	})
  },
  methods:{
    mose(id){
      this.show=id
    }
  }
}
</script>

<style scoped>
.banner{
  margin-top: 16px;
}
.left{
  width: 589px;
  height: 308px;
  margin-right: 6px;
  float: left;
  word-wrap: break-word;
}
.left img{
	float: left;
	width: 100%;
}
.right{
  width: 594px;
  height: 308px;
  float: right;
  background: white;
}
.top{
  padding: 8px 0;
  width: 100%;
  height: 32px;
  overflow: hidden;
}
.top ul{
  padding-left: 15px;
}
.top ul li{
  margin: 0 10px; 
  float: left;
  list-style: none;
  text-align: center;
}
.top ul li a{
  width: 80px;
  color: #333;
  text-decoration: none;
  display: block;
  height: 32px;
  line-height: 32px;
}
.top ul li a:hover{
  color: #4691f3;
  border-bottom: 3px solid #4691f3;
}
#bottom{
   padding: 5px 16px;
   width: 562px;
   height: 250px;
  font-size: 14px;
  position: relative;
}
#bottom ul li{
  list-style: none;
  line-height: 28px;
}
#bottom>div{
  display: block;
}
#bottom>div{
  /* display: none; */
  position: absolute;
  top: 0;
  left: 3%;
}
#bottom ul li a{
  text-decoration: none;
}
.black{
  color: #333;
}
.gray{
  color: #999;
  font-size: 12px;
}
.blue{
  color: #4691f3;
}
</style>
