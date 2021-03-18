<template>
  <div class="slide">
    <!-- 圖片區 -->
    <div class="slideshow">
      <ul>
        <li v-for="(img, index) in movieData" :key="index" v-show="index===markIndex">
          <img :src="img['img_big']" alt />
        </li>
      </ul>
    </div>
  
    <!-- 小點點區 -->
    <div class="bar">
      <span v-for="(item,index) in 6" :key="index" @click="point(index)" :class="{'active': index===markIndex}"></span>
    </div>
  </div>
</template>


<script>
export default {
  props:['movieData'],
  data() {
    return {
      markIndex: 0, //小點點下標
    };
  },
  methods: {
    point(index) {
      this.markIndex = index;
    },
    play(){
    let vm = this;
    setInterval(function(){
      vm.markIndex ++;
      if(vm.markIndex >=vm.movieData.length){
        vm.markIndex =0
      }
    },5000)
 }
},
created (){
  this.play();
}

}
</script>

<style lang="css" scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  font-size:14px
}

img {
  width: 100%;
  height: 95vh;
}
@media screen and (max-width: 768px) {
  img {
  width: 100%;
  height: 40vh;
}
}

.slide {
  position: relative;
}

.bar{
 position: absolute;
 right: 0;
 bottom: 10px;
}

.bar span {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: white;
  margin-right: 15px;
}

.active {
  width: 13px!important;
  height: 13px!important;
  margin-bottom: -1.5px!important;
  background-color:rgba(0,0,0, 0.35)!important
}

</style>