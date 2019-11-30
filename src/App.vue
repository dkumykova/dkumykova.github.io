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
  <h2>Welcome to my page - how did you end up here lol</h2>

  <h3>Maybe a small blurb here about me?</h3>

  <h3>And some highlight video footage for karen + forest fighters and demo or something</h3>
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
