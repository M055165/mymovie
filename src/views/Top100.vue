<template>
<div class="app">
  <navbar></navbar>
 <rank :movieData='runningData'></rank>
 <myfooter></myfooter>
</div>
 
</template>

<script>
import navbar from '../components/navbar'
import rank from '../components/Rank'
import myfooter from '../components/Footer'
import axios from 'axios';

export default {
  components: {navbar,rank,myfooter},
  data(){
    return {
      runningData:{},
      commingData:{}
    }
  },
  methods:{
getCommingData(){
        let api = '/api/comming/all'
          const cors = 'https://cors-anywhere.herokuapp.com/'; // use cors-anywhere to fetch api data
          const url = 'https://boiling-everglades-57930.herokuapp.com/comming/all'; // origin api url
        axios.get(`${cors}${url}`).then((res)=>{
        this.commingData = res.data;
    })
  },
  getRunningData(){
         let api = '/api/running/all'
         const cors = 'https://cors-anywhere.herokuapp.com/'; // use cors-anywhere to fetch api data
          const url = 'https://boiling-everglades-57930.herokuapp.com/running/all'; // origin api url
        axios.get(`${cors}${url}`).then((res)=>{
        this.runningData = res.data;
    })
  },
  },
mounted(){
  this.getCommingData()
    this.getRunningData()

}
  
}
</script>

<style scoped>
body {
  background-color: black;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color:white;
}
</style>