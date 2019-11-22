import Vue from 'vue'
import App from './App.vue'
import router from "@/luyou";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.prototype.$axios=axios
axios.defaults.baseURL = '/api'
axios.defaults.withCredentials=true

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

Vue.directive('focus',{
  inserted: function (el, {value}) {
    if (value) {
      el.focus();
    }
  }
})


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
