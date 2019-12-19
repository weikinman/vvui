import Vue from 'vue'
import App from './App.vue'
import vui from './components/index'
Vue.config.productionTip = false
Vue.use(vui);
new Vue({
  render: h => h(App),
}).$mount('#app')
