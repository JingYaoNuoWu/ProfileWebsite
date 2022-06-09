<template>
  <div class="topbarbox" :class="{activeTopBar:active}">
    <div class="topbarlogo">
      <a href="/">
        <img src="@/assets/images/logo.png" alt="">
      </a>
    </div>
    <div class="topbarcontent">
      <a class="topbarlink"  @click="$emit('changePage',{ $event , a:0})" href="/">
        <span v-show="!(pageidx==0)">
          首页
        </span>
        <b v-show="(pageidx==0)">
          首页
        </b>
      </a>
      <div class="topbarlink" @click="$emit('changePage',{$event,a:1})">
        <span v-show="!(pageidx==1)">
          2
        </span>
        <b v-show="(pageidx==1)">
          2
        </b>
      </div>
      <div class="topbarlink" @click="$emit('changePage',{$event,a:2})">
        <span v-show="!(pageidx==2)">
          3
        </span>
        <b v-show="(pageidx==2)">
          3
        </b>
      </div>
      <div class="topbarlink" @click="$emit('changePage',{$event,a:3})">
        <span v-show="!(pageidx==3)">
          4
        </span>
        <b v-show="(pageidx==3)">
          4
        </b>
      </div>
      
    </div>
    
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
    jump(e){
      e.preventDefault()
      console.log(this);
      
      
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
    display: none;
    align-items: center;
    position:fixed;
    top:0px;
    width: 100%;
    height: .7rem;
    background-color: white;
    z-index: 10;
    opacity: 0;
    transition: 100ms;
    justify-content: space-between;
    div{
      margin: 0 .3rem;
    }
    .topbarcontent{
      height: .25rem;
      display: flex;
      .topbarlink{
        padding: .05rem;
        user-select: none;
        cursor: pointer;
        margin-left: .4rem;
      }
      div :hover{
        color: blue;
      }
    }
    .topbarlogo{
      a{
        display: inline-block;
      }
      b{
        color: blue;
      }
    }
    img{
      height: .5rem;
    }
  }
  .activeTopBar{
    display: flex;
    opacity: 1
  }
</style>