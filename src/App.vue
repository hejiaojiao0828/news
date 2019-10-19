<template>
  <div id="app">
    <Header v-show="$root.$data.bHeader"></Header>
    <transition 
    enter-active-class="animated fadeInRight">
      
      <router-view></router-view>
      
    </transition>
    <Footer v-show="$root.$data.bFooter"></Footer>
  </div>
</template>

<script>

import Header from "./components/Header"
import Footer from "./components/Footer"

export default {
  name: 'app',
  components: {
    Header,Footer
  },
  methods:{
    checkPath(path){//路由检测
      if(/index|home|recreation|society|news/.test(path)){
        this.$root.$data.bHeader=true;
        this.$root.$data.bFooter=true;
      }
      if(/user/.test(path)){
        this.$root.$data.bHeader=false;
        this.$root.$data.bFooter=true;
      }
      if(/login|reg|detail/.test(path)){
        this.$root.$data.bHeader=false;
        this.$root.$data.bFooter=false;
      }
    }
  },
  watch:{
    $route:{
      handler(current,prev){
        this.checkPath(current.path)
      },
      immediate:true,
      deep:true
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
