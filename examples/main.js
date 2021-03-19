import Vue from 'vue'
import App from './App.vue'
import wphUi from './../packages'
import './../packages/iconfont/iconfont.css'
Vue.use(wphUi);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
