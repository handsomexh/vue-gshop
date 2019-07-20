import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import router from './router'

// 引入组件
import Content from "./components/Content/Content"
import Banner from "./components/Banner/Banner"
import Header from "./components/Header/Header"

// 忽略提示
Vue.config.productionTip = false


// 注册全局组件
Vue.component('Content', Content)
Vue.component('Banner', Banner)
Vue.component('Header', Header)


new Vue({
  render: h => h(App),
  router,   // 配置路由
}).$mount('#app')
