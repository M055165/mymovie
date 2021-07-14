<template>
  <div id="app" ref="bg" :style="{ backgroundImage: 'url(' + myMovieData + ')' }"> 
       </div>
</template>

<style lang="scss" scoped>
    #app {
        color:white;
        height: 90vh;
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
    }
    @media screen and (max-width: 768px) {
    #app {
        width: 100%;
         height: 40vh;
    }
    }   
</style>
<script>
export default {
    props:["movieData"],
    data(){
        return {
            myMovieData:[{"img_big":"123"}]
        }
    },
    watch:{
        movieData(newV){
            this.myMovieData = newV[0].img_big;
        }
    }
}
</script>