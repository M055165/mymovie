<template>
<div class="app">
 <navbar></navbar>
 <carousel :movieData="runningData"></carousel>
 <commingsoon :movieData="runningData" type="running">Running</commingsoon>
 <commingsoon :movieData="commingData" type="comming">comming</commingsoon>
 <myfooter></myfooter>
</div>
 
</template>

<script>
import navbar from '../components/navbar'
import carousel from '../components/Carousel'
import commingsoon from '../components/Commingsoon';
import myfooter from '../components/Footer'
import axios from 'axios';
export default { 
  data(){
    return {
      runningData:{},
      commingData:{}
    }
  },
  components: { navbar, carousel,commingsoon,myfooter},
  methods:{
getCommingData(){
     axios.get('/api/comming/all').then(res => {
       this.commingData =res.data
})
  
     },
  getRunningData(){
     axios.get('/api/running/all').then(res => {
       this.runningData =res.data
})
  },
  },
mounted(){
  this.getCommingData()
    this.getRunningData()

}
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

