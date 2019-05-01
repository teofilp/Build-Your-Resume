import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource';
import jQuery from 'jquery';

global.jQuery = jQuery;
global.$ = jQuery;

Vue.use(VueResource);
export const EventBus = new Vue();
Vue.config.productionTip = false
Vue.filter('capitalize', function (value) {

  if (!value) return "";
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);

})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
