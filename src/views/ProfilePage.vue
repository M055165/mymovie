<template>
    <div class="app">
        <navbar></navbar>
        <profile></profile>
        <myfooter></myfooter>
    </div>
</template>
<style lang="scss" scoped>
    .app {
        color:white;
        font-weight: bold;
    }
</style>

<script>
import navbar from '../components/navbar'
import myfooter from '../components/Footer'
import profile from '../components/profile'
export default {
    components:{profile,navbar,myfooter},
}
</script>