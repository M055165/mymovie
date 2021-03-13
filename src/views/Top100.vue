<template>
<div class="app">
  <navbar></navbar>
 <rank></rank>
 <myfooter></myfooter>
</div>
 
</template>

<script>
import navbar from '../components/navbar'
import rank from '../components/Rank'
import myfooter from '../components/Footer'

export default {
  components: {navbar,rank,myfooter},
  
}
</script>

<style scoped>
body {
  background-color: black;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color:white;
}
</style>