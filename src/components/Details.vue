<template>
    <div>
        <div class="container mt-3">
          <div class="row">
              <div class="col-md-6 left">
                  <div class="header">
                      <h3>DETAILS</h3>
                  </div>
                  <div class="detail-block mt-3">
                      <ul class="detail-list">
                          <li>
                              <h3 class="weight-normal">COUNTRY</h3>
                              <h3>USA</h3>
                          </li>
                          <li>
                              <h3 class="weight-normal" >LANGUAGE</h3>
                              <h3>English</h3>
                          </li>
                          <li>
                              <h3 class="weight-normal" >RELISE DATE</h3>
                              <h3>{{myMovieData.movie_ctime}}</h3>
                          </li>
                          <li>
                              <h3 class="weight-normal" >DIRECTOR</h3>
                              <h3>{{myMovieData.movie_director}}</h3>
                          </li>
                      </ul>
                  </div>
              </div>
               <div class="col-md-6 right">
                   <div class="header">
                    <h3>STORYLINE</h3>
                   </div>
                   <div class="storyline-block mt-3">
                       <p>{{myMovieData.movie_info}}</p>
                   </div>
               </div>
    </div>
    </div>
    </div>
</template>

<style lang="scss" scoped>
    * {
    color:white!important;
    font-weight: bold;
    }
    .weight-normal {
        font-weight: normal;
    }
    h3 {
        font-size: 20px;
    }
    .header {
        display: flex;
        align-items: center;
        height: 50px;
        border-bottom: 3px solid red;
    }
    .col-md-6 {
        padding: 0;
    }
    .detail-list li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 30px;
        padding: 20px 0;
        width: 80%;
        border-bottom:3px solid rgba($color: grey, $alpha: 0.4)
    }
    .storyline-block {
        line-height: 30px;
        font-size: 20px;
        height: 70%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
    }
    @media screen and (max-width: 768px){
       .col-md-6 {
           padding: 0 15px;
       }
       .detail-list li {
           width: 100%;
       }
       .right{
           margin-top: 30px;
       };
    }
</style>

<script>
export default {
    props:["movieData"],
    data(){
        return{
            myMovieData:'',
        }
    },
    watch:{
        movieData(newV){
            this.myMovieData = newV;
            console.log("監測中")
            console.log(this.myMovieData)
        }
    }
}
</script>