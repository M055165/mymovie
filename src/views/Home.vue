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
  const cors = 'https://cors-anywhere.herokuapp.com/'; // use cors-anywhere to fetch api data
  const url = 'https://boiling-everglades-57930.herokuapp.com/comming/all'; // origin api url

     axios.get(`${cors}${url}`).then(res => {
       this.commingData =res.data
})
  
     },
  getRunningData(){
     const cors = 'https://cors-anywhere.herokuapp.com/'; // use cors-anywhere to fetch api data
      const url = 'https://boiling-everglades-57930.herokuapp.com/running/all'; // origin api url

     axios.get(`${cors}${url}`).then(res => {
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

