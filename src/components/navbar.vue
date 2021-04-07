<template>
  <div class="app">
    <nav >
      <div class="logo">
        <router-link to="/">
        <img src="../../src/assets/logo123.png" alt="">
        </router-link>
        
      </div>
      <ul class="nav-links" :class="{'navactive':burgerFlag}">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/top100">Top100</router-link></li>
        <li><router-link to="/bookinglist">Booking</router-link></li>
        <li><a href="javascript:;" @click="goToLogin">Login</a></li>
      </ul>
      <div class="burger" :class="{'toggle':burgerFlag}" @click="burgerClick">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {  
      burgerFlag : false,
    };
  },
  methods: {
    burgerClick(){
      this.burgerFlag = !this.burgerFlag
    },
    goToLogin(){
      let loginFlag = sessionStorage.getItem('login')
      if(loginFlag){
        alert(`${sessionStorage.getItem('account')} 您好,您已經登入過了喔！`)
      }else {
        this.$router.push('/login')
      }
    }
  },
  created() {
    
  },
};
</script>
<style lang="scss" scoped>
  $white:rgb(226,226,226);
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  img {
    width: 100px;
    
  }
  .app {
  // height: 60vh;
  // background-image: url("https://images8.alphacoders.com/553/thumb-1920-553032.jpg");
  // background-position: center center;
  // background-size: cover;
  // background-repeat: no-repeat;
  }
  nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color:  black;
    min-height: 10vh;
  }
  .logo {
    color: $white;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size: 22px;
  }
  .nav-links {
    display: flex;
    width: 30%;
    justify-content: space-around;
  }
  .nav-links li {
    list-style: none;
  }
  .nav-links a {
    color:$white;
    text-decoration: none;
    letter-spacing: 3px;
    font-weight: bold;
    font-size: 14px;
  }
  .burger {
    display: none;
    cursor: pointer;
  }
  .burger div {
    width: 25px;
    height: 3px;
    margin: 5px;
    background-color: $white;
  }
  @media screen and (max-width: 1024px) {
    .nav-links {
      width: 60%;
    }
  }
  @media screen and (max-width: 768px) {
    body {
      overflow: hidden;
    }
    .nav-links {
      position: absolute;
      right: 0;
      height: 100%;
      top: 10vh;
      background-color: $white;
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 0;
      width: 45%;
      display: none;
      // transform: translateX(100%);
      transition: all 1s ease-in;
      z-index: 99;
    }
    .nav-links a {
      font-weight: bold;
      color: black;
    }
    .burger li {
      opacity: 0;
    }

    .burger {
      display: block;
    }
  }
  .navactive {
    display: flex;
    // transform: translateX(0);
  }
  .toggle .line1 {
    transform: rotate(-45deg) translate(-5px,6px);
  }
  .toggle .line2 {
    opacity: 0;
  }
  .toggle .line3 {
    transform: rotate(45deg) translate(-5px,-6px);
  }

</style>
