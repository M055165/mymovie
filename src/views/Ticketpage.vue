<template>
    <div id="app">
        <navbar></navbar>
        <banner :movieData= myMovieData></banner>
        <ticket :movieData = myMovieData[0]></ticket>
        <myfooter></myfooter>
    </div>
</template>

<script>
import navbar from '../components/navbar';
import myfooter from '../components/Footer'
import ticket from '../components/Ticket'
import banner from '../components/Banner'
import axios from 'axios'
export default {
    components:{
        navbar,myfooter,ticket,banner
    },
    data(){
    return {
      myMovieData:''
    }
  },
  methods:{
    getMovieData(){
    let movieId = this.$route.params.movieId ;
    let api = `http://192.168.43.145:8800/running/${movieId+1}`
    axios.get(api).then((res)=>{
        this.myMovieData = res.data;
        console.log("成功獲取資料booking")
        console.log(this.myMovieData)
    })
  }
  },
  mounted(){
    this.getMovieData();
  }
}
</script>
<style lang="scss" scoped>
    body {
  background-color: black!important;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>