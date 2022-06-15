<template>
  <div class="container-main" >
    <home-top-bar :pageidx="CarouselIndex" @changePage="b($event)"></home-top-bar>
    <el-carousel
    class="swiper-container" 
    direction="vertical" 
    indicator-position="none"
    ref="carousel"
    :autoplay="false"
    :initial-index="CarouselIndex"
    @wheel="flag && a($event)"
    :loop="false"
    >
      <el-carousel-item class="carousel-item-page-a">
        <page-a :pageidx="CarouselIndex" @changePage="b($event)"></page-a>
      </el-carousel-item>
      <el-carousel-item class="carousel-item-page-b">
        <page-c></page-c>
      </el-carousel-item>
      <el-carousel-item class="carousel-item-page-c">
        <page-b :pageidx="CarouselIndex" :UsePageIndex=2 :SlideCurrentPage="SlideCurrentPage" @DeliverCount="GetSlideCount($event)" @DeliverSlideCurrentPage="GetSlideCurrentPage($event)"></page-b>
      </el-carousel-item>
      <el-carousel-item class="carousel-item-page-d">
        <page-d></page-d>
      </el-carousel-item>
    </el-carousel>
    <wheel-tip :pageidx="CarouselIndex" @changePage="changePage($event)"></wheel-tip>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import pageA from "@/views/pageA.vue";
import pageB from "@/views/pageB.vue";
import pageC from "@/views/pageC.vue";
import pageD from "@/views/pageD.vue";
import HomeTopBar from "@/views/HomeTopBar.vue";
import WheelTip from "@/views/WheelTip.vue";
export default defineComponent({
  components:{
    pageA,pageB,pageC,pageD,HomeTopBar,WheelTip
  },
  emits:["DeliverCount","DeliverSlideCurrentPage","changePage"],
  data(){
    return{
      flag:true,//防抖节流
      CarouselIndex:0, //页面索引
      SlideCurrentPage:1, //slide当前页 从1开始
      SlideCount:0 //第二页Slide的数量
    }
  },
  methods:{
    a(e){
      if(e.wheelDelta<0){
        switch(this.CarouselIndex){
          case 0:
            this.CarouselIndex++
            history.replaceState({},"","?page=2")
            this.$refs.carousel.setActiveItem(1)
          break;
          case 1:
            this.CarouselIndex++
            history.replaceState({},"","?page=3")
            this.$refs.carousel.setActiveItem(2)
          break;
          case 2:
            this.CarouselIndex++
            history.replaceState({},"","?page=4")
            this.$refs.carousel.setActiveItem(3)
          break;
          case 3:
          break;
        }
        }else{
          switch(this.CarouselIndex){
            case 0:
            break;
            case 1:
              this.CarouselIndex--
              history.replaceState({},"","?page=1")
              this.$refs.carousel.setActiveItem(0)
            break;
            case 2:
              this.CarouselIndex--
              history.replaceState({},"","?page=2")
              this.$refs.carousel.setActiveItem(1)
            break;
            case 3:
              this.CarouselIndex--
              history.replaceState({},"","?page=3")
              this.$refs.carousel.setActiveItem(2)
            break;
          }
        }
      this.flag = false
      setTimeout(()=>{
        this.flag = true
      },1000)
    },
    b(x){
      if(this.$route.path == "/"){
        x.$event.preventDefault()
      }
      let index = x.a
      switch(index){
        case 0:
          this.CarouselIndex = index
          history.replaceState({},"","?page=1")
          this.$refs.carousel.setActiveItem(0)
        break;
        case 1:
          this.CarouselIndex = index
          history.replaceState({},"","?page=2")
          this.$refs.carousel.setActiveItem(1)
        break;
        case 2:
          this.CarouselIndex = index
          history.replaceState({},"","?page=3")
          this.$refs.carousel.setActiveItem(2)
        break;
        case 3:
          this.CarouselIndex = index
          history.replaceState({},"","?page=4")
          this.$refs.carousel.setActiveItem(3)
        break;
      }
    },
    changePage(index){
      console.log(index);
      switch(index){
        case 0:
          this.CarouselIndex = index
          history.replaceState({},"","?page=1")
          this.$refs.carousel.setActiveItem(0)
        break;
        case 1:
          this.CarouselIndex = index
          history.replaceState({},"","?page=2")
          this.$refs.carousel.setActiveItem(1)
        break;
        case 2:
          this.CarouselIndex = index
          history.replaceState({},"","?page=3")
          this.$refs.carousel.setActiveItem(2)
        break;
        case 3:
          this.CarouselIndex = index
          history.replaceState({},"","?page=4")
          this.$refs.carousel.setActiveItem(3)
        break;
      }
    },
    //第二页carousel定时器
    CarouselInterval(){
      let currentpageindex = this.SlideCurrentPage-1
      let index = this.SlideCount-1
      if(currentpageindex < index){
        currentpageindex ++
      }else{
        currentpageindex = 0
      }
      this.SlideCurrentPage = currentpageindex + 1
    },
    GetSlideCount(count){
      this.SlideCount = count
    },
    GetSlideCurrentPage(index){
      this.SlideCurrentPage = index
    }
  },
  mounted(){
    let queryObj = this.$route.query
    if(JSON.stringify(queryObj) == "{}"){
      this.CarouselIndex = 0
    }else if( queryObj.page == "1" ){ 
      this.CarouselIndex = 0
    }else if( queryObj.page == "2" ){
      this.CarouselIndex = 1
    }else if( queryObj.page == "3" ){
      this.CarouselIndex = 2
    }else if( queryObj.page == "4" ){
      this.CarouselIndex = 3
    }
  }
})
</script>
<style>
.el-carousel__container {
  height: 100%;
}
</style>
<style lang="scss" scoped>
@import "@/assets/css/var.scss";
/*carousel容器*/
.container-main{
  width: 100%;
  height: 100%;
  background-color: rgb(59, 44, 44);
  min-height: 720px;
}
.swiper-container{
  background: #f8f9fb url(../assets/images/index.png) repeat;
}
// .carousel-item-page-a{
//   background-color: #e6bfbf;
// }
// .carousel-item-page-b{
//   background-color: #e4d0e3;
// }
// .carousel-item-page-c{
//   background-color: #b1b3ca;
// }
// .carousel-item-page-d{
//   background-color: #c7b6b6;
// }
/*轮播图*/
.swiper-container {
  height: 100%;
}
</style>
