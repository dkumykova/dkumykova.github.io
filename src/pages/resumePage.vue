<template>
 
 <div id="resumePage">
     <!-- <div id="downloadResumeButton">
        <form method="get" action="../images/resume.pdf">
          <button type="submit">Download!</button>
        </form>
        <br><br>
         <a href="../images/resume.pdf">example</a>
        <iframe src="../images/resume.pdf" width="100%" height="500px">
    </iframe> -->
     
     <div id="embeddedResume">
         <!-- <img src="../images/resume.pdf" width="800px" height="1000px"> -->
        <iframe src="https://docs.google.com/document/d/e/2PACX-1vSuf7rry0ZI7hufHn9V_83tidC0aPPV6W7xoeSSEEKh-E54O5_Qsbuym5eesxTqzWTaib338ml0mtYU/pub?embedded=true"
        height="1000px" width="60%"></iframe>
     </div>
   
 </div>

  
</template>
// need to include option to draft email through gmail or outlook or something here

<script>
export default {
  name: 'resume',
  methods:{
    
  }

}

</script>

<style scoped>
@import '../styles/style.css';

</style>
