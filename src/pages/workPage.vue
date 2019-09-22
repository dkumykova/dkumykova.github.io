<template>
 
 <div id="workPage">
    <!-- <p>testing testing</p> -->
    <projBox></projBox>
    <projBox></projBox>
    <projBox></projBox>
 </div>
  
</template>


<script>
import projBox from '../components/projectBoxComp.vue'


// TODO: fill in message, image, and description information for each project box and place each box within grid structure

export default {
  name: 'work',
  components: {
    projBox
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
/* body{
  margin-top: 100px;
} */
</style>
