<template>
    <div id="app">
       <div class="container mt-5">
           <div class="header">
               <div class="movie-info">
                   <h3>My Hero Scool</h3>
                   <small class="mt-2">120 min</small>
                   <small>Adventure</small>
               </div>
               <div class="imdb-rate">
                   <h3>IMDB 8.5</h3>
               </div>
           </div>
           <div class="row mt-5">
            <div class="left col-md-12 col-lg-3 ">
                <div class="box">
                     <img src="https://img.ruten.com.tw/s2/7/b3/9c/21712580001692_221.jpg" alt="">
                </div>
                <ul class="type-list mt-3">
                    <li class="yes">2D<i class="far fa-check-circle"></i></li>
                    <li>3D</li>
                    <li>IMAX</li>
                    <li class="yes">IMAX 3D<i class="far fa-check-circle"></i></li>
                    <li class="yes">CINEMA 4D<i class="far fa-check-circle"></i></li>
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
                            <div class="time-block">
                                <p>11:30 am</p>
                            </div>
                            <div class="time-block">
                                <p>5:00 am</p>
                            </div>
                            <div class="time-block">
                                <p>7:45 pm</p>
                            </div>
                             <div class="time-block">
                                 <p>10:30 pm</p>
                             </div>
                        </li>
                        <li>
                             <small>3D:</small>
                             <div class="time-block">
                                <p>5:00 am</p>
                            </div>
                            <div class="time-block">
                                <p>7:00 pm</p>
                            </div>
                        </li>
                        <li>
                             <small>IMAX:</small>
                             <div class="time-block">
                                <p>5:00 am</p>
                            </div>
                             <div class="time-block">
                                <p>7:45 pm</p>
                            </div>
                        </li>
                        <li> 
                            <small>IMAX 3D:</small>
                            <div class="time-block">
                                <p>5:00 am</p>
                            </div>
                            <div class="time-block">
                                <p>7:45 pm</p>
                            </div>
                             <div class="time-block">
                                 <p>10:30 pm</p>
                             </div></li>
                        <li>
                            <small>
                                CINEMA 4D
                            </small>
                        </li>
                    </ul>
                </div>
            </div>
           </div>
           
       </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped >
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
    font-size: 20px;
}

h2 {
    font-size: 50px;
}

.time-list {
width: 100%;
margin-left: 40px;
}
.time-list li{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 10px 0;
    width: 100%;
    height: 50px;
    padding-bottom: 10px;
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
    font-size:13px;
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
}
</style>