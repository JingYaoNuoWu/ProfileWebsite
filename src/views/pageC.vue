<template>
  <div class="pagec-container">
    <div class="wapper">
      <div class="flexbox">
        <div class="textbox">
          <div class="occupybox-h1">
            <h1><span>123</span></h1>
          </div>
          <div v-for="item in 5" :key="item"  class="occupybox-content"><span>{{item}}</span>
          </div>
        </div>
        <div class="profile-box">
          <!-- <div class="profile-img-content"> -->
            <div><div style="height:50px;width:50px"></div></div>
            <div>
            <el-avatar shape="square" :size="100" :src="squareUrl" />123

            </div>
          <!-- </div> -->
          <div class="profile-text-content" v-for="(item,key,index) in data" :key="index">
            <label for="name">{{ key }}:</label>
            <span name="name">{{ item }}</span>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  props:['pageidx'],
  data(){
    return {
      data:{name:"Asay",age:"18",tender:"男"}
    }
  }
})
</script>

<style lang="scss" scoped>
  .pagec-container{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    .wapper{
      padding: 10% 20%;
      min-height: 100%;
      height: 100%;
      width: 100%;
      box-sizing: border-box;
      .flexbox{
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        .textbox{
          flex-grow: 3;
          .occupybox-h1{
            margin: .3rem 0;
          }
          .occupybox-content{
            margin: .1rem 0;
          }
        }
        .profile-box{
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          .profile-img-content{
          }
          .profile-text-content{
            box-sizing: border-box;
            padding: 5% 5%;
          }
        }
      }
    }
  }
</style>