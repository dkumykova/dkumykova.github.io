<template>
 
    <ul>
        <li v-on:click="showMainPage">Home</li>
        <li v-on:click="showAboutPage">Me</li>
        <li v-on:click="showWorkPage">Project/Work</li>
    </ul>

</template>

<script>
export default {
  name: 'navBar',
  props:{
    showAbout: false,
    showWork: false,
    showMain: true
  },
  methods:{
    showAboutPage: function(){
      showAbout = true;
      showWork = false;
      showMain = false;
    },
    showWorkPage: function(){
      showWork = true;
      showMain = false;
      showAbout = false;
    },
    showMainPage: function(){
      showMain = true;
      showWork = false;
      showAbout = false;
    }
  }
  
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul {
  list-style-type: none;
  padding: 0;
  position: fixed; /*floating nav*/
}
li {
  display: inline-block;
  margin: 0 30px;
  font-size: 1em;
  color: black;
}

li:hover{
    color: blueviolet;
}

li:active{
    color: red;
}
a {
  color: #42b983;
}
</style>
