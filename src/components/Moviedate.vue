<template >
    <div class="container">
        <div class="header">
            SCHEDULE
        </div>
        <div class="type">
            <ul class="typelist">
                <li :class="{red:movietype==0}" @click="changeType(0)">All frames</li>
                <li :class="{red:movietype==1}" @click="changeType(1)" >2D</li>
                <li :class="{red:movietype==2}" @click="changeType(2)">3D</li>
                <li :class="{red:movietype==3}" @click="changeType(3)">IMAX</li>
                <li :class="{red:movietype==4}" @click="changeType(4)">IMAX 3D</li>
                <li :class="{red:movietype==5}" @click="changeType(5)">CINEMA 4D</li>
            </ul>
        </div>
        <ul class="movielist">
            <li class="movielist_item" v-for="(item,index) in tempData" :key="index">
                <div class="row">
                <div class="movie_info col-md-4">
                    <img :src="item.img_s1" alt="">
                    <ul class="movie_info_type" v-if="movietype ==0">
                        <li :class="{'d-none':!data[index]['flag_2d']}">2D</li>
                        <li :class="{'d-none':!data[index]['flag_3d']}">3D</li>
                        <li :class="{'d-none':!data[index]['flag_imax']}">IMAX</li>
                        <li :class="{'d-none':!data[index]['flag_imax3d']}">IMAX 3D</li>
                        <li :class="{'d-none':!data[index]['flag_cinema4d']}">CINEMA 4D</li>
                    </ul>
                     <ul class="movie_info_type" v-else>
                        <li :class="{'d-none':movietype!==1}">2D</li>
                        <li :class="{'d-none':movietype!==2}">3D</li>
                        <li :class="{'d-none':movietype!==3}">IMAX</li>
                        <li :class="{'d-none':movietype!==4}">IMAX 3D</li>
                        <li :class="{'d-none':movietype!==5}">CINEMA 4D</li>
                    </ul>
                </div>
                <div class="movie_detail col-md-8">
                    <div class="movie_date">
                        <div class="movie_header">
                            <div class="movie_name">
                                <h1>{{item.movie_tname}}</h1>
                                <h2>IMDB {{item.movie_rank}}</h2>
                            </div>
                            <div class="movie_type">
                                <small>{{item.movie_long}} min | {{item.movie_type}}</small>
                            </div>
                            <div class="movie_day">
                                <div class="date">
                                    <ul>
                                    <li>
                                        <h2>Monday</h2>
                                        <h1>17</h1>
                                        <small>February</small>
                                        </li>
                                       <li>
                                        <h2>Tuesday</h2>
                                        <h1>18</h1>
                                        <small>February</small>
                                        </li>
                                        <li>
                                        <h2>Wednesday</h2>
                                        <h1>19</h1>
                                        <small>February</small>
                                        </li>
                                        <li>
                                        <h2>Thursday</h2>
                                        <h1>20</h1>
                                        <small>February</small>
                                        </li>
                                        <li>
                                        <h2>Friday</h2>
                                        <h1>21</h1>
                                        <small>February</small>
                                        </li>
                                    </ul>
                                </div>
                              <ul class="time">
                                  <li v-if="item['2d_t']">
                                      <ul>
                                          <i class="type_title">2D</i>
                                          <li v-for="(value,index) in item['2d_t'].split(',')" :key="index">
                                              {{value}}
                                          </li>
                                      </ul>
                                  </li>
                                   <li v-if="item['3d_t']">
                                      <ul>
                                         <i class="type_title">3D</i>
                                          <li v-for="(value,index) in item['3d_t'].split(',')" :key="index">
                                              {{value}}
                                          </li>
                                      </ul>
                                  </li>
                                   <li v-if="item['imax_t']">
                                      <ul>
                                          <i class="type_title">IMAX</i>
                                          <li v-for="(value,index) in item['imax_t'].split(',')" :key="index">
                                              {{value}}
                                          </li>
                                      </ul>
                                  </li>
                                   <li v-if="item['imax3d_t']">
                                      <ul>
                                         <i class="type_title">IMAX 3D</i>
                                          <li v-for="(value,index) in item['imax3d_t'].split(',')" :key="index">
                                              {{value}}
                                          </li>
                                      </ul>
                                  </li>
                                   <li v-if="item['cinema4d_t']">
                                      <ul>
                                          <i class="type_title">CINEMA 4D</i>
                                          <li v-for="(value,index) in item['cinema4d_t'].split(',')" :key="index">
                                              {{value}}
                                          </li>
                                      </ul>
                                  </li>
                              </ul>
                                    <div class="gotobuy">
                                        <p @click="goToBook(index)">點我去訂票</p>
                                        <p @click="goToBook(index)"> <i class="fas fa-long-arrow-alt-right goto_arrow"></i></p>
                                  </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped> 
    .d-none {
        display: none!important;
    }
    .fontred{
        color:red;
    }
    .container {
        font-weight: bold;
        margin-top: 40px;
        .header {
            height: 50px;
            font-weight: bold;
            display: flex;
            align-items: center;
            border-bottom: 1px solid red;
        }
        .type {
            margin-top: 30px;
             width: 100%;
            ul {
                display: flex;
                justify-content: space-around;
                li {
                    width:12%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-right: 20px;
                    background-color: gray;
                    height: 40px;
                    border-radius: 10px;
                    margin-bottom: 10px;
                }
            }
            .red {
                background-color: red;
            }
        }
        .movielist {
               margin:70px 0;
               list-style: none;
               display: flex;
               flex-direction: column;
               justify-content: center;
               .movielist_item {
                   display: flex;
                   justify-content: center;
                   margin-bottom: 220px;
                   .row {
                       width: 100%;
                       text-align: left;
                   }
                   .movie_info {
                       display: flex;
                       flex-direction: column;
                       align-items: center;
                       img {
                       width: 200px;
                       height: 250px;
                   }
                   .movie_info_type {
                       display: flex;
                       flex-direction: column;
                       align-items: flex-start;
                       margin-top: 30px;
                       li {
                        height: 30px;
                        margin-top: 5px;
                        margin-bottom:5px;
                       }
                   }
                   }
                   .movie_detail {
                       padding-top:20px;
                       .movie_date {
                           height: 250px;
                           .movie_header {
                               .movie_name {
                                font-size: 22px;
                                display: flex;
                                justify-content: space-between;
                               }
                               .movie_type {
                                   small {
                                       color:#DCDCDC;
                                       font-size: 10px;
                                       opacity: 0.5;
                                   }
                               }
                               .movie_day {
                                   margin-top: 30px;
                                   height: 100px;
                                   border-bottom: 4px solid gray;
                                   .date {
                                       ul {
                                           display: flex;
                                           justify-content: space-between;
                                           li {
                                               opacity: 0.8;
                                               display: flex;
                                               flex-direction: column;
                                               align-items: center;
                                               h2 {
                                                   font-size: 18px;
                                               }
                                               h1 {
                                                   font-size: 50px;
                                               }
                                               small {
                                                   font-size: 16px;
                                               }
                                               
                                           }
                                       }
                                   }
                                   .time {
                                     display: flex;
                                     flex-direction: column;
                                     margin-top:100px;
                                        ul {
                                            display: flex;
                                            justify-content: space-between;
                                            align-items: center;
                                            .type-title {
                                                display: none;
                                            }
                                            li {
                                                background-color: #dcdcdc;
                                                color: black;
                                                border-radius: 10px;
                                                display: flex;
                                                justify-content: center;
                                                align-items: center;
                                                width: 100px;
                                                height: 30px;
                                                margin: 5px;
                                            }
                                        }
                                   }
                                   .gotobuy {
                                       width: 100%;
                                       height: 80px;
                                       display: flex;
                                       justify-content: flex-end;
                                       align-items: center;
                                       letter-spacing: 1.2px;
                                       margin-top: 20px;
                                       p {
                                           font-size: 18px;
                                           cursor: pointer;
                                       }
                                       .goto_arrow {
                                           margin-left: 3px;
                                           color:red;
                                           font-size: 40px;
                                           cursor: pointer;
                                       }
                                   }
                               }
                           }
                       }
                   }
               }
        }
    }
    .type_title {
        display: none;
    }
    @media screen and(max-width: 768px) {
        .container {
            .type {
            ul {
                flex-wrap: wrap;
                li {
                    width:25%;
                }
            }
        }
        .movielist {
            .movielist_item {
                .movie_info {
                    .movie_info_type {
                        display: none;
                    }
                }
                .movie_detail {
                    .movie_date {
                        .movie_header {
                            .movie_day {
                                margin-top: 20px;
                                height: 60px;
                                .date {
                                    ul {
                                    li {
                                h2 {
                                    font-size: 10px;
                                }
                                h1 {
                                    font-size: 20px;
                                }
                                small {
                                    font-size: 10px;
                                }
                                        }
                                    }
                                     
                                }
                                .time {
                                    margin-top:50px;
                                    ul {
                                        .type_title {
                                            width: 100px;
                                            text-align: left;
                                            font-size: 14px;
                                            display: flex;
                                            justify-content: flex-start;
                                        }
                                        li {
                                            font-size: 13px;
                                            width: 20%;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        }
       
    }
    .d-none{
        display: none!important;
    }
</style>

<script>
import _ from 'lodash';
export default {
    props:['movieData'],
    data(){
        return {
            myMovieData:{
                
            },
            data:[],
            movieTime:[],
            movietype:0,
            tempData:[]
        }
        },
    methods:{
        goToBook(index){
            if(sessionStorage.getItem('login')=='true'){
                this.$router.push(`/booking/${index+1}`)
            }
            else {
                alert("請先登入")
                this.$router.push(`/login`)
            }
        },
        checkTime(myMovieData){
            myMovieData.forEach((item)=>{
                let flag_2d = false;
                let flag_3d = false;
                let flag_imax = false;
                let flag_imax3d = false;
                let flag_cinema4d = false;
                if(item['2d_t']!==null){
                    flag_2d = true
                }
                if(item['3d_t']!==null){
                    flag_3d = true
                }
                if(item['imax_t']!==null){
                    flag_imax = true
                }
                if(item['imax3d_t']!==null){
                    flag_imax3d = true
                }
                if(item['cinema4d_t']!==null){
                    flag_cinema4d = true
                }
                this.data.push({
                    flag_2d,flag_3d,flag_imax,flag_imax3d,flag_cinema4d
                })
            })
                console.log(this.data)
        },
        changeType(index){
            this.movietype = index
            this.tempData = _.cloneDeep(this.myMovieData);
            if(this.movietype ==0){
            this.tempData = _.cloneDeep(this.myMovieData);
            }
            if(this.movietype ==1){
               this.tempData.forEach((item)=>{
                    console.log(item['2d_t'])
                    item['3d_t'] = null
                    item['imax_t'] = null
                    item['imax3d_t'] = null
                    item['cinema4d_t'] = null
               })
            }
             if(this.movietype ==2){
               this.tempData.forEach((item)=>{
                    item['2d_t'] = null
                    item['imax_t'] = null
                    item['imax3d_t'] = null
                    item['cinema4d_t'] = null
               })
            }
            if(this.movietype == 3){
               this.tempData.forEach((item)=>{
                    item['2d_t'] = null
                    item['3d_t'] = null
                    item['imax3d_t'] = null
                    item['cinema4d_t'] = null
               })
            }
           if(this.movietype == 4){
               this.tempData.forEach((item)=>{
                    item['2d_t'] = null
                    item['imax_t'] = null
                    item['3d_t'] = null
                    item['cinema4d_t'] = null
                    console.log(item)
               })
            }
            if(this.movietype == 5){
               this.tempData.forEach((item)=>{
                    item['2d_t'] = null
                    item['imax_t'] = null
                    item['imax3d_t'] = null
                    item['3d_t'] = null
               })
            }
        },
        
    },
    watch:{
        movieData(newValue){
            this.myMovieData = newValue;
            this.checkTime(this.myMovieData)
            this.changeType(0);
        }
    },
}
</script>