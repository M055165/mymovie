<template>
    <div id="app">
       <div class="container mt-5">
           <div class="header">
               <div class="movie-info">
                   <h1>{{myMovieData.movie_tname}}</h1>
                   <h5 class="mt-2">{{myMovieData.movie_long}} min</h5>
                   <h5>{{myMovieData.movie_type}}</h5>
               </div>
               <div class="imdb-rate">
                   <h1>IMDB {{myMovieData.movie_rank}}</h1>
               </div>
           </div>
           <div class="row mt-5">
            <div class="left col-md-12 col-lg-3 ">
                <div class="box">
                     <img :src="myMovieData.img_s1" alt="">
                </div>
                <ul class="type-list mt-3">
                    <li :class="{ yes: myMovieData['2d_t'] !== null }">2D <i class="far fa-check-circle" :class="{ dnone: myMovieData['3d_t'] == null }"></i></li>
                    <li :class="{ yes: myMovieData['3d_t'] !== null }">3D <i class="far fa-check-circle" :class="{ dnone: myMovieData['3d_t'] == null }"></i></li>
                    <li :class="{ yes: myMovieData['imax_t'] !== null }">IMAX <i class="far fa-check-circle" :class="{ dnone: myMovieData['imax_t'] !== null }"></i></li>
                    <li :class="{ yes: myMovieData['imax3d_t'] !== null }">IMAX 3D <i class="far fa-check-circle" :class="{ dnone: myMovieData['imax3d_t'] !== null }"></i></li>
                    <li :class="{ yes: myMovieData['cinema4d_t'] !== null }">CINEMA 4D <i class="far fa-check-circle" :class="{ dnone: myMovieData['cinema4d_t'] == null }"></i></li>
                </ul>
            </div>
            <div class="right  col-lg-9">
                <div class="date">
                    <ul class="date-list">
                        <li>
                            <a href="javascript:;">
                            <h3>Ｍonday</h3>
                            <h2>17</h2>
                            <h3>Feb</h3>
                            </a>
                        </li>
                         <li>
                            <a href="javascript:;">
                            <h3>Tuesday</h3>
                            <h2>18</h2>
                            <h3>Feb</h3>
                            </a>
                        </li>
                         <li>
                             <a href="javascript:;">
                            <h3>Wednesday</h3>
                            <h2>19</h2>
                            <h3>Feb</h3>
                            </a>
                        </li>
                         <li>
                             <a href="javascript:;">
                            <h3>Thursday</h3>
                            <h2>20</h2>
                            <h3>Feb</h3>
                            </a>
                        </li>
                         <li>
                             <a href="javascript:;">
                            <h3>Friday</h3>
                            <h2>21</h2>
                            <h3>Feb</h3>
                            </a>
                        </li>
                         <li>
                             <a href="javascript:;">
                            <h3>Saturday</h3>
                            <h2>22</h2>
                            <h3>Feb</h3>
                            </a>
                        </li>
                    </ul>
                    <ul class="time-list mt-3">
                        <li>
                            <small>2D:</small>
                            <div class="time-block" v-for="(item,index) in t_2d" :key="index">
                                <p>{{item}}</p>
                            </div>
                            
                        </li>
                      <li>
                            <small>3D:</small>
                            <div class="time-block" v-for="(item,index) in t_3d" :key="index">
                                <p>{{item}}</p>
                            </div>
                            
                        </li>
                        <li>
                            <small>IMAX:</small>
                            <div class="time-block" v-for="(item,index) in t_imax" :key="index">
                                <p>{{item}}</p>
                            </div>
                            
                        </li>
                        <li>
                            <small>IMAX 3D:</small>
                            <div class="time-block" v-for="(item,index) in t_imax3d" :key="index">
                                <p>{{item}}</p>
                            </div>
                            
                        </li>
                        <li>
                            <small>CINEMA 4D:</small>
                            <div class="time-block" v-for="(item,index) in t_cinema4d" :key="index">
                                <p>{{item}}</p>
                            </div>
                            
                        </li>
                    </ul>
                </div>
            </div>
           </div>
           
       </div>
    </div>
