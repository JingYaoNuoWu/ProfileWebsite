<template>
  <div class="topbarbox" :class="{activeTopBar:active}">
    <div class="topbarlogo">
      <a href="/">
        <img src="@/assets/images/logo.png" alt="">
      </a>
    </div>
    <div class="topbarcontent">
      
    </div>
    
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  props:['pageidx'],
  data(){
    return{

    }
  },
  computed:{
    active(){
      let activetag = this.$props.pageidx
      return activetag == 0 ? false : true;
    },
  }
  
})
</script>


<style lang="scss" scoped>
  .topbarbox {
    display: flex;
    align-items: center;
    position:fixed;
    top:0px;
    width: 100%;
    height: 70px;
    background-color: white;
    z-index: 10;
    opacity: 0;
    transition: 100ms;
    justify-content: space-between;
    .topbarcontent{
      height: 20px;
    }
    .topbarlogo{
      a{
        display: inline-block;
      }
    }
    img{
      height: 3rem;
    }
  }
  .activeTopBar{
    opacity: 1
  }
</style>