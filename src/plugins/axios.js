import Vue from "vue"
import axios from "axios"

//全局携带跨源凭证，允许后端跨域 
axios.defaults.withCredentials=true

// 将axios暴露在全局 其它组件都可以拿到
Vue.prototype.$axios = axios;
window.axios = axios;