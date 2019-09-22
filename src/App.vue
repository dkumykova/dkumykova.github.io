<template>
  <div id="app">
    
    <div id="myNav">
      <ul>
          <li id="testID" v-on:click="showMainPage">Home</li>
          <li id="testID" v-on:click="showAboutPage">Me</li>
          <li id="testID" v-on:click="showWorkPage">Project/Work</li>
          <li>
            <img id="profileImg" src="./images/profile_photo_1.png" width="80" height="90">
          </li>
          
      </ul>
          
    </div>
    

    <div id="aboutPage" v-show="showAbout">
      <aboutMe></aboutMe>
    </div>
    <div id="workStuffs" v-show="showWork">
      <work></work>
    </div>
    
    <myFooter></myFooter>

  </div>
  
</template>

<script>
import aboutMe from './pages/aboutPage.vue'
import myFooter from './components/footerComp.vue'
import work from './pages/workPage.vue'


export default {
  name: 'app',
  components: {
    aboutMe,
    myFooter,
    work
  },
  data: function() {
    return {
      showAbout: false,
      showWork: false,
      showMain: true
    }
  },
  methods: {
    showAboutPage: function(){
      this.showAbout = true;
      this.showWork = false;
      this.showMain = false;
    },
    showWorkPage: function(){
      this.showWork = true;
      this.showMain = false;
      this.showAbout = false;
    },
    showMainPage: function(){
      this.showMain = true;
      this.showWork = false;
      this.showAbout = false;
      
    }
  }
}
</script>


<style>
@import './styles/style.css';
</style>
