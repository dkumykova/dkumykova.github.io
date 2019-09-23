<template>
 
 <div id="workPage">
    <!-- <p>testing testing</p> -->
    <projBox title="Software Developer Intern"  subtitle="Tyler Technologies" description="testing testing"></projBox>
    <projBox title="Software Developer" subtitle="UXDM Lab" description="stuff"></projBox>
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
