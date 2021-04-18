<template>
    <div>
        <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous" @click.prevent="goPages('-1')" :class="{disable:lastFlag}">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
           <li class="page-item"  v-for="(item,index) in Math.ceil(orderDataLength/8)" :key='index'><a class="page-link" href="#" @click="pagesChange(index+1)">{{item}}</a></li>
    <li class="page-item" >
      <a class="page-link" href="#" aria-label="Next"  @click.prevent="goPages('1')" :class="{disable:nextFlag}" >
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
    </div>
</template>
<style lang="scss">

.disable {
  background-color: red;
  cursor: not-allowed;
}
  
</style>
<script>
export default {
  props:['orderDataLength'],
  data(){
    return {
      currentIndex:1,
      pagesLength:0,
      minPage:1,
      maxPage:0,
      lastFlag:false,
      nextFlag:false
    }
  },
  watch:{
    orderDataLength(newV){
      this.pagesLength = newV
      this.maxPage =Math.ceil(this.pagesLength/8)
    },
    currentIndex(newVal){
      if(newVal==1){
        this.lastFlag = true;
      }
      if(newVal==this.maxPage){
        this.nextFlag = true;
      }
    }
  },
  methods:{
    pagesChange(index){
      this.currentIndex = index
      this.$emit('pagesChange',index)
    },
    goPages(index){
      this.lastFlag = false;
      this.nextFlag = false;
      this.currentIndex += parseInt(index)
      if(this.currentIndex >this.maxPage){
        this.currentIndex = this.maxPage
        this.nextFlag = true;
        return
      }
      if(this.currentIndex<this.minPage){
         this.currentIndex = this.minPage
         this.lastFlag = true;
         return
         }
       this.$emit('pagesChange',this.currentIndex)    
    }
  },
  mounted(){
    if(this.currentIndex ==1){
      this.lastFlag = true;
    }
  }
}
</script>