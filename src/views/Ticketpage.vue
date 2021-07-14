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
    const url = `https://vert-choucroute-22094.herokuapp.com/${movieId}`; // origin api url
    axios.get(`${url}`).then((res)=>{
        this.myMovieData = res.data;
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