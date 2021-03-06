import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './plugins/moment'
import './plugins/vuelidate'
import { errorHandle } from './utils'

Vue.config.productionTip = false

Vue.config.errorHandler = errorHandle

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
