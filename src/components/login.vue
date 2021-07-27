<template>
  <div class="app">
    <div class="container">
      <div class="login_header">
        <div class="login" @click="checktype('login')">登入</div>
        <div class="register" @click="checktype('register')">註冊</div>
      </div>
      <div class="login_form">
        <form action="https://vert-choucroute-22094.herokuapp.com/user/login" method="post"  >
          <label>
            <input type="text" name="account" placeholder="User Account"  v-model="data['account']" />
          </label>
          <label>
            <input type="password" name="password" placeholder="Password" v-model="data['password']" />
          </label>
           <div class="button_box d-flex">
              <button class="red mr-3" type="reset" >
            <i class="icon ion-md-lock"></i> Reset
          </button>
          <button class="red" type="button" @click="login">
            <i class="icon ion-md-lock"></i> Login
          </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$ruler: 16px;
$color-red: #ae1100;
$color-bg: #ebecf0;
$color-shadow: #babecc;
$color-white: #fff;
.app {
  width: 100%;
  height: 100vh;
  background-image: url("https://images3.alphacoders.com/104/thumb-1920-1041825.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.container {
  width: 40vw;
  height: 60vh;
  background-color: white;
  position: absolute;
  top:50%;
  transform: translateY(-50%);
  left: 200px;
  border-radius: 50px;
  color: black;
  box-shadow: 5px 5px 10px rgba($color: #dcdcdc, $alpha: 0.4);
}
.login_header {
  display: flex;
  font-size: 20px;
  .login,
  .register {
    margin-top: 30px;
    padding: 20px;
    width: 48%;
    cursor: pointer;
  }
  .login {
      border-bottom: 3px solid #dcdcdc;
  }
}
.login_form {
  padding: 30px 30px;
}
form {
  padding: $ruler;
  width: $ruler * 20;
  margin: 0 auto;
}
button,input {
  border: 0;
  outline: 0;
  font-size: $ruler;
  border-radius: $ruler * 20;
  padding: $ruler;
  background-color: $color-bg;
  text-shadow: 1px 1px 0 $color-white;
}

label {
  display: block;
  margin-bottom: $ruler * 1.5;
  width: 100%;
}

input {
  margin-right: $ruler/2;
  box-shadow: inset 2px 2px 5px $color-shadow, inset -5px -5px 10px $color-white;
  width: 100%;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
  appearance: none;
  -webkit-appearance: none;

  &:focus {
    box-shadow: inset 1px 1px 2px $color-shadow,
      inset -1px -1px 2px $color-white;
  }
}

button {
  margin-top: 10px;
  color: #61677c;
  font-weight: bold;
  box-shadow: -5px -5px 20px $color-white, 5px 5px 20px $color-shadow;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  font-weight: 600;
  width: 150px;
  &:hover {
    box-shadow: -2px -2px 5px $color-white, 2px 2px 5px $color-shadow;
  }

  &:active {
    box-shadow: inset 1px 1px 2px $color-shadow,
      inset -1px -1px 2px $color-white;
  }

  .icon {
    margin-right: $ruler/2;
  }
}

.underline {
  border-bottom: 3px solid #dcdcdc;
}

@media screen and (max-width: 768px){
    .app {
        background-image: url("https://images6.alphacoders.com/373/thumb-1920-373654.jpg");
        background-position: center center;
    }
    .container {
        width: 90%;
        height: 55vh;
        left:5%;
        top:50%;
        transform: translateY(-50%);
    }
    .login,.register {
        margin: 0;
    }
    .login_form {
        padding:20px;
    }
}
</style>

<script>
import axios from 'axios'
export default {
  data(){
    return {
    data:{
      account:'',
      password:'',
    }
    }
  },
  methods:{
    login(){
      console.log(this.data)
      const url = `https://vert-choucroute-22094.herokuapp.com/user/login`; // origin api url
      let vm = this;
       axios.post(`${url}`,this.data).then((res)=>{
        if(res.data.result=="ok"){ //登入成功的話
            console.log(res.data.data)
            sessionStorage.setItem("login",true)
            sessionStorage.setItem('account',res.data.data[0].account)
            vm.$router.push(`/第一次02`)
        }
    })
    },
    checktype(type) {
        if(type=='register'){
            this.$router.push('/register')
        }else {
            this.$router.push('/login')
        }
    }
  },
  created(){
    this.loginFlag = true;
  }
}
</script>