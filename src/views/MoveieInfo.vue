<template>
<div id="app">
 <navbar></navbar>
 <banner :movieData='movieData'></banner>
<movietypechoose :movieData='movieData[0]'></movietypechoose>
<detail :movieData='movieData[0]'></detail>
<cast :movieData='movieData[0]'></cast>
 <myfooter></myfooter>
</div>
 
</template>

<script>
import navbar from '../components/navbar';
import banner from '../components/Banner';
import movietypechoose from '../components/ＭovieTypeChoose'
import detail from '../components/Details'
import cast from '../components/Cast'
import myfooter from '../components/Footer'
import axios from 'axios';

export default {
  data(){
   return {
     movieData:{}
   }
 },
components: { navbar, banner,movietypechoose,detail,cast,myfooter},
methods:{
  getMovieData(){
    let movieType = this.$route.name;
    let movieId = this.$route.params.movieId ;
    let api = `/api/${movieType}/${movieId}`
    axios.get(api).then((res)=>{
        this.movieData = res.data;
        console.log("成功獲取資料")
        console.log(this.movieData)
    })
  }
},
 mounted(){
  this.getMovieData()
 },
}
</script>

<style scoped >
* {
  margin: 0;
  padding: 0;
}
#app {
  background-color: black;
}

</style>

