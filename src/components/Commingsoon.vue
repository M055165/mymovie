<template>
  <div class="Container ">
    <div class="header">
      <h2><slot></slot></h2>
    </div>
    <div class="box mt-3" >
      <div class="row">
        
      <div class="card123  col-4 col-lg-2" v-for="(item,index) in movieData" :key="index">
        <router-link :to="`/${type}/${index+1}`" style="text-decoration: none; color: inherit;">
        <img :src="item.img_s1" alt="">
        <div class="text mt-2">
          <h1 class="mt-3">{{item.movie_tname}}</h1>
          <div class="text-detail mt-2">
            <small class="mb-1">{{item.movie_long}} min</small>
            <small>{{item.movie_type}}</small>
          </div>
        </div>
        </router-link>
      </div>
      </div>
      
    </div>
  </div>
</template>

<style lang="scss" scoped>
router-link {
  text-decoration: none;
}
  .Container{
    font-weight: bold;
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
   width:100%; /*不使用width:100% 是因避免圖片解析度不好，隨父元素被放大時會糊掉*/ 
  }
  .text {
    color:rgb(266, 266, 266)
  }
  .text-detail {
    display:flex;
    flex-direction: column;
    padding: 0px 30px;
  }
  .text-detail small {
    display: block;
    font-size: 15px;
    text-align: center;
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
  h1 {
    overflow: hidden;
    white-space: nowrap;
    text-overflow : ellipsis;
    max-lines: 1;
    padding:0px 15px;
    font-size: 14px!important;
    word-break: break-all;
  }
  small {
    overflow: hidden;
    white-space: nowrap;
    text-overflow : ellipsis;
    max-lines: 1;
    font-size: 12px!important;
  }
  }
  .col-4,.col-lg-2 {
    padding:0!important;
  }
  .box {
    overflow:hidden;
  }
  h1 {
    font-size: 18px;
  }
 
</style>
<script>
export default {
  data(){
    return {
      
    }
  },
  props:['movieData','type']
}
</script>