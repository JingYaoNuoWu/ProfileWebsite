<template>
  <div class="wheeltipbox" :class="{show:active}" @click="nextpage">
    <div class="mouseicon">
      <img src="@/assets/images/mouse.svg" alt="">
    </div>
    <div class="arrowcontainer">
      <div class="arrow rotate">
        <img src="@/assets/images/arrow.png" alt="">
      </div>
    </div>
    <div class="wheelline"></div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  props:['pageidx'],
  data(){
    return{
      pageindex:this.$props.pageidx
    }
  },
  methods:{
    nextpage(){
     switch(this.$props.pageidx){
          case 1:
            this.$emit("changePage",2)
          break;
          case 2:
            this.$emit("changePage",3)
          break;
          case 3:
            this.$emit("changePage",4)
          break;
        }
    }
  },
  computed:{
    active(){
      let activetag = this.$props.pageidx
      return activetag == 0||activetag ==3 ? false : true;
    },
  }
  
})
</script>


<style lang="scss" scoped>
@keyframes rotate{
  0%{
    transform: translate3d(0,-.3rem,0);
  }
  100%{
    transform: translate3d(0,3rem,0);
  }
}
  .wheeltipbox {
    position:fixed;
    bottom:0rem;
    right: 1rem;
    width: 1rem;
    height: 2.5rem;
    z-index: 10;
    flex-direction: column;
    display: flex;
    opacity: 0;
    .mouseicon{
      width: .2rem;
  
    }
    .arrowcontainer{
      width: .2rem;
      height: .5rem;
      overflow: hidden;
      .rotate{
        transition: .5s;
        animation: rotate 2s linear infinite;
      }
      .arrow{
        width: .2rem;
        transform: translate3d(0,-.3rem,0);
        img{
          display: inline-block;
          transform: rotateZ(-90deg);
          width: .2rem;
        }
    }
    }
    
    .wheelline{
      border: .01rem solid #000;
      height: 1rem;
      margin-top: .1rem;
    }
  }
  .show{
    align-items: center;
    opacity: 1;
    transition: 1s;
    cursor: pointer;
  }
</style>