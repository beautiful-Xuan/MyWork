<template>
  <div id="app">
    <!-- <v-nav :isShow="isShow"></v-nav> -->
    <router-view/>
  </div>
</template>

<script>
import '@/comCss/limit.css'
import '@/comCss/limitSet.css'
import '@/comCss/secondNav.css'
import nav from '@/components/navBar'
export default {
  data(){
    return{
      isShow:true
    }
  },
  name: 'App',
  components:{
    'v-nav':nav
  }
}
</script>

<style>
html,body{
  margin: 0;
  padding: 0;
  font-size: 14px;
  color: #666;
}
p{
  margin: 0;
}
a{
  text-decoration: none;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