</template>



<style lang="scss" scoped >
.dnone {
    display: none!important;
}

#app {
    color:white;
    font-weight: bold;
}
p {
    color:black;
}
small {
    display: none!important;
}

a {
    cursor: pointer;
    text-decoration: none!important;
    list-style:none;
    color:white;
    &:visited {
        color:white;
    }
     &:active {
        color:white;
    }
    &:hover{
        color:red;
    }
}
   .header {
       display: flex;
       color:white;
       justify-content: space-between;
       flex-direction: row;
   }
   small {
       font-size: 14px;
       display: block;
       color:grey;
   }
   .movie-info {
       display: flex;
       flex-direction: column;
       align-items: flex-start;
       h5 {
           margin-top: 2px;
           font-size: 16px;
           color:#dcdcdc;
           opacity: 0.4;
       }
   }

//left
.left{
    display: flex;
    flex-direction: column;
    align-items: center;

}
.left .box{
    width: 200px;
    height: 300px;
}
.box img {
    max-width:100%; 
    height:auto;
}

.type-list li {
    display: flex;
    padding:0 10px 0 30px;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    height: 40px;
    margin: 20px 0;
    background-color: rgba($color: grey, $alpha: 0.4);
    border-radius: 5px;
    &.yes {
        background-color: red;
    }
}


@media screen and (max-width: 768px){

li {
    width: 80vw;
}

}

//right

.date {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.date-list  {
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

h3{
    font-size: 25px;
}
h2 {
    font-size: 60px;
}


.time-list {
width: 100%;
}
.time-list li{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 10px 0;
    width: 100%;
    height: 52px;
    padding-bottom: 0px;
    border-bottom:3px solid rgba($color: grey, $alpha: 0.15);
}
.time-list .time-block {
    width: 18.6%;
    height: 40px;
    background-color: white;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
}
@media screen and (max-width: 768px){

.right {
    
}
.date-list {
    height: 150px;
}
h3 {
    font-size:14px;
}
h2 {
    font-size:38px;
}
.time-list li{
    justify-content: space-between;
    margin-left: 0px;
    padding-right: 13px;
}
small {
    display: block!important;
}
p {
    font-size: 14px;
}
}
@media screen and (max-width: 350px){

.right {
    
}
.date-list {
    height: 150px;
}
h3 {
    max-lines: 1;
    white-space: nowrap;
    overflow: hidden;
    font-size:5px;
}
h2 {
    font-size:30px;
}
.time-list li{
    justify-content: space-between;
    margin-left: 0px;
    padding-right: 13px;
}
small {
    font-size: 10px;
    display: block;
}
p {
    font-size: 10px;
}
}
</style>

<script>
export default {
    props:["movieData"],
    data(){
        return {
            myMovieData:'',
            t_2d:[],
            t_3d:[],
            t_imax:[],
            t_imax3d:[],
            t_cinema4d:[],
        }
    },
    watch:{
        movieData(newV){
            this.myMovieData = newV;
            if(this.myMovieData['2d_t'] !== null) {
                this.t_2d = this.myMovieData['2d_t'].split(',');
            }
             if(this.myMovieData['3d_t'] !== null) {
                this.t_3d = this.myMovieData['3d_t'].split(',');
            }
             if(this.myMovieData['imax_t'] !== null) {
                this.t_imax = this.myMovieData['imax_t'].split(',');
            }
             if(this.myMovieData['imax3d_t'] !== null) {
                this.t_imax3d = this.myMovieData['imax3d_t'].split(',');
            }
             if(this.myMovieData['cinema4d_t'] !== null) {
                this.t_cinema4d = this.myMovieData['cinema4d_t'].split(',');
            }
            console.log(this.t_2d)
            console.log(this.t_3d)
            console.log(this.t_imax)
            console.log(this.t_imax3d)
            console.log(this.t_cinema4d)
        }
    }
}
</script>