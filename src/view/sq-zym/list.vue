<<template>
<div class="app">
	<top2 class="top2"></top2>
    <main2 class="main2"></main2>
</div>
</template>

<script>
import {listByPage} from '../../api/list'
import top2 from './list_top.vue'
import main2 from './list_main.vue'
export default {
  data () {
    return {
	  arr:[],
	  id:''
    }
  },
  components:{
  	top2,
  	main2
  },
  created(){
	  this.id=this.$route.params.id
      listByPage({category_id:this.id}).then(res=>{
      this.arr=res.data.data
    })
  }
}
</script>

<style scoped="scoped">
.app {
	
	background: ghostwhite;
}
</style>
