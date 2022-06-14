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
       <div class="butnbox">
        <div class="butn" @click="ChangeSlidePage(1)">
          <div class="imgcontainer imgcontainer1" :class="{active:UsePage == 1}">
          </div>
        </div>
        <div class="butn" @click="ChangeSlidePage(2)">
          <div class="imgcontainer imgcontainer2" :class="{active:UsePage == 2}">
          </div>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  props:['pageidx','SlideCurrentPage','UsePageIndex'],
  data(){
    return{
      SlideCount:3, //从1开始
      UsePage:1
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
    flex-direction: column;
    height: 100%;
    width: 100%;
    position: relative;
    .swiper-container{
      display: flex;
      flex-direction: column;
      height: 6.5rem;
      width: 15.5rem;
      .swiper-wrapper{
        height: 100%;
        position: relative;
        .swiper-slide{
          .activeTextContainer{
            display: flex;
            justify-content: space-between;
            .contentContainer-b{
              img{
                display: block;
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
          position: absolute;
          top: 0;
          left: 0;
        }
        .swiper-slide-active{
          z-index: 10;
        }
      }
      .butnbox{
      width: 100%;
      display: flex;
       .butn{
         margin-right: .4rem;
        .imgcontainer{
          border: 1px solid transparent;
        }
        .imgcontainer:hover{
          cursor: pointer;
        }
        .active{
          border: 1px solid #242933;
        }
        .imgcontainer1{
          width: .6rem;
          height: .6rem;
          background: url(@/assets/images/blog.svg) no-repeat 0/1.6rem 2rem;
        }
        .imgcontainer2{
          width: .6rem;
          height: .6rem;
          background: url(@/assets/images/githublogo.svg) no-repeat 0/.56rem 2rem;
        }
      }
    }
    }
  }
  .contentContainer-b-active-enter-active{
    transition: .5s ease;
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
    opacity: 0;
    transition: .3s ease;
    transform: translate3d(2rem,0,0);
  }
</style>