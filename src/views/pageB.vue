<template>
  <div class="container-main-page-b">
    <div class="swiper-container">
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
                <div class="title-title">
                  <h1>记录本</h1>
                </div>
                <div class="title-line">
                </div>
                <!-- <span>GitHub</span> -->
                <div class="tltle-content title-content1">
                  <span>解决问题的过程</span>

                </div>
                <div class="tltle-content title-content3">  
                  <span>灵感一现的时刻</span>
                </div>
                <div class="tltle-content title-content4">
                  <span>记录一切有关code,编程的记录本</span>

                </div>
                <div class="tltle-content title-content5">
                  <span> <a href="https://www.cnblogs.com/funk1/" target="_Blank">博客园地址</a> </span>

                </div>
              </div>
            </transition>
          </div>
        </div>
        <div class="swiper-slide" :class="{'swiper-slide-active':UsePage == 2}">
          <div class="activeTextContainer" >
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
        </div>
        <div class="swiper-slide" :class="{'swiper-slide-active':ActiveSlide == 3}"></div>
      </div>
      <button @click="ChangeSlidePage(1)">==1==</button>
      <button @click="ChangeSlidePage(2)">==2==</button>
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
      width: 15.5rem;
      .swiper-wrapper{
        // height: rem;
        height: 100%;
        width: 100%;
        position: relative;
        // .animated{

        // }
        .swiper-slide{
          width: 100%;
          height: 100%;
          .activeTextContainer{
            display: flex;
            justify-content: space-between;
            .contentContainer-b{
              
              img{
                width: 12rem;
              }
            }
            .titleContainer-b{
              position: relative;
              .title-line{
                width: 3rem;
                height: .6rem;
              }
              .title-title{
                font-size: .3rem;
              }
              .title-line::before{
                content: "";
                position: absolute;
                right: .6rem;
                width: 1rem;
                height: .6rem;
                border-top: 1px solid #242933;
                transform: rotate(-34deg);
                transform-origin: top right;
              }
              .tltle-content{
                margin: .1rem 0;
                text-align: right;
              }
              .title-content5{
                font-weight: bold;
              }
            }
          }
          // float: left;
          // overflow: hidden;
          position: absolute;
          top: 0;
          left: 0;
          // transition: 1s ;
          // transition-delay: .5s;
          // opacity: 0;
        }
        .swiper-slide-active{
          z-index: 10;
        }
      }
    }
  }
  .contentContainer-b-active-enter-active{
    transition: .5s ease;
    // transition-delay: .5s;
  }
  .contentContainer-b-active-leave-active
  {
    transition: .5s ease;
  }
  .contentContainer-b-active-leave-from,
  .contentContainer-b-active-enter-to
  {  
    transition-delay: .3s;
    opacity: 1;
    transform: translate3d(0,0,0);
  }
  .contentContainer-b-active-leave-to,
  .contentContainer-b-active-enter-from
  { 
    // transition-delay: 1s;

    opacity: 0;
    transition: .3s ease;
    transform: translate3d(-2rem,0,0);
  }
  
  .titleContainer-b-active-enter-active{
    transition: .5s ease;
  }
  .titleContainer-b-active-leave-active
  {
    transition: 1s ease;

  }
  .titleContainer-b-active-leave-from,
  .titleContainer-b-active-enter-to
  { 
    transition-delay: .3s;
    opacity: 1;
    transform: translate3d(0,0,0);
  }
  .titleContainer-b-active-leave-to,
  .titleContainer-b-active-enter-from
  { 
    // transition-delay: 1s;

    opacity: 0;
    transition: .3s ease;
    transform: translate3d(2rem,0,0);
  }
</style>