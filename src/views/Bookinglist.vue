<template >
<div id="app">
<navbar></navbar>
<moviedate :movieData="runningData"></moviedate>
<myfooter></myfooter>
</div>
</template>

<script>
import navbar from '../components/navbar'
import myfooter from '../components/Footer'
import moviedate from '../components/Moviedate'
import axios from 'axios';
export default {
    components:{
        navbar,
        myfooter,
        moviedate    
},
data(){
    return {
      runningData:{},
    }
  },
  methods:{
  getRunningData(){
        let api = 'http://192.168.43.145:8800/running/all'
        axios.get(api).then((res)=>{
        this.runningData = res.data;
    })
  },
  },
mounted(){
    this.getRunningData()
}
}
</script>
<style lang="scss" scoped>
    * {
        color:white;
    }
</style>