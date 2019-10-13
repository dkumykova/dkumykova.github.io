<template>
 
 <div id="workPage">
    <!-- <p>testing testing</p> -->
    <projBox title="Software Developer Intern"  subtitle="Tyler Technologies" description="
    Worked independently on a project involving integrating a new telematics IoT device into 
    an Android application connecting through Wifi Direct and transmitting data over a TCP socket
    connection. Application was completed in Xamarin (C#). Worked with a team of developers on an ASP.NET 
    Core website building tools in Vue for easier page deep linking and making Angular to Vue conversions 
    of webpages.">
    </projBox>
    <projBox title="Software Developer" subtitle="UXDM Lab" description="
    Working with a team of PHD, graduate, and undergraduate students under 
    a WPI professor to research innovation in User Experience Design. 
    Worked independently on a game in C# that will utilize Tobii eye-tracking 
    software to play, and will be used by future WPI students to collect data on UX. 
    Currently working on improving an eye-tracking research software built in C# and Vue.">
    </projBox>
    <projBox title="Lead Programmer + Audio" subtitle="Call of Karen" description="yay"></projBox>
    <projBox title="Forest Fighters" subtitle="Game Jam 2018" description="link to video"></projBox>
    <projBox title="VR Demo" subtitle="Global Game Jam 2018" description="link to video?"></projBox>


 </div>
  
</template>


<script>
import projBox from '../components/projectBoxComp.vue'


// TODO: fill in message, image, and description information for each project box and place each box within grid structure

export default {
  name: 'work',
  components: {
    projBox
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../styles/style.css';
</style>
