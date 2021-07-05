<template>
    <div class="container my-5">
        <div class="row">
            <div class="col-md-4 left">
                <div class="header">
                    CAST
                </div>
                <div class="content">
                    <ul class="cast">
                        <li class="cast_item" v-for="(item,index) in data" :key="index">
                                <div class="cast_img" :style="{ backgroundImage: 'url(' + item.castUrl + ')' }">
                            </div>
                            <p> {{item.star}}</p>
                        </li>
                    </ul>
                </div>
            </div>
             <div class="col-md-8 right">
                <div class="header">
                    PHOTO GALLERY
                </div>
                <div class="content">
                    <div class="gallery_box">
                        <img :src="wallpaper_bg[currentIndex]" alt="">
                    </div>
                    <div class="gallery_pick">
                        <a href="#" @click.prevent="photoGo(-1)">
                            <i class="fas fa-arrow-left" ></i>
                        </a>
                    <ul class="gallery_item_box">
                        <li class="gallery_item"  v-for="(item,index) in (myMovieData.wallpaper_img).split(',')" :key="index" :style="{ backgroundImage: 'url(' + item + ')' }" @click="changePhoto(index)">
                        </li>
                    </ul>
                    <a href="#" @click.prevent="photoGo(1)">
                            <i class="fas fa-arrow-right" ></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>


<script >
export default {
   props:['movieData'],
   data(){
       return {
           myMovieData:{
               wallpaper_img:""
           },
           data:[],
           currentIndex:0
       }
   },
   computed:{
       wallpaper_bg(){
           return (this.myMovieData.wallpaper_img).split(',');
       }
   },
   watch:{
       movieData(newV){
           this.myMovieData = newV;
           this.makeData();
       }
   },
   methods:{
       makeData(){
           for(let i = 0;i<(this.myMovieData.movie_star).split(',').length;i++){
               console.log("i"+i);
               this.data.push(
                   {
                       star:(this.myMovieData.movie_star).split(',')[i],
                       castUrl:(this.myMovieData.cast_img).split(',')[i],
                   }
                   )
           }
           console.log(this.data[1].star)
       },
       changePhoto(index){
           this.currentIndex = index;
       },
       photoGo(go){
             if(go == 1) {
                 this.currentIndex += 1
                 if(this.currentIndex > this.wallpaper_bg.length-1){
                     this.currentIndex = 0;
                 }
             }else {
                 this.currentIndex += -1;
                 if (this.currentIndex <0){
                     this.currentIndex = this.wallpaper_bg.length -1;
                 }
             }
           }
       
   },
   components:{
       
   }
    
}
</script>

<style lang="scss" scoped>
   * {
       color:white;
       font-weight: bold;
   }
   .col-md-4,.col-md-8{
       padding: 0;
   }
   .header {
       display: flex;
        align-items: center;
        height: 50px;
        border-bottom: 3px solid red;
   }
   .content {
       margin-top: 25px;
       text-align: left;
       padding-bottom: 40px;
   }
   .cast_item {
       display: flex;
       justify-content: space-evenly;
       align-items: center;
       margin-bottom: 20px;
       p {
           font-size: 17px;
           display: flex;
           justify-content: center;
           width: 200px;
       }
   }
   .cast_img {
       width: 70px;
       height: 70px;
       overflow: hidden;
       border-radius: 50%;
       box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);;
       background-image: url("https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTQyNjgwMDQ0NjE4MTMwNzU4/gettyimages-503700338jpg.jpg");
       background-position: center center;
       background-size: cover;
   }
   .gallery_box {
       margin:0 auto;
       width: 90%;
       height: 350px;
       overflow: hidden;
       background-size: cover;
       background-position: center center;
       img {
           width: 100%;
           height: auto;
       }
   }
   .gallery_pick{
       margin:0 auto;
       margin-top: 15px;
       width: 90%;
       height: 50px;
       display: flex;
       justify-content: space-between;
       align-items: center;
       
   }
   .fa-arrow-left,.fa-arrow-right {
           font-size: 30px;
           color:red;
       }
    .gallery_item_box {
        width: 90%;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        .gallery_item {
            overflow: hidden;
            width: 50px;
            height: 50px;
            border-radius: 100%;
            background-image: url("https://live.staticflickr.com/65535/50117280668_4f96de53c4_z.jpg");
            background-position: center center;
            background-size: cover;
            margin:0 4px;
            cursor: pointer;
        }
    }

   @media screen and (max-width: 768px){
       .col-md-4,.col-md-8 {
           padding: 0 15px;
       }
       .content {
           padding-bottom: 20px;
       }
       .gallery_box {
           height: 300px;
           img {
               height: 300px;
           }
       }
       
    }
</style>

