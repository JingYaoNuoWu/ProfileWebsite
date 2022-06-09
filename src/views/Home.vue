<template>
  <div class="container-main" >
    <home-top-bar :pageidx="pageindex" @changePage="b($event,x)"></home-top-bar>
    <el-carousel
    class="swiper-container" 
    direction="vertical" 
    indicator-position="none"
    ref="carousel"
    :autoplay="false"
    :initial-index="pageindex"
    @wheel="flag && a($event)"
    :loop="false"
    >
      <el-carousel-item class="carousel-item-page-a">
        <page-a :pageidx="pageindex"></page-a>
      </el-carousel-item>
      <el-carousel-item class="carousel-item-page-b">
        <page-b :pageidx="pageindex"></page-b>
      </el-carousel-item>
      <el-carousel-item class="carousel-item-page-c">
        <page-c></page-c>
      </el-carousel-item>
      <el-carousel-item class="carousel-item-page-d">
        <page-d></page-d>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import pageA from "@/views/pageA.vue";
import pageB from "@/views/pageB.vue";
import pageC from "@/views/pageC.vue";
import pageD from "@/views/pageD.vue";
import HomeTopBar from "@/views/HomeTopBar.vue";
export default defineComponent({
  components:{
    pageA,pageB,pageC,pageD,HomeTopBar
  },
  emits:["changePage"],
  data(){
    return{
      flag:true,//防抖节流
      pageindex:0, //判断初始页面
    }
  },
  methods:{
    a(e){
      if(e.wheelDelta<0){
        switch(this.pageindex){
          case 0:
            this.pageindex++
            history.replaceState({},"","?page=2")
            this.$refs.carousel.setActiveItem(1)
          break;
          case 1:
            this.pageindex++
            history.replaceState({},"","?page=3")
            this.$refs.carousel.setActiveItem(2)
          break;
          case 2:
            this.pageindex++
            history.replaceState({},"","?page=4")
            this.$refs.carousel.setActiveItem(3)
          break;
          case 3:
          break;
        }
        }else{
          switch(this.pageindex){
            case 0:
            break;
            case 1:
              this.pageindex--
              history.replaceState({},"","?page=1")
              this.$refs.carousel.setActiveItem(0)
            break;
            case 2:
              this.pageindex--
              history.replaceState({},"","?page=2")
              this.$refs.carousel.setActiveItem(1)
            break;
            case 3:
              this.pageindex--
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
          this.pageindex = index
          history.replaceState({},"","?page=1")
          this.$refs.carousel.setActiveItem(0)
        break;
        case 1:
          this.pageindex = index
          history.replaceState({},"","?page=2")
          this.$refs.carousel.setActiveItem(1)
        break;
        case 2:
          this.pageindex = index
          history.replaceState({},"","?page=3")
          this.$refs.carousel.setActiveItem(2)
        break;
        case 3:
          this.pageindex = index
          history.replaceState({},"","?page=4")
          this.$refs.carousel.setActiveItem(3)
        break;
      }
    },
    
  },
  mounted(){
    let queryObj = this.$route.query
    if(JSON.stringify(queryObj) == "{}"){
      this.pageindex = 0
    }else if( queryObj.page == "1" ){ 
      this.pageindex = 0
    }else if( queryObj.page == "2" ){
      this.pageindex = 1
    }else if( queryObj.page == "3" ){
      this.pageindex = 2
    }else if( queryObj.page == "4" ){
      this.pageindex = 3
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
.carousel-item-page-a{
  background-color: #e6bfbf;
}
.carousel-item-page-b{
  background-color: #e4d0e3;
}
.carousel-item-page-c{
  background-color: #b1b3ca;
}
.carousel-item-page-d{
  background-color: #c7b6b6;
}
/*轮播图*/
.swiper-container {
  height: 100%;
}
</style>
