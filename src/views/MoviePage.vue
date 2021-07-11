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
     const cors = 'https://cors-anywhere.herokuapp.com/'; // use cors-anywhere to fetch api data
    const url = `https://boiling-everglades-57930.herokuapp.com/running/${movieId}`; // origin api url
    axios.get(`${cors}${url}`).then((res)=>{
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

