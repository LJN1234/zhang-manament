<template>
  <div id="VipPage">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" class="img" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);
export default {
  data(){
    return{
        images: [
        'https://img.yzcdn.cn/2.jpg',
        'https://img.yzcdn.cn/2.jpg'
      ]
    }
  }
}
</script>
<style lang='scss' scoped>
    .img{
      // width:100px;
    }
</style>