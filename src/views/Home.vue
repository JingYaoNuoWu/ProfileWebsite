<template>
  <div class="container-main" >
    <home-top-bar :pageidx="pageindex"></home-top-bar>
    <div style="position:fixed;z-index:20">
      {{ pageindex }}{{flag}}
    </div>
    <el-carousel 
    class="swiper-container" 
    direction="vertical" 
    indicator-position="none"
    ref="carousel" 
    :autoplay="false"
    :initial-index="pageindex"
    @wheel="flag && a($event)"
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

<script lang="ts">
import { ref, onMounted } from "vue";
import PlayList from "@/components/PlayList.vue";
import { swiperList, NavName } from "@/enums";
import { HttpManager } from "@/api";
import mixin from "@/mixins/mixin";
import { SetUp } from "@element-plus/icons-vue/dist/types";
import { defineComponent, reactive, getCurrentInstance } from "vue";
import pageA from "@/views/pageA.vue";
import pageB from "@/views/pageB.vue";
import pageC from "@/views/pageC.vue";
import pageD from "@/views/pageD.vue";
import HomeTopBar from "@/views/HomeTopBar.vue";
export default defineComponent({
  components:{
    pageA,pageB,pageC,pageD,HomeTopBar
  },
  data(){
    return{
      flag:true,//防抖节流
      pageindex:0, //判断初始页面
    }
  },
  methods:{
    a(this: any, e:any){
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
    }
  },
  setup(){
    /**
     * 鼠标滚轮事件
     * 滚轮触发的时候应该给子组件传一个标识表示页面是从哪个页面出发的
     */
  
    
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
  background-color: red;
  min-height: 720px;
}
.carousel-item-page-a{
  background-color: #2a1414;
}
.carousel-item-page-b{
  background-color: #dd40d5;
}
.carousel-item-page-c{
  background-color: #8f92bc;
}
.carousel-item-page-d{
  background-color: #bc8f8f;
}


/*轮播图*/
.swiper-container {
  height: 100%;
}


</style>
