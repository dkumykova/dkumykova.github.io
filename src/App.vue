<template>
  <div id="app">
    
    <div id="myNav">
      <ul>
          <li id="testID" v-on:click="showAboutPage">About</li>
          <li id="testID" v-on:click="showResumePage">Resume</li>
          <li id="testID" v-on:click="showWorkPage">Projects</li>
          <li id="testID" v-on:click="showMainPage">Home</li>
          <div >
            <img id="profileImg" src="./images/profile_photo_1.png" width="60" height="70" cursor="pointer">
          </div>
      </ul>
    </div>
    
<div id="myContent">
    <div id="aboutPage" v-show="showAbout">
      <aboutMe></aboutMe>
    </div>
    <div id="workStuffs" v-show="showWork">
      <work></work>
    </div>
    <div id="resumePage" v-show="showResume">
      <resume></resume>
    </div>
</div>

<div id="mainPage" v-show="showMain">
  <div class="intro">
  <h2>Hi! Welcome to my little project hub. Feel free to take a look around, check out what I've done and what I'm working on right now!</h2>
  <h3>If you want to chat about projects, work, games, or really anything, head over to my about page for contact details!</h3>
  </div>
  <div class="CurrentProjects">

  <h3>Current Projects:</h3>
   <video width="320" height="240" controls>
    <source src="https://www.youtube.com/watch?v=4rx7Z99PztU&feature=youtu.be" type="video/mp4">
    Your browser does not support the video tag.
  </video> 
  </div>
  <div class="OldProjects">
  <h3>Older Projects:</h3>
  </div>
</div>
    
    <myFooter></myFooter>

  </div>
  
</template>

<script>
import aboutMe from './pages/aboutPage.vue'
import myFooter from './components/footerComp.vue'
import work from './pages/workPage.vue'
import resume from './pages/resumePage.vue'


export default {
  name: 'app',
  components: {
    aboutMe,
    myFooter,
    work,
    resume
  },
  data: function() {
    return {
      showAbout: false,
      showWork: false,
      showMain: true,
      showResume: false
    }
  },
  methods: {
    showAboutPage: function(){
      this.showAbout = true;
      this.showWork = false;
      this.showMain = false;
      this.showResume = false;
    },
    showWorkPage: function(){
      this.showWork = true;
      this.showMain = false;
      this.showAbout = false;
      this.showResume = false;
    },
    showMainPage: function(){
      this.showMain = true;
      this.showWork = false;
      this.showAbout = false;
      this.showResume = false;
    },
    showResumePage: function(){
      this.showResume = true;
      this.showWork = false;
      this.showAbout = false;
      this.showMain = false;
    }
  }
}
</script>


<style>
@import './styles/style.css';
</style>
