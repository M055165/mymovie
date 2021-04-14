<template>
    <div class="container">
      <modal v-if="modalFlag" @modalClose="modalClose()">
        <template v-slot:text>請先確認訂購的位置無誤
        <button class="btn btn-dark" @click="modalCancel()">取消</button>
        </template>
            確認
      </modal>
      <modal v-if="modalConfirmFlag" @modalClose="modalConfirmClose()">
        <template v-slot:text>{{account}}訂購成功！</template>
            確認
      </modal>
       <div class="row">
           <div class="col-md-6 seat_confirm">
               <img :src="myMovieData.img_s1" alt="">
                <ul class="seat_list">
                    <li v-for = "(item,index) in seatInfo" :key="index">
                        <p>{{item.split(',')[0]}}<small class="ml-3">row</small></p>
                        <p>{{item.split(',')[1]}}<small>th</small></p>
                        <b>seat</b>
                        <i>${{moviePrice}}</i>
                        <a @click="removieSeat(index)">X</a>
                    </li>
                </ul>
                <p class="total">
                    <small>Total</small> 
                    {{movieTotalPrice}}
                    </p>
              <div class="confirm">
          <button class="cancel">cancel</button>
          <button class="next" @click="goBooking">next</button>
          </div> 
           </div>
           <div class="col-md-6 seat_choose">
             <h1>{{myMovieData.movie_ename}}</h1>
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
      <div class="seat_choose" @click="seatchoose" v-show="timeChoose">
      <div class="screen"></div>

      <div class="myrow">
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
      </div>

      <div class="myrow">
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat "></div>
        <div class="seat "></div>
      </div>

      <div class="myrow">
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat "></div>
        <div class="seat "></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat "></div>
        <div class="seat"></div>
      </div>

      <div class="myrow">
        <div class="seat "></div>
        <div class="seat "></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat "></div>
      </div>

      <div class="myrow">
         <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat "></div>
        <div class="seat "></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat ="></div>
      </div>

      <div class="myrow">
         <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
      </div>
    </div>

           </div>
        </div>
        
    </div>
</template>

<script>
import modal from '../components/Modal'
import axios from 'axios';
export default {
   props:["movieData"],
    data(){
        return{
            myMovieData:'',//原始dat
            optionData:[],//獲取選取框時間(raw)
            timeData:[],//獲取選取框時間(加上電影類型）
            typeList:[],//電影累類型
            timeChoose:'',//選取匡選擇的value
            seatsIndex:[],//選取位置的index
            seatOccupied:[0,2,5,7,17,18,30],//預設哪些位置不能選的index
            movieCount:0,//選取位置數量
            moviePrice:15,//一張電影票價格
            seatInfo:[],//選取位置資訊 row,column 以逗號分割,
            modalFlag:false,
            modalConfirmFlag:false,
            timestamp:0
        }
    },
    components:{
      modal
    },
    methods:{
        makeTimeList(){
                if(this.myMovieData['2d_t']!==null){
                    this.optionData.push(this.myMovieData['2d_t'].split(','))
                    this.typeList.push("2D")
                }
                if(this.myMovieData['3d_t']!==null){
                    this.optionData.push(this.myMovieData['3d_t'].split(','))
                    this.typeList.push("3D")
                }
                if(this.myMovieData['imax_t']!==null){
                    this.optionData.push(this.myMovieData['imax_t'].split(','))
                    this.typeList.push("IMAX")
                }
                if(this.myMovieData['imax3d_t']!==null){
                    this.optionData.push(this.myMovieData['imax3d_t'].split(','))
                    this.typeList.push("IMAX 3D")
                }
                if(this.myMovieData['cinema4d_t']!==null){
                    this.optionData.push(this.myMovieData['cinema4d_t'].split(','))
                    this.typeList.push("CINEMA 4D")
                }
                this.optionData.forEach((item,index)=>{
                  item.forEach((value=>{
                    return this.timeData.push(this.typeList[index]+'  ' +value)
                  }))
                })
        },
        makeOccupied(){
            let seatsAll = document.querySelectorAll('.myrow .seat')//選取所有位置
            seatsAll.forEach((item,index) => {
            if(this.seatOccupied.indexOf(index)!==-1){
            seatsAll[index].classList.toggle('occupied');
            }
        });
        },
        seatchoose(e){
          if (e.target.classList.contains('seat') &&!e.target.classList.contains('occupied')) { //如果選取的dom元素有包含seat且不包含已選取
             e.target.classList.toggle('selected');//加上選取元素
                const seatsAll = document.querySelectorAll('.myrow .seat');//選所有位置
                const selectedSeats = document.querySelectorAll('.myrow .selected');
                this.seatsIndex = [...selectedSeats].map(seat => [...seatsAll].indexOf(seat));
                console.log(this.seatsIndex);
                this.movieCount = selectedSeats.length; //獲取選取數量
                this.makeSeatInfo(this.seatsIndex)
                console.log()
            }
    },
           makeSeatInfo(data){
             this.seatInfo = []
              data.forEach((item)=>{
                if(item >=0 && item <8){
                  this.seatInfo.push(`1,${item+1}`)
                }
                else if (item >=8 && item <16){
                  this.seatInfo.push(`2,${item-7}`)
                }
                 else if (item >=16 && item <24){
                  this.seatInfo.push(`3,${item-15}`)
                }
                  else if (item >=24 && item <32){
                  this.seatInfo.push(`4,${item-23}`)
                }
                 else if (item >=32 && item <40){
                  this.seatInfo.push(`5,${item-31}`)
                }
                 else if (item >=40 && item <48){
                  this.seatInfo.push(`6,${item-39}`)
                }
              })
            },
            removieSeat(index){
              this.movieCount -=1;
              this.seatInfo.splice(index,1)
              this.seatsIndex.splice(index,1)
              let seatSelected =  document.querySelectorAll('.myrow .selected');
              seatSelected[index].classList.toggle('selected');
            },
            goBooking(){
              this.modalFlag=true;
            },
            modalClose(){
            this.modalFlag=false;
            let data ={
                seatInfo:this.seatInfo,
                movieCount:this.movieCount,
                moviePrice:this.moviePrice,
                movieTotalPrice:this.movieTotalPrice,
                timeChoose :this.timeChoose,
                movieEname :this.myMovieData.movie_ename,
                movieTname:this.myMovieData.movie_tname,
                user:sessionStorage.getItem('account'),
                timestamp:Date.now(),
              }
            let api = `http://192.168.43.145:8800/order/add`
            axios.post(api,data).then((res)=>{
            if(res.data.status == 'ok') {
              this.modalConfirmFlag = true;
            }
                })
    },
    modalConfirmClose(){
      this.modalConfirmFlag = false
    },
    modalCancel(){
      this.modalFlag = false;
    }
    },
    computed:{
      movieTotalPrice(){
        return this.movieCount * this.moviePrice
      }
    },
    mounted(){
      console.log(sessionStorage.getItem('account'))
      this.makeOccupied();
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
  background-color: #DCDCDC;
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

.myrow {
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
    cursor: pointer;
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
