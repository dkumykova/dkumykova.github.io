<template>
<div id="mainBox">
    <h3 v-on:click="fillDescription">{{title}}</h3>
    <p v-show="showDescription">{{description}}</p>
</div>

<!-- TODO: create physical template for the project box with title at top, image in background, and descrition on hover -->
  
</template>

})

<script>
export default {
  data: function(){
    return{
      showDescription: false,
      title: "Test title",
      description: "Sample descr  iption"
    }
  },
  methods: {
    fillDescription: function(){
      
      if(this.showDescription == false){
        //this.title = "Test Title";
        this.showDescription = true;
        this.description = "trueest shit ajdajsd";
      } else {
        this.showDescription = false;
      }
      
      
    }
  }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../styles/style.css';

/* body{
  margin-top: 100px;
} */
</style>
