<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
body,html{
  margin: 0;
  height: 100%;
}
*{
  box-sizing: border-box;
}
p,ul{
  padding: 0;
  margin: 0;
}
h2{
  margin: 0;
  padding: 0;
}
</style>
