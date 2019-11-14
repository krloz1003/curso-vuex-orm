import Vue from 'vue'
import vuetify from './plugins/vuetify';
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$updateBus = new Vue;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
