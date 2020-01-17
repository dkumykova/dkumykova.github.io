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
    
  </div>
  <div class="OldProjects">
    <h3>Older Projects:</h3>
  
  <div class="video-grid">

    <div class="boidVid">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/4rx7Z99PztU?start=80" 
      frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen>
      </iframe>
    </div>
    
    <div class="fatalVid">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/tGfXXczZ4Js"
      frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen>
      </iframe>
     </div>
  </div>
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
