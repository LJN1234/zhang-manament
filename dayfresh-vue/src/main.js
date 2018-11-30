// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import vueaxios from 'vue-axios'

Vue.use(axios,vueaxios)
Vue.prototype.$axios = axios;
//引入MUI框架
import mintUi from 'mint-ui'
Vue.use(mintUi)
import '../node_modules/vant/lib/vant-css/index.css';
import '../node_modules/mint-ui/lib/style.css'
import 'swiper/dist/css/swiper.css';
//字体图标
import '@/assets/lib/icons/iconfont.css'
//公共重置样式
import '@/assets/lib/css/base.css'
//引入pxtorem自动转换文件
import '@/assets/js/pxautorem/pxautorem'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
