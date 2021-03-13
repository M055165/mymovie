<template >
<div id="app">
<navbar></navbar>
<moviedate></moviedate>
<myfooter></myfooter>
</div>
</template>

<script>
import navbar from '../components/navbar'
import myfooter from '../components/Footer'
import moviedate from '../components/Moviedate'
export default {
    components:{
        navbar,
        myfooter,
moviedate    
}
}
</script>
<style lang="scss" scoped>
    * {
        color:white;
    }
</style>