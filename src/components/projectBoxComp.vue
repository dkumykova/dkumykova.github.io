<template>
<div id="mainBox">
    <h2 v-on:click="fillDescription">{{title}}</h2>
    <h3>{{subtitle}}</h3>
    <div id="descriptionBox">
      <p v-show="showDescription">{{description}}</p>
    </div>
</div>

<!-- TODO: create physical template for the project box with title at top, image in background, and descrition on hover -->
  
</template>

})

<script>
export default {
  data: function(){
    return{
      showDescription: true
      // title: "Test title",
      // description: "Sample descr  iption"
    }
  },
  props:{
    title: String,
    subtitle: String,
    description: String
  },
  methods: {
    fillDescription: function(){
      
      if(this.showDescription == false){
        //this.title = "Test Title";
        this.showDescription = true;
        
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
