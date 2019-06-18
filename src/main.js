import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import routes from './rootes'
import "./firebase"
import BootstrapVue from 'bootstrap-vue'


Vue.use(BootstrapVue)

Vue.config.productionTip = false
Vue.use(Router);

const router= new Router({
  mode: 'history',
  routes:routes
})

new Vue({
  el:'#app',
  router,
  render: h => h(App)
})


