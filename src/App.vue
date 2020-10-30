<template>
  <div id="app">
    <tophead/>
    <router-view/>
  </div>
</template>

<script>
  import tophead from "./components/tophead.vue"
export default {
  name: 'App',
  components:{
    tophead
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
*{
  margin: 0;
  padding: 0;
}
a{
    text-decoration: none;
}
</style>
