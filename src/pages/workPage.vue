<template>
<div id="workPage">
  <h1>Work Experience</h1>
  <div class="grid-container">
    <div class="box1" >
      <projBox class="Intern" title="Software Developer Intern" description="
      Worked independently on a project involving integrating a new telematics IoT device into 
      an Android application connecting through Wifi Direct and transmitting data over a TCP socket
      connection. Application was completed in Xamarin (C#). Worked with a team of developers on an ASP.NET 
      Core website building tools in Vue for easier page deep linking and making Angular to Vue conversions 
      of webpages."></projBox>
    </div>
   <div class="box2">
      <projBox class="UXDM" title="UXDM Software Developer"  description="
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
      <projBox  class="Karen" title="Call Of Karen" description="Upcoming comedy PC adventure game made in Unreal. 
      Karen is a typical 1950s suburban housewife, trapped in an unhappy marriage and taking care of an 
      ungrateful child. If that wasn’t bad enough, the stars are right and Cthulhu is descending upon the world, 
      starting with her home. Play through minigames of what a suburban mom would do as her house slowly
      descends into chaos.">
      </projBox>
   </div>
   <div class="box4">
      <projBox  class="Fighters" title="Forest Fighters"  description="2D fighting game created in GameMaker as a local game jam project - play as birch,
      oak, or any other of your favorite muscley trees and fight to the death!"></projBox>
   </div>
   <div class="box5">
      <projBox  class="Error" title="Fatal Error" description="2D fighting game created in Dragonfly Game Engine. In this game you and your opponent 
      fight as one of the 5 most well-known programming languages, and are pitted against one another in order to show off your language’s most outstanding 
      abilities. Set in the forbidden block of memory from which no language can allocate, players fight to death in a Tekken-like 1v1 arena, and take out 
      aggression against their most hated language. You can play as Python, C, C++, Lisp, or Java, and prove once and for all which is the best programming language!"></projBox> 
      
   </div>
   <div class="box6">
     <projBox  class="Boids" title="Birds and Boids" description="Birds and Boids is designed to be a tranquil, relaxing experience that allows users to interact
     with boids as they float across the screen and bring music where they go. Uses the Leap Motion for more immersive boid-to-human interaction.">
     </projBox>
   </div>
   <!-- <div class="box7">
    <projBox  class="Demo" title="VR Demo"  description="link to video?"></projBox>
   </div> -->
   <div class="box7">
      <projBox  class="Website" title="Personal Website" description="Portfolio website built from scratch using VueJs and NodeJs.">
      </projBox>

    <!-- <projBox title="AI For Games" subtitle="IMGD4100" description="cool and funky classwork"></projBox> -->
   </div>
   <div class="box8">
      <projBox  class="Dragonfly" title="Dragonfly Game Engine" description="Created fully functional ASCII-based game engine in C++, utilizing the SFML library for grahphics
      and audio. Implemented functionality such as game loop manager, graphics and audio managers, game objects, and 2D physics."></projBox>
    
   </div>
   <div class="box9">
      <projBox  class="Doll" title="Russian Doll Generator" description="Utilized paramterized procedural
      generation to create a customizable Russian Doll set generator! Completed during the last half of Procjam 2019.">
      </projBox>
   </div>
      <div class="box10">
      </div>
      
      

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
    
  }
  
}
</script>




