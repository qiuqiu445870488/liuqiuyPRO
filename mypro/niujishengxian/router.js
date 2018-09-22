//router.js 加载所有组件并且指定访问路径

import Vue from 'vue'
import Router from 'vue-router'
//import Home from './views/Home.vue'
//import About from './views/About.vue'
//1.1:加载Home组件
//import HomeContainer from "./components/tabbar/HomeContainer.vue";

//Vue.use(Lazyload)
Vue.use(Router)
export default new Router({
  routes: [
      //path 组件访问路由        对应组件
      //如果访问 /home a <router-link to="/home">..
      //如果访问 /   自动将请求路径改 /home
     // {path:"/",redirect:"/home"},
      
      //{path:'/goodinfo/:id',component:GoodInfo}//,name:"ginfo"
    ]
})
