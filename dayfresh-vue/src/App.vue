<template>
  <div id="app">
    <router-view/>
    <v-footer></v-footer>
  </div>
</template>


<script>
//引入底部公共组件
import Footer from '@/components/commons/Footer';
export default {
  name: 'App',
  components:{
    "v-footer":Footer
  }
}
</script>

<style lang='scss'>
html{
  height:100%;
  background-color:#fff;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color:#fff;
  height:100%;
  margin:0;
  padding:0;
}
</style>
