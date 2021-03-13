<template>
<div id=#app>
   <navbar></navbar>
   <moviedetail></moviedetail>
   <myfooter></myfooter>
   </div>
  
</template>

<script>
import navbar from '../components/navbar'
import moviedetail from '../components/Movedetail'
import myfooter from '../components/Footer'

export default {
  components: { navbar,moviedetail,myfooter },
    
}
</script>

<style lang="scss" scoped>
   
</style>