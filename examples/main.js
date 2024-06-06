import Vue from 'vue'
import App from './App.vue'
import HUI from '../packages/index'
Vue.use(HUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
