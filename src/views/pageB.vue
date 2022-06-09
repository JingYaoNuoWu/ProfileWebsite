<template>
  <div class="container-main-page-b">
    <div class="activeTextContainer" :class="{activeText:active}">
      <div class="titleContainer"></div>
      <span>GitHub</span>
      <span>地址</span>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  props:['pageidx'],
  computed:{
    active(){
      let activetag = this.$props.pageidx
      return activetag == 1 ? true : false;
    }
  }
})
</script>

<style lang="scss" scoped>
.container-main-page-b{
    height: 100%;
    width: 100%;
    position: relative;
    .activeTextContainer{
      position: absolute;
      right: 1rem;
      top: 2rem;
      display: flex;
      align-items: center;
      opacity: 0.5;
      transition: 1.2s;
      transform: translate3d(2rem,0,0);
      span{
        margin: 0 .1rem;
      }
    }
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
      opacity: 1;
      transition: 1.2s;
      transition-delay: 600ms;
      transform: translate3d(0,0,0);
    }
  }
</style>