<template>
<div id="workPage">
  <h1>Work Experience</h1>
  <div class="grid-container">
    <div class="box1" >
      <projBox @mouseenter="testFunction(this.className)" class="Intern" title="Software Developer Intern" description="
      Worked independently on a project involving integrating a new telematics IoT device into 
      an Android application connecting through Wifi Direct and transmitting data over a TCP socket
      connection. Application was completed in Xamarin (C#). Worked with a team of developers on an ASP.NET 
      Core website building tools in Vue for easier page deep linking and making Angular to Vue conversions 
      of webpages."></projBox>
    </div>
   <div class="box2">
      <projBox class="UXDM" title="Software Developer"  description="
      Working with a team of PHD, graduate, and undergraduate students under 
      a WPI professor to research innovation in User Experience Design. 
      Worked independently on a game in C# that will utilize Tobii eye-tracking 
      software to play, and will be used by future WPI students to collect data on UX. 
      Currently working on improving an eye-tracking research software built in C# and Vue.">
      </projBox>
   </div>
  </div>
  <h1>Projects</h1>
  <div class="grid-container2">
   <div class="box3">
      <projBox class="Karen" title="Call Of Karen" description="Upcoming comedy PC adventure game made in Unreal. 
      Karen is a typical 1950s suburban housewife, trapped in an unhappy marriage and taking care of an 
      ungrateful child. If that wasn’t bad enough, the stars are right and Cthulhu is descending upon the world, 
      starting with her home. Play through minigames of what a suburban mom would do as her house slowly
      descends into chaos.">
      </projBox>
   </div>
   <div class="box4">
      <projBox class="fighters" title="Forest Fighters"  description="link to video"></projBox>
   </div>
   <div class="box5">
      <projBox class="dragonfly" title="Dragonfly Game Engine and Game" description="hoo boi c++"></projBox>
   </div>
   <div class="box6">
    <projBox title="VR Demo"  description="link to video?"></projBox>
   </div>
   <div class="box7">
     <projBox class="Doll" title="Russian Doll Generator" description="Utilized paramterized procedural
      generation to create a customizable Russian Doll set generator! Completed during the last half of Procjam 2019.">
      </projBox>
   </div>
   <div class="box8">
    <!-- <projBox title="AI For Games" subtitle="IMGD4100" description="cool and funky classwork"></projBox> -->
   </div>
  </div>
</div>
</template>

<style scoped>
@import '../styles/style.css';


</style>

<script>
import projBox from '../components/projectBoxComp.vue'


// TODO: fill in message, image, and description information for each project box and place each box within grid structure

export default {
  name: 'work',
  components: {
    projBox
  },
  methods:{
    testFunction(yee){
      alert("d");
      console.log(yee);
      
      var desc = document.getElementsByClassName('Intern');
       for(var i = 0; i < desc.length; i++){
         desc[i].classList.add('mainBoxHover');

       }
        this.showDescription = true;
    }
  }
  
}
</script>




