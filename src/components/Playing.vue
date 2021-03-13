<template>
  <div class="Container ">
    <div class="header">
      <h2>Comming soon123</h2>
    </div>
    <div class="box mt-3">
      <div class="row">
      <div class="card123  col-4 col-lg-2 ">
        <img src="https://www.vscinemas.com.tw/vsweb/upload/film/film_20190828002.jpg" alt="">
        <div class="text mt-2">
          <h5 >正義聯盟</h5>
          <div class="text-detail  ">
            <small>114 mim</small> <i> | </i> <small>ADVENTURE</small>
          </div>
        </div>
      </div>
      <div class="card123  col-4 col-lg-2 ">
        <img src="https://www.vscinemas.com.tw/vsweb/upload/film/film_20190828002.jpg" alt="">
        <div class="text mt-2">
          <h5 >正義聯盟</h5>
          <div class="text-detail  ">
            <small>114 mim</small> <i> | </i> <small>ADVENTURE</small>
          </div>
        </div>
      </div>
     <div class="card123  col-4 col-lg-2 ">
       <div class="comming-date"></div>
        <img src="https://www.vscinemas.com.tw/vsweb/upload/film/film_20190828002.jpg" alt="">
        <div class="text mt-2">
          <h5 >幸福綠皮書</h5>
          <div class="text-detail  ">
            <small>114 mim</small> <i> | </i> <small>ADVENTURE</small>
          </div>
        </div>
      </div><div class="card123  col-4 col-lg-2 ">
        <img src="https://photox.pchome.com.tw/s13/hatsocks75/2409/160489380127/" alt="">
        <div class="text mt-2">
          <h5 >同學麥納斯</h5>
          <div class="text-detail  ">
            <small>114 mim</small> <i> | </i> <small>ADVENTURE</small>
          </div>
        </div>
      </div>
      <div class="card123  col-4 col-lg-2">
        <img src="https://www.vscinemas.com.tw/vsweb/upload/film/film_20190828002.jpg" alt="">
        <div class="text mt-2">
          <h5 >正義聯盟</h5>
          <div class="text-detail  ">
            <small>114 mim</small> <i> | </i> <small>ADVENTURE</small>
          </div>
        </div>
      </div>
      <div class="card123  col-4 col-lg-2 ">
        <img src="https://www.vscinemas.com.tw/vsweb/upload/film/film_20190828002.jpg" alt="">
        <div class="text mt-2">
          <h5 >正義聯盟</h5>
          <div class="text-detail  ">
            <small>114 mim</small> <i> | </i> <small>ADVENTURE</small>
          </div>
        </div>
      </div>
      </div>
      
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .Container{
    padding: 6vh 12vh!important;
  }
  .Container .header {
   
    
    color: white;
    text-align: left;
    height: 50px;
    width: 100%;
    border-bottom: 2px solid red;
  }
  h2 {
    transform: translateY(70%);
    letter-spacing: 3px;
  }
  .box {
    display: flex;
  }
  img {
   max-width:100%; /*不使用width:100% 是因避免圖片解析度不好，隨父元素被放大時會糊掉*/ 
   
  }
  .text {
    color:rgb(266, 266, 266)
  }
  .text-detail {
    display: flex;
    justify-content: space-around;
    padding: 0px 30px;
  }
  .text-detail small {
      font-size: 15px;
  }
 
    @media screen and (max-width: 1580px){
     .text-detail {
    display: block;
  }
  .text-detail i {
    display: none;
  }
  }
  @media screen and (max-width: 768px){
    .Container {
      padding: 0px 20px!important;
    }
    .Container .header {
      height: 50px;
    }
    h2 {
       transform: translateY(70%)!important;
      font-size: 14px!important;
    }
  .text-detail {
    display: block;
  }
  .text-detail i {
    display: none;
  }
  .card123 {
    margin-bottom: 20px;
  }
  .Container .text-detail small {
      font-size: 12px;
  }
  }
  .col-4,.col-lg-2 {
    padding:0!important;
  }
  .box {
    overflow:hidden;
  }
 
</style>