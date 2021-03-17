<template>
    <div class="app">
        <navbar></navbar>
        <login></login>
        <myfooter></myfooter>
    </div>
</template>
<style lang="scss" scoped>
    * {
    
        color:white;
    }
</style>

<script>
import navbar from '../components/navbar'
import myfooter from '../components/Footer'
import login from '../components/login'
export default {
    components:{navbar,myfooter,login}
}
</script>