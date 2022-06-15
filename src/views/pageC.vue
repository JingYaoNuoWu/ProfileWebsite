<template>
  <div class="pagec-container">
    <div class="wapper">
      <div class="textbox">

      </div>
      <div class="imgbox"></div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  props:['pageidx'],
})
</script>

<style lang="scss" scoped>
  .pagec-container{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 1rem 1rem;
    .wapper{
      width: 100%;
      height: 100%;
    }
  }
</style>