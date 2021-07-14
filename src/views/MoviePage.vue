<template>
<div id=#app>
   <navbar></navbar>
   <moviedetail :movieData="myMovieData[0]"></moviedetail>
   <myfooter></myfooter>
   </div>
  
</template>

<script>
import navbar from '../components/navbar'
import moviedetail from '../components/Movedetail'
import myfooter from '../components/Footer'
import axios from 'axios'

export default {
  components: { navbar,moviedetail,myfooter },
  data(){
    return {
      myMovieData:''
    }
  },
  methods:{
    getMovieData(){
    let movieId = this.$route.params.movieId ;
    const url = `https://vert-choucroute-22094.herokuapp.com/running/${movieId}`; // origin api url
    axios.get(`${url}`).then((res)=>{
        this.myMovieData = res.data;
        console.log("成功獲取資料123")
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
   
</style>

