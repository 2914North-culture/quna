import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'babel-polyfill'

// 引入自定义stylus样式文件
import '@/common/stylus/base.styl'
import '@/common/stylus/iconfont.styl'

// 解决点击300ms延迟
import fastClick from 'fastclick'
fastClick.attach(document.body)

// 轮播插件 swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)

// vue-resource 获取数据
import VueResource from 'vue-resource'
Vue.use(VueResource)

// 总线bus
Vue.prototype.bus = new Vue();


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
