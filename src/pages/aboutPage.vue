<template>
 
 <div id="aboutMe">
   
      <img src="../images/no_face.jpg" width="90" height="80" float="left">
   
    
    <h3>Hello it me</h3>
    <p>description time make it look pretty</p>
    
 </div>
  
</template>

<script>
export default {
  name: 'aboutMe',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import '../styles/style.css';

</style>
