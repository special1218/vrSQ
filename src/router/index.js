import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import list from '@/view/sq-zym/list'
import addPost from '@/view/sq-zym/addPost'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {path:'/list/:id',component:list},
    {path:'/list/:category_id',component:list},
    {path:'/addPost',component:addPost}
  ]
})
