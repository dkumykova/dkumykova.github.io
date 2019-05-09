<template>
 
    <ul>
        <li>Email</li>
        <li>Phone</li>
    </ul>
  
</template>
// need to include option to draft email through gmail or outlook or something here

<script>
export default {
  name: 'footer'

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul {
  list-style-type: none;
  padding: 0;
  position: fixed; /*floating nav*/
  margin-top: 100px;
}

li {
  /* display: inline-block; */
  margin-bottom: 30px;
  font-size: 1em;
  color: rgb(44, 39, 39);
}

</style>
