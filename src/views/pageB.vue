<template>
  <div class="container-main-page-b">
    <div class="swiper-container">
      <button @click="ChangeSlidePage(1)">==1==</button>
      <button @click="ChangeSlidePage(2)">==2==</button>
      <div class="swiper-wrapper">
        <div class="swiper-slide" :class="{'swiper-slide-active':UsePage == 1}">
          <div class="activeTextContainer" >
            <transition name="contentContainer-b-active">
              <div class="contentContainer-b" v-if="UsePage == 1 && activePageidx">
                <img src="@/assets/images/code.jpg" alt="">
              </div>
            </transition>
            <transition name="titleContainer-b-active">
              <div class="titleContainer-b" v-if="UsePage == 1 && activePageidx">
                <h1>记录本</h1>
                <!-- <span>GitHub</span> -->
                <span>博客园地址</span>
              </div>
            </transition>
          </div>
        </div>
        <div class="swiper-slide" :class="{'swiper-slide-active':UsePage == 2}">
          <transition name="contentContainer-b-active">
              <div class="contentContainer-b" v-if="UsePage == 2 && activePageidx">
                <img src="@/assets/images/github.jpg" alt="">
              </div>
            </transition>
            <transition name="titleContainer-b-active">
              <div class="titleContainer-b" v-if="UsePage == 2 && activePageidx">
                <h1>源码本</h1>
                <span>GitHub</span>
                <!-- <span>博客园地址</span> -->
              </div>
            </transition>
        </div>
        <div class="swiper-slide" :class="{'swiper-slide-active':ActiveSlide == 3}"></div>
      </div>
    </div>
    
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  props:['pageidx','SlideCurrentPage','UsePageIndex'],
  // emits:['DeliverSlideCurrentPage','DeliverCount'],
  data(){
    return{
      SlideCount:3, //从1开始
      UsePage:1
      // this.UsePageIndex
    }
  },
  computed:{
    activePageidx(){
      return this.$props.pageidx == this.$props.UsePageIndex ? true : false  
    },
    ActiveSlide(){
      return this.$props.SlideCurrentPage
    }
  },
  methods:{
    ChangeSlidePage(index){
      this.$emit("DeliverSlideCurrentPage",index)
      this.UsePage = index
    }
  },
  mounted(){
    this.$emit("DeliverCount",this.SlideCount)
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
      height: 6.15rem;
      width: 12.5rem;
      .swiper-wrapper{
        // height: rem;
        position: relative;
        // .animated{

        // }
        .swiper-slide{

          // float: left;
          // overflow: hidden;
          position: absolute;
          top: 0;
          left: 0;
          transition: 1s ;
          // transition-delay: .5s;
          opacity: 0;
        }
        .swiper-slide-active{
          opacity: 1;
        }
      }
    }
  }
  .contentContainer-b-active-enter-active{
    transition: 1s ease;
    transition-delay: .2s;
  }
  .contentContainer-b-active-leave-active
  {
    transition: 1s ease;
  }
  .contentContainer-b-active-leave-from,
  .contentContainer-b-active-enter-to
  {
    transform: translate3d(0,0,0);
  }
  .contentContainer-b-active-leave-to,
  .contentContainer-b-active-enter-from
  {
    transition: 1s ease;
    transform: translate3d(-2rem,0,0);
  }
  
  .titleContainer-b-active-enter-active{
    transition: .5s ease;
    transition-delay: .2s;
  }
  .titleContainer-b-active-leave-active
  {
    transition: 1s ease;

  }
  .titleContainer-b-active-leave-from,
  .titleContainer-b-active-enter-to
  {
    transform: translate3d(0,0,0);
  }
  .titleContainer-b-active-leave-to,
  .titleContainer-b-active-enter-from
  {
    transition: 1s ease;
    transform: translate3d(2rem,0,0);
  }
</style>