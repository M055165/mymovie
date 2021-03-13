<template>
<div id="app">
 <navbar></navbar>
 <banner></banner>
<movietypechoose></movietypechoose>
<detail></detail>
<cast></cast>
 <myfooter></myfooter>
</div>
 
</template>

<script>
import navbar from '../components/navbar';
import banner from '../components/Banner';
import movietypechoose from '../components/ＭovieTypeChoose'
import detail from '../components/Details'
import cast from '../components/Cast'
import myfooter from '../components/Footer'
export default {
  components: { navbar, banner,movietypechoose,detail,cast,myfooter},
}
</script>

<style scoped >
* {
  margin: 0;
  padding: 0;
}
#app {
  background-color: black;
}

</style>