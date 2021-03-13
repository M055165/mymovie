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
                              <h3>ENGLISH</h3>
                          </li>
                          <li>
                              <h3 class="weight-normal" >RELISE DATE</h3>
                              <h3>14 JAN 2019</h3>
                          </li>
                          <li>
                              <h3 class="weight-normal" >DIRECTOR</h3>
                              <h3>CHRISTIAN RIVERS</h3>
                          </li>
                      </ul>
                  </div>
              </div>
               <div class="col-md-6 right">
                   <div class="header">
                    <h3>STORYLINE</h3>
                   </div>
                   <div class="storyline-block mt-3">
                       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis iure, eos facere eius suscipit repudiandae, voluptas illum corporis praesentium, officiis explicabo quia magni inventore quibusdam distinctio vero quisquam optio? Eaque?</p>
                         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis iure, eos facere eius suscipit repudiandae, voluptas illum corporis praesentium, officiis explicabo quia magni inventore quibusdam distinctio vero quisquam optio? Eaque?</p>
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
    .storyline-block p:first-child{
        margin-bottom: 50px;
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