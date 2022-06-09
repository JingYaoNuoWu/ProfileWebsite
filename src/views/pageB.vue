<template>
  <div class="container-main-page-b">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" :class="{'swiper-slide-active':ActiveSlide == 0}"></div>
        <div class="swiper-slide" :class="{'swiper-slide-active':ActiveSlide == 1}"></div>
        <div class="swiper-slide" :class="{'swiper-slide-active':ActiveSlide == 2}"></div>
      </div>
    </div>
    <!-- <div class="activeTextContainer" >
      <transition name="contentContainer-b-active">
        <div class="contentContainer-b" v-if="active">
          <img src="@/assets/images/code.jpg" alt="">
        </div>
      </transition>
      <transition name="titleContainer-b-active">
        <div class="titleContainer-b" v-if="active">
          <h1>记录本</h1>
          <span>GitHub</span>
          <span>博客园地址</span>
        </div>
      </transition>
    </div> -->
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  props:['pageidx'],
  data(){
    return{
      SlideCount:3 //从1开始
    }
  },
  computed:{
    active(){
      let activetag = this.$props.pageidx
      return activetag == 1 ? true : false;
    },
    ActiveSlide(){

    }
  },
  mounted(){
    this.$emits("DeliverCount",this.SlideCount)
  }
})
</script>

<style lang="scss" scoped>
  .container-main-page-b{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    position: relative;
    .swiper-container{
      .swiper-wrapper{
        .swiper-slide{
          transition: 1s ease;
          opacity: 0;
        }
        .swiper-slide-active{
          opacity: 1;
        }
      }
    }
  }
  // .contentContainer-b-active-enter-active,
  // .contentContainer-b-active-leave-active
  // {
  //   transition: 1s ease;
  // }
  // .contentContainer-b-active-leave-to,
  // .contentContainer-b-active-enter-from
  // {
  //   opacity: 1;
  //   transform: translate3d(0,0,0);
  // }
  // .contentContainer-b-active-leave-to,
  // .contentContainer-b-active-enter-from
  // {
  //   opacity: 0;
  //   transform: translate3d(-2rem,0,0);
  // }
  
  // .titleContainer-b-active-enter-active,
  // .titleContainer-b-active-leave-active
  // {
  //   transition: 1s ease;
  // }
  // .titleContainer-b-active-leave-from,
  // .titleContainer-b-active-enter-to
  // {
  //   opacity: 1;
  //   transform: translate3d(0,0,0);
  // }
  // .titleContainer-b-active-leave-to,
  // .titleContainer-b-active-enter-from
  // {
  //   opacity: 0;
  //   transform: translate3d(2rem,0,0);
  // }
</style>