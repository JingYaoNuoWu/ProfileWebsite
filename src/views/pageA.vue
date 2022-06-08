<template>
  <div class="container-main-page-a">
    <div class="page-a-index-warp" :class="{activeText:active}">
      welcome to my home
    </div>
    <div class="page-a-index-butn" :class="{activeButn:active}">
      
    </div>
    <div class="page-a-index-bg">
      <!-- <video src="@/assets/video/index-vdo.mp4" autoplay="autoplay" loop="loop" muted="muted" ></video> -->
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
      return activetag == 0 ? true : false
    },
  }
  
})
</script>

<style lang="scss" scoped>
  .page-a-index-butn{
    width: 100px;
    height: 50px;
    background-color: white;
    z-index: 10;
    transition: 1s;
    transform: translate3d(0,-200px,0);
  }
  .container-main-page-a{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    position: relative;
    flex-direction: column;
    .page-a-index-warp {
      z-index: 10;
      font-size: 60px;
      font-weight: 700;
      color: white;
      transition: 1s;
      margin: 0 0 80px 0;
      transform: translate3d(0,-200px,0);
    }
    .activeButn{
      transition: 1.8s;
      transform: translate3d(0,-30px,0);
    }
    .activeText{
      transition: 1.2s;
      transform: translate3d(0,-30px,0);
    }
  }
  .page-a-index-bg{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    video{
      position: absolute;
      top: 50%;
      left: 50%;
      width: 120%;
      height: 100%;
      transform: translate3d(-50%,-50%,0);
    }
  }
</style>