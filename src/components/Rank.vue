<template>
    <div class="container">
        <div class="header">
            <h1>top100</h1>
        </div>
    <table>
    <thead>
        <tr>
            <th></th>
            <th>Rank & Title</th>
            <th>IMDb Rating</th>
            <th>Your Rating	</th>
        </tr>
    </thead>
    <tbody >
      <tr v-for="(item, index) in myMovieData" :key="index">
            <td class="middle"><img :src="item.img_s1" alt=""></td>
            <td  class="middle"><router-link class="movie_name" :to="`/detail/${index+1}`" > {{item.id}}. {{item.movie_tname}}<span>({{(item.movie_ctime).split(' ')[2]}})</span></router-link></td>
            <td  class="middle"><i class="fas fa-star "></i>&nbsp;{{item.movie_rank}}</td>
            <td  class="middle"><i class="far fa-star empty"></i></td>
        </tr>
        
    </tbody>
</table>
    </div>
</template>

<style lang="scss" scoped>
   
    .container {
        margin-top: 20px;
        margin-bottom:100px;
        border-radius: 40px;
        background-color: #DCDCDC;
    }
    .header {
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        h1 {
            letter-spacing: 3.5px;
            color:black;
            font-size: 30px;
            font-weight: bold;
        }
    }
    table{
        width:100%;
    }
   tbody tr:nth-child(2n+1){
       background-color:#f6f6f5;
       border: #fff 1px solid;
   }
    .middle {
       color:black;
        vertical-align: middle;
    }
    .fa-star {
        color: gold;
    }
    .empty {
        color:gray;
    }
    a,router-link{
        text-decoration: none!important;
    }
    .movie_name {
        max-lines: 1;
        white-space: nowrap;
        text-overflow: ellipse;
    }
    img {
        width: 70px;
        height: 80px;
        border-radius: 10px;
    }
    
</style>

<script>
export default {
    props:['movieData'],
    data(){
        return {
            myMovieData:''
        }
    },
    watch:{
        movieData(newValue){
            this.myMovieData = newValue;
        }
    }
}
</script>