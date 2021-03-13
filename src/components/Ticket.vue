<template>
    <div class="container">
       <div class="row">
           <div class="col-md-6 seat_confirm">
               <img src="data:image/jpeg;base64,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" alt="">
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
             <h1>MORTAL ENGINES</h1>
           <div class="movie-container">
            <label>Pick a Session:</label>
            <select id="movie">
            <option value="10">2D 6:00 am</option>
            <option value="12">2D 8:45 pm</option>
            <option value="8">3D 4:32 am </option>
            <option value="9">3D 7:45 pm</option>
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
    methods:{
        clickabc(){
            alert(123)
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