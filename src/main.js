import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import "./assets/css/base.css"
import "./assets/js/font.js"

import store from "./plugins/store"
import router from "./plugins/router"
import "./plugins/axios"

Vue.prototype.server = require('./config/server')
import 'animate.css'

new Vue({
  data:{
    bHeader:true,
    bFooter:true
  },
  render: h => h(App),
  router,
  store,
}).$mount('#app')
