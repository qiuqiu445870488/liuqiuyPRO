//main.js  加载所有资源(组件;js/css/..)创建vue实例对象
import Vue from 'vue'
import App from './App.vue'
//1:加载路由模块
import router from './router'
//1.1:加载模块 VueResource(发送ajax请求)
import VueResource from 'vue-resource'
//1.2:将VueResource 注册vue
Vue.use(VueResource);
//
Vue.http.options.root = "http://127.0.0.1:3000/"


//2:是否是生产模式 false
Vue.config.productionTip = false



//3:创建vue实现对象挂载 public/index.html#app
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
