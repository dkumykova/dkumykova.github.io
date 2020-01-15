<template>
<div class="mainBox" @mouseenter="addOverlay" @mouseleave="removeOverlay">
    <h2 >{{title}}</h2>
    <div id="descriptionBox">
      <p v-show="showDescription">{{description}}</p>
    </div>
</div>
  
</template>

<script>
export default {
  data: function(){
    return{
      showDescription: false
    }
  },
  props:{
    title: String,
    subtitle: String,
    description: String
  },
  methods: {
     addOverlay: function(){
       //console.log('title');
       //console.log(this.title);
       var desc = document.getElementsByClassName('mainBox');
        for(var i = 0; i < desc.length; i++){
          if(this.title.includes(desc[i].classList[1])){
            desc[i].classList.add('mainBoxHover');
          }
          //console.log(desc[i].classList[1]);
        }
         this.showDescription = true;
     },
    removeOverlay: function(){
      var desc = document.getElementsByClassName('mainBox');
       for(var i = 0; i < desc.length; i++){
          desc[i].classList.remove('mainBoxHover');
       }
        this.showDescription = false;
    }
    
  }
}
</script>



<style >
@import '../styles/style.css';
</style>
