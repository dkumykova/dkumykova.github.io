<template>
 
 <div id="aboutMe">
   <div id="photo">
     <img src="../images/no_face.jpg" width="100" height="100">
   </div>
   <div id="blurb">
     <h2>
       Hey There - I am DK
     </h2>
     <p> 
       And this is relevant information about me, my passions, my skills, and anything else
     </p>
   </div>
    
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
