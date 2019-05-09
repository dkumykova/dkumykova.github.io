<template>
 
    <ul>
        <li>Me</li>
        <li>Project/Work</li>
    </ul>
  
</template>

<script>
export default {
  name: 'navBar',
  
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
