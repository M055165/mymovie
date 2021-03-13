<template>
<div class="app">
 <navbar></navbar>
 <carousel></carousel>
 <commingsoon></commingsoon>
 <playing></playing>
 <myfooter></myfooter>
</div>
 
</template>

<script>
import navbar from '../components/navbar'
import carousel from '../components/Carousel'
import commingsoon from '../components/Commingsoon';
import playing from '../components/Playing'
import myfooter from '../components/Footer'
export default {
  components: { navbar, carousel,commingsoon,playing,myfooter},
  
}
</script>

<style >
body {
  background-color: black!important;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>