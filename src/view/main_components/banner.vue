<template>
  <div class="banner">
    <div class="left">
        <!-- <leftbanner :arr="imgData"></leftbanner> -->
    </div>
    <div class="right">
        <div class="top">
          <ul id="ul1">
            <li @mouseover="mose(1)"><a href="">最新帖子</a></li>
            <li @mouseover="mose(2)"><a href="">最新回复</a></li>
            <li @mouseover="mose(3)"><a href="">人才招聘</a></li>
            <li @mouseover="mose(4)"><a href="">外包项目</a></li>
          </ul>
        </div>


        <div id="bottom">

            <div v-if="show==1">
              <ul>
                <li>
                  <a href="" class="blue"> Vega Prime |  </a>
                  <a href="" class="black" title="书讯《Vega Prime开发与仿真应用》已出版,">书讯《Vega Prime开发与仿真应用》已出版,</a>
                    <span class="gray">&nbsp;11-30</span>
                </li>
                <li>
                  <a href="" class="blue"> UE4视频教学 |  </a>
                  <a href="" class="black" title="求助！请教大家关于云层可视化的问题,">求助！请教大家关于云层可视化的问题,</a>
                    <span class="gray">&nbsp;11-30</span>
                </li>
                <li>
                  <a href="" class="blue"> Vega Prime |  </a>
                  <a href="" class="black" title="【UE4】3分钟教你环绕拍摄,">【UE4】3分钟教你环绕拍摄</a>
                    <span class="gray">&nbsp;11-30</span>
                </li>
                <li>
                  <a href="" class="blue"> VR来哦吧 |  </a>
                  <a href="" class="black" title="虚幻引擎4 - RPG入门套件">虚幻引擎4 - RPG入门套件</a>
                    <span class="gray">&nbsp;11-30</span>
                </li>
                <li>
                  <a href="" class="blue"> UE4蓝图C++ |  </a>
                  <a href="" class="black" title="【UE4资源】 Koola's Snow 雪景">【UE4资源】 Koola's Snow 雪景</a>
                    <span class="gray">&nbsp;11-30</span>
                </li>
                <li>
                  <a href="" class="blue"> VR聊吧 |  </a>
                  <a href="" class="black" title="UE4教程：游戏开发案例蓝图视频教程">UE4教程：游戏开发案例蓝图视频教程</a>
                    <span class="gray">&nbsp;11-30</span>
                </li>
                <li>
                  <a href="" class="blue"> UE4资源 |  </a>
                  <a href="" class="black" title="书讯《Vega Prime开发与仿真应用》已出版,">书讯《Vega Prime开发与仿真应用》已出版,</a>
                    <span class="gray">&nbsp;11-30</span>
                </li>
                <li>
                  <a href="" class="blue"> UE4资源 |  </a>
                  <a href="" class="black" title="湖边的小屋自然包">湖边的小屋自然包</a>
                    <span class="gray">&nbsp;11-30</span>
                </li>
                <li>
                  <a href="" class="blue"> UE4资源 |  </a>
                  <a href="" class="black" title="Unreal Engine 4独立游戏制作编程教学">Unreal Engine 4独立游戏制作编程教学</a>
                    <span class="gray">&nbsp;11-30</span>
                </li>
              </ul>
            </div>

            <div v-if="show==2">
              <ul>
                <li>
                  <a href="" class="blue"> Vega Prime |  </a>
                  <a href="" class="black" title="书讯《Vega Prime开发与仿真应用》已出版,">书讯《Vega Prime开发与仿真应用》已出版,</a>
                    <span class="gray">&nbsp;11-30</span>
                </li>
                <li>
                  <a href="" class="blue"> UE4视频教学 |  </a>
                  <a href="" class="black" title="求助！请教大家关于云层可视化的问题,">求助！请教大家关于云层可视化的问题,</a>
                    <span class="gray">&nbsp;11-30</span>
                </li>
                <li>
                  <a href="" class="blue"> Vega Prime |  </a>
                  <a href="" class="black" title="【UE4】3分钟教你环绕拍摄,">【UE4】3分钟教你环绕拍摄</a>
                    <span class="gray">&nbsp;11-30</span>
                </li>
                <li>
                  <a href="" class="blue"> VR来哦吧 |  </a>
                  <a href="" class="black" title="虚幻引擎4 - RPG入门套件">虚幻引擎4 - RPG入门套件</a>
                    <span class="gray">&nbsp;11-30</span>
                </li>
                <li>
                  <a href="" class="blue"> UE4蓝图C++ |  </a>
                  <a href="" class="black" title="【UE4资源】 Koola's Snow 雪景">【UE4资源】 Koola's Snow 雪景</a>
                    <span class="gray">&nbsp;11-30</span>
                </li>
                <li>
                  <a href="" class="blue"> VR聊吧 |  </a>
                  <a href="" class="black" title="UE4教程：游戏开发案例蓝图视频教程">UE4教程：游戏开发案例蓝图视频教程</a>
                    <span class="gray">&nbsp;11-30</span>
                </li>
              </ul>
            </div>

            <div v-if="show==3">
              <ul>
                <li>
                    <span class="blue">•</span>
                    <a href="" class="black" title="销售专员（VR/AR方向）">销售专员（VR/AR方向）</a>
                    <span class="gray"> 10-24 </span>
                </li>
                <li>
                    <span class="blue">•</span>
                    <a href="" class="black" title="需求分析师">需求分析师</a>
                    <span class="gray"> 10-24 </span>
                </li>
                <li>
                    <span class="blue">•</span>
                    <a href="" class="black" title="市场总监（有期权）">市场总监（有期权）</a>
                    <span class="gray"> 10-24 </span>
                </li>
                <li>
                    <span class="blue">•</span>
                    <a href="" class="black" title="U3D软件工程师">U3D软件工程师</a>
                    <span class="gray"> 10-24 </span>
                </li>
                <li>
                    <span class="blue">•</span>
                    <a href="" class="black" title="Unity3d开发工程师">Unity3d开发工程师</a>
                    <span class="gray"> 10-24 </span>
                </li>
                <li>
                    <span class="blue">•</span>
                    <a href="" class="black" title="销售专员（VR/AR方向）">销售专员（VR/AR方向）</a>
                    <span class="gray"> 10-24 </span>
                </li>
                <li>
                    <span class="blue">•</span>
                    <a href="" class="black" title="需求分析师">需求分析师</a>
                    <span class="gray"> 10-24 </span>
                </li>
                <li>
                    <span class="blue">•</span>
                    <a href="" class="black" title="市场总监（有期权）">市场总监（有期权）</a>
                    <span class="gray"> 10-24 </span>
                </li>
              </ul>
            </div>

            <div v-if="show==4">
              <ul>
                <li>
                    <span class="blue">•</span>
                    <a href="" class="black" title="销售专员（VR/AR方向）">销售专员（VR/AR方向）</a>
                    <span class="gray"> 10-24 </span>
                </li>
                <li>
                    <span class="blue">•</span>
                    <a href="" class="black" title="需求分析师">需求分析师</a>
                    <span class="gray"> 10-24 </span>
                </li>
                <li>
                    <span class="blue">•</span>
                    <a href="" class="black" title="市场总监（有期权）">市场总监（有期权）</a>
                    <span class="gray"> 10-24 </span>
                </li>
                <li>
                    <span class="blue">•</span>
                    <a href="" class="black" title="U3D软件工程师">U3D软件工程师</a>
                    <span class="gray"> 10-24 </span>
                </li>
                <li>
                    <span class="blue">•</span>
                    <a href="" class="black" title="Unity3d开发工程师">Unity3d开发工程师</a>
                    <span class="gray"> 10-24 </span>
                </li>
              </ul>
            </div>

        </div>
    </div>
  </div>
</template>

<script>

import { bbsslide } from '../../api/list'
import leftbanner from '../../components/banner.vue'

export default {
  name: 'HelloWorld',
  data () {
    return {
      loop: true,
      autoPlay: true,
      imgData: [],
      show:1
    }
  },
  components: {
		leftbanner
	},
  created(){
  	bbsslide().then(res =>{
  		this.imgData = res.data.data
  		// console.log(this.imgData)
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
