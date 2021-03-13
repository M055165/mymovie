<template>
    <div id="app">
        <navbar></navbar>
        <banner></banner>
        <ticket></ticket>
        <myfooter></myfooter>
    </div>
</template>

<script>
import navbar from '../components/navbar';
import myfooter from '../components/Footer'
import ticket from '../components/Ticket'
import banner from '../components/Banner'
export default {
    components:{
        navbar,myfooter,ticket,banner
    }
}
</script>
<style lang="scss" scoped>
    body {
  background-color: black!important;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>