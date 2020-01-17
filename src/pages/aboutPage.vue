<template>
 
 <div id="aboutMe">
   <div id="photo">
     <img src="../images/profile_2.jpg" width="250" height="320">
   </div>
   <br><br>
   <div id="blurb">
     <h2 style="margin-left:15%;">
       Hey There - I'm Diana Kumykova.
     </h2>
     <p> 
       I am currently pursuing bachelors in Computer Science as well as Interactive Media and Game Development (Tech)
       at Worcester Polytechnic Institute. I love games and telling stories through them, whether they be for escapism, to make a statement,
       or just for plain old fun. 
     </p>
   </div>
  <br>
   <div id="contact">
      If you want to ask about projects, work, or just chat, here are some ways to contact me:
      <br><br>
      <div id="links">
        <a id="refPhoto" href="https://www.linkedin.com/in/diana-kumykova-426b69176"><img src="../images/linkedin.svg" width="50" height="50"></a>
        <a id="refPhoto" href="#"><img src="../images/email.svg" width="50" height="50"></a>
        <a id="refPhoto" href="https://www.github.com/dkumykova"><img src="../images/github-logo.png" width="50" height="50"></a>
      </div>
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
