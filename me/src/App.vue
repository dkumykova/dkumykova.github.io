<template>
  <div id="app">
    
    <navBar></navBar>
    <me-stuff></me-stuff>
    <footer></footer>

  </div>
  
</template>
// TODO: do a v-if to switch page content; or use v-router to switch between work and about pages most likely, need to define own router


<script>
import aboutMe from './pages/aboutPage.vue'
import navBar from './components/navComp.vue'
import footer from './components/footerComp.vue'
import work from './pages/workPage.vue'


export default {
  name: 'app',
  components: {
    aboutMe,
    navBar,
    footer,
    work
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50; */
  /* margin-top: 60px; */
}
/* p {
  margin-top: 50px;
} */
</style>
