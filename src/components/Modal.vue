<template>
<teleport to='html' >
    <div>
        <div class="modal_content">
        <slot name="text"></slot>
        <a  href="javascript:;" @click.prevent="modalClose" ><slot></slot></a>     
        </div>    
    </div>
 </teleport>
</template>


<style lang="scss" scoped>
    div {
        border-radius: 5%;
        background-color: #dcdcdc;
        width: 40%;
        height: 40%;
        position: fixed;
        left:50%;
        top: 50%;
        transform: translate(-50%,-50%);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .modal_content {
      width: 100%;
      display: flex;
      flex-direction: column;
      a {
          text-decoration: none;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px;
          background: #01814A;
          color:white;
          margin-top: 30px;
      }
    }

    @media screen and (max-width: 768px){
        div {
            width: 75%;
            height: 23%;
        }
    }
</style>

<script>
export default {
    methods:{
        modalClose(){
        this.$emit('modalClose', "false") 
    }
    }
}
</script>