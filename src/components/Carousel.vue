<template>
  <div class="slide">
    <!-- 圖片區 -->
    <div class="slideshow">
      <ul>
        <li v-for="(img, index) in imgArray" :key="index" v-show="index===markIndex">
          <img :src="img" alt />
        </li>
      </ul>
    </div>

    <!-- 小點點區 -->
    <div class="bar">
      <span v-for="(item,index) in imgArray" :key="index" @click="point(index)" :class="{'active': index===markIndex}"></span>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      markIndex: 0, //小點點下標
      imgArray: [
        "https://images8.alphacoders.com/553/thumb-1920-553032.jpg",
        "https://images4.alphacoders.com/573/thumb-1920-57394.jpg",
        "https://images5.alphacoders.com/735/thumb-1920-735001.jpg",
        "https://images4.alphacoders.com/814/thumb-1920-81446.jpg",
      ],
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
      if(vm.markIndex >=vm.imgArray.length){
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