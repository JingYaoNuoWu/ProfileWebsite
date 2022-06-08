<template>
  <h1 :class="{abc:active}">2</h1>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  props:['pageidx'],
  computed:{
    active(){
      let activetag = this.$props.pageidx
      return activetag == 0 ? true : false;
    }
  }
})
</script>

<style>

</style>