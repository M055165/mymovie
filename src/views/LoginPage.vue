<template>
    <div class="app">
        <login></login>
    </div>
</template>
<style lang="scss" scoped>
    .app {
        color:white;
        font-weight: bold;
    }
</style>

<script>
import login from '../components/login'
export default {
    components:{login},
}
</script>