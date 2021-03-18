<template>
    <div class="container">
        <div class="banner">
            <div class="header">
                <div class="row">
                    <div class="header_info col-md-8">
                    <i class="far fa-heart"></i>
                    <div class="info_detail">
                        <h1 class="mr-2">{{myMovieData.movie_tname}}</h1>
                        <span>({{(myMovieData.movie_ctime).split(' ')[2]}})</span>
                        <h2 class="mt-2">{{myMovieData.movie_ename}}</h2>
                        <h2 class="mt-2">R-{{myMovieData.movie_age}} | 2h 22min | {{myMovieData.movie_type}} | {{myMovieData.movie_ctime}} </h2>
                    </div>
                </div>
                <div class="header_rate col-md-4">
                   <i class="fas fa-star"></i> {{myMovieData.movie_rank}}/10
                </div>
                </div>
            </div>
            <img :src="myMovieData.img_big" alt="">
        </div>
        <div class="info">
            <hr>
            <h1 class="intro mt-3 mb-4">{{myMovieData.movie_info}}</h1>
            <h2 class="my-2">Director: <small>{{myMovieData.movie_director}}</small></h2>
            <h2 class="my-2">Writers: <small>{{myMovieData.movie_writer}}</small></h2>
            <h2 class="my-2">Stars: <small> {{myMovieData.movie_star}}</small></h2>
        </div>        
    </div>
</template>

<style lang="scss" scoped>
* {
    font-weight: bold;
    
}
 img {
        width: 80%;
    }
    .container {
        margin-top: 20px;
        margin-bottom: 60px;
        width: 100%;
        background-color: #DCDCDC;
        border-radius:60px;
        padding-bottom: 50px;
    }
    .banner {
        width: 100%;
        .header {
            padding: 20px 0;
            width: 100%;
            display: flex;
        }
    }
    .fa-heart {
        margin-right: 40px;
        font-size: 60px;
    }
    .row {
        width: 100%;
    }
    .header_info {
        display: flex;
        padding-left: 50px;
        align-items: center ;
    }
       .info_detail {
        h1 {
            font-size: 30px;
            display: inline-block;
        }
    }
    .header_rate {
        display: flex;
        align-items: center;
        font-size: 20px;
    .fa-star {
        margin-right: 10px;
        font-size: 30px;
        color:goldenrod;
    }
    }
    .info {
        
    
    }
   
    @media screen and (max-width: 768px){
        * {
            font-size: 12px;
        }
        .header_info {
            padding-left: 30px;
        }
        .header_rate {
            justify-content: flex-end;
            margin-top: 20px;
        }
    }

</style>


<script>
export default {
    props:['movieData'],
    data(){
        return {
            myMovieData:{
                movie_ctime:'abc cde def'
            }
        }
    },
    watch:{
        movieData(newValue){
            this.myMovieData = newValue;
        }
    }
}
</script>
