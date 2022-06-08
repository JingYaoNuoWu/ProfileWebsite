<template>
  <div class="topbarbox" :class="{activeTopBar:active}"></div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  props:['pageidx'],
  data(){
    return{

    }
  },
  computed:{
    active(){
      let activetag = this.$props.pageidx
      return activetag == 0 ? false : true;
    },
  }
  
})
</script>


<style lang="scss" scoped>
  .topbarbox {
    position:fixed;
    top:0px;
    width: 100%;
    height: 70px;
    background-color: white;
    z-index: 10;
    opacity: 0;
    transition: 100ms;
  }
  .activeTopBar{
    opacity: 1
  }
</style>