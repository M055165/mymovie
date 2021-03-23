<template>
    <div class="container">
       <div class="row">
           <div class="col-md-6 seat_confirm">
               <img :src="myMovieData.img_s1" alt="">
                <ul class="seat_list">
                    <li>
                        <p>6<small class="ml-3">row</small></p>
                        <p>7<small>th</small></p>
                        <b>seat</b>
                        <i>$15</i>
                        <a @click="clickabc">X</a>
                    </li>
                    <li>
                        <p>6<small class="ml-3">row</small></p>
                        <p>7<small>th</small></p>
                        <b>seat</b>
                        <i>$15</i>
                        <a @click="clickabc">X</a>
                    </li>
                    <li>
                        <p>6<small class="ml-3">row</small></p>
                        <p>7<small>th</small></p>
                        <b>seat</b>
                        <i>$15</i>
                        <a @click="clickabc">X</a>
                    </li>
                </ul>
                <p class="total">
                    <small>Total</small> 
                    $100
                    </p>
              <div class="confirm">
          <button class="cancel">cancel</button>
          <button class="next">next</button>
          </div> 
           </div>
           <div class="col-md-6 seat_choose">
             <h1>{{myMovieData.movie_ename}}</h1>
             {{timeChoose}}
           <div class="movie-container">
            <label>Pick a Session:</label>
            <select id="movie" v-model="timeChoose">
            <option :value="item" v-for="(item,index) in timeData" :key="index" >{{item}}</option>
            </select>
            
      </div>
              <ul class="showcase">
      <li>
        <div class="seat"></div>
        <small>N/A</small>
      </li>
      <li>
        <div class="seat selected"></div>
        <small>Selected</small>
      </li>
      <li>
        <div class="seat occupied"></div>
        <small>Occupied</small>
      </li>
              </ul>
      <div class="seat_choose">
      <div class="screen"></div>

      <div class="row">
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
      </div>

      <div class="row">
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat occupied"></div>
        <div class="seat occupied"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
      </div>

      <div class="row">
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat occupied"></div>
        <div class="seat occupied"></div>
      </div>

      <div class="row">
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
      </div>

      <div class="row">
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat occupied"></div>
        <div class="seat occupied"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
      </div>

      <div class="row">
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat occupied"></div>
        <div class="seat occupied"></div>
        <div class="seat occupied"></div>
        <div class="seat"></div>
      </div>
    </div>

           </div>
        </div>
        
    </div>
</template>

<script>
export default {
   props:["movieData"],
    data(){
        return{
            myMovieData:'',
            tempData:[],
            timeData:[],
            typeList:[],
            timeChoose:'',
        }
    },
    methods:{
        clickabc(){
            alert(123)
        },
        makeTimeList(){
                if(this.myMovieData['2d_t']!==null){
                    this.tempData.push(this.myMovieData['2d_t'].split(','))
                    this.typeList.push("2D")
                }
                if(this.myMovieData['3d_t']!==null){
                    this.tempData.push(this.myMovieData['3d_t'].split(','))
                    this.typeList.push("3D")
                }
                if(this.myMovieData['imax_t']!==null){
                    this.tempData.push(this.myMovieData['imax_t'].split(','))
                    this.typeList.push("IMAX")
                }
                if(this.myMovieData['imax3d_t']!==null){
                    this.tempData.push(this.myMovieData['imax3d_t'].split(','))
                    this.typeList.push("IMAX 3D")
                }
                if(this.myMovieData['cinema4d_t']!==null){
                    this.tempData.push(this.myMovieData['cinema4d_t'].split(','))
                    this.typeList.push("CINEMA 4D")
                }
                this.tempData.forEach((item,index)=>{
                  console.log(index)
                  item.forEach((value=>{
                    return this.timeData.push(this.typeList[index]+'  ' +value)
                  }))
                })
        }
    },
    watch:{
        movieData(newV){
            this.myMovieData = newV;
            this.makeTimeList()
        }
    }
}
</script>

<style lang="scss" scoped>
    * {
        color:white;
        font-weight: bold;
        font-size: 18px;
    }
    .container {
        margin-top: 40px;
    }
    img {
        width: 300px;
        height: 300px;
    }
    .seat_confirm {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        .seat_list {
            margin-top: 50px;
            display: flex;
            flex-direction: column;
            
            li {
                width: 300px;
                display: flex;
                height: 50px;
                justify-content: space-around;
                align-items: center;
                border: 3px solid rgba($color: #dcdcdc, $alpha: 0.4);
                margin-bottom: 20px;
                p {
                    font-size: 30px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    small {
                    font-size: 14px;
                    color:#dcdcdc
                }
                }
                i {
                    color:#dcdcdc;
                    opacity: 0.5;
                    font-size: 15px;
                }
                a {
                    font-size: 22px;
                    cursor: pointer;
                    color:rgba($color: #DCDCDC, $alpha: 0.9)
                }
            }
        }
        .total {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            width: 60%;
            height: 20px;
            font-size: 30px;
            margin-top:20px;
            small {
                margin-right: 20px;
                color: rgba($color: #DCDCDC, $alpha: 0.5);
            }
        }
    }
    .seat_choose {
      padding-top:50px;
      h1 {
        margin-bottom: 30px;
        font-size: 30px;
      }
    }
.movie-container {
  margin: 20px 0;
  color:black;
}

.movie-container select {
    color:black;

  background-color: #fff;
  border: 0;
  border-radius: 5px;
  font-size: 14px;
  margin-left: 10px;
  padding: 5px 15px 5px 15px;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
}

 @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
.seat_choose {
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  perspective: 1000px;
  margin-bottom: 30px;
}

.seat {
  background-color: #444451;
  height: 20px;
  width: 30px;
  margin: 3px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.seat.selected {
  background-color: #6feaf6;
}

.seat.occupied {
  background-color: #fff;
}

.seat:nth-of-type(2) {
  margin-right: 18px;
}

.seat:nth-last-of-type(2) {
  margin-left: 18px;
}

.seat:not(.occupied):hover {
  cursor: pointer;
  transform: scale(1.2);
}

.showcase .seat:not(.occupied):hover {
  cursor: default;
  transform: scale(1);
}

.showcase {
  background: rgba(0, 0, 0, 0.1);
  padding: 5px 10px;
  border-radius: 5px;
  color: #777;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
}

.showcase li {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
}

.showcase li small {
  margin-left: 2px;
}

.row {
  display: flex;
}

.screen {
  background-color: #fff;
  height: 70px;
  width: 100%;
  margin: 15px 0;
  transform: rotateX(-45deg);
  box-shadow: 0 3px 10px rgba(255, 255, 255, 0.7);
}

p.text {
  margin: 5px 0;
}

p.text span {
  color: #6feaf6;
}
.confirm {
  display: flex;
  flex-direction: row;
  justify-content: center;
  order:999;
  width: 80%;
  button {
    background:black;
    color:white;
    border:none;
    width: 48%;
    height: 50px;
    margin:50px 5px 0 ;
    border:3px solid rgba($color: red, $alpha: 0.4);
    border-radius: 5px;
    &.cancel {
      background:black;
      color:red;
    }
    &.next {
      background-color: red;
      color:white;
    }
  }
}
@media screen and (max-width: 768px) {
  .seat_confirm {
    order:2
  }
  .seat_choose {
    order:0;
  }
}

</style>
