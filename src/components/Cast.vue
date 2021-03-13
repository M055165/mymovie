<template>
    <div class="container my-5">
        <div class="row">
            <div class="col-md-4 left">
                <div class="header">
                    CAST
                </div>
                <div class="content">
                    <ul class="cast">
                        <li class="cast_item">
                                <div class="cast_img">
                            </div>
                            <p> 多拉A夢</p>
                        </li>
                        <li class="cast_item">
                                <div class="cast_img">
                            </div>
                            <p> 蠟筆小新</p>
                        </li>
                        <li class="cast_item">
                                <div class="cast_img">
                            </div>
                            <p> 兵長里維</p>
                        </li>
                        <li class="cast_item">
                                <div class="cast_img">
                            </div>
                            <p> 五條悟</p>
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
                        <img src="https://3.bp.blogspot.com/-6r1QT9sJr3A/XDAniuD6YdI/AAAAAAAAAic/sqs8MqfDHD8vCmy1ywzxlnjHPOHrSSyZwCLcBGAs/s1600/tree-sea-grass-nature-451855.jpeg" alt="">
                    </div>
                    <div class="gallery_pick">
                        <a href="#" @click.prevent="abc">
                            <i class="fas fa-arrow-left" ></i>
                        </a>
                    <ul class="gallery_item_box">
                        <li class="gallery_item" @click="abc">
                        </li>
                        <li class="gallery_item" @click="abc">
                        </li>
                        <li class="gallery_item" @click="abc">
                        </li>
                        <li class="gallery_item" @click="abc">
                        </li>
                        <li class="gallery_item" @click="abc">
                        </li>
                    </ul>
                    <a href="#" @click.prevent="abc">
                            <i class="fas fa-arrow-right" ></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>


<script scoped>
export default {
   data(){
       return {
           msg:123
       }
   },
   methods:{
       abc(){
           alert("1234")
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
   }
   .cast_img {
       width: 50px;
       height: 50px;
       overflow: hidden;
       border-radius: 50%;
       box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);;
       background-image: url("https://live.staticflickr.com/65535/50117280668_4f96de53c4_z.jpg");
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