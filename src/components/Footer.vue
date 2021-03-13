<template>
  <div class="app">
      <div class="container">
<div class="icon-bar">
     <div>
          <a href=""><i class="fab fa-facebook"></i></a>
     </div>
     <div>
         <a href=""><i class="fab fa-instagram"></i></a>
         
     </div>
     <div>
         <a href=""><i class="fab fa-twitch"></i></a>
         
     </div>
     <div>
         <a href=""><i class="fab fa-twitter"></i></a>
         
     </div>
     <div>
         <a href=""><i class="fab fa-youtube"></i></a>
         
     </div>
   </div>
   <div class="footer-list">
       <ul>
           <li><a href="javascript:;">Help</a></li>
           <li><a href="javascript:;">Site Index</a></li>
           <li><a href="javascript:;">IMDBPro</a></li>
           <li><a href="javascript:;">Box Office Mojo</a></li>
           <li><a href="javascript:;">IMDB Developer</a></li>
           <li><a href="javascript:;">Press Room</a></li>
           <li><a href="javascript:;">Advertising</a></li>
           <li><a href="javascript:;">Jobs</a></li>
            <li><a href="javascript:;">Conditions of Use</a></li>
           <li><a href="javascript:;">Privacy Policy</a></li>
           <li><a href="javascript:;">Interest-Based Ads</a></li>
       </ul>
   </div>
   <div class="copyright mt-3 mb-3">
       <i class="far fa-copyright"></i>
       <small>2021 <small>&nbsp;By&nbsp;</small>&nbsp;Eddie,Tsai </small>
   </div>
      </div>
   
  </div>
</template>

<script>
export default {
  data() {
    return {  
      
    };
  },

  created() {
    
  },
};
</script>
<style lang="scss" scoped>

* {
    box-sizing: border-box;
}
 .icon-bar {
   display: flex;
   justify-content: center;
   height: 48px;
   margin: 16px 0;
   //background-color: green;
   align-items: center;
 }
 .icon-bar a {
     margin: 0 20px;
     font-size: 30px;
     padding:10px 15px;
     color:white;
     &:hover {
         background-color: rgba($color: grey, $alpha: 0.3);
         border-radius: 50%;
         
     }
 }

@media screen and (max-width: 768px) {
    .icon-bar a {
        margin: 0;
    }
}

//footer-list
    .footer-list {
        display: flex;
        justify-content: space-evenly;
        align-content: center;
    }
    .footer-list li{
        height: 40px;
        padding: 8px;
        display: inline-block;
    }
    .footer-list li a {
        color:white;
        font-size: 18px;
    }
    //copyright
    .copyright{
        color: white;
    }
</style>