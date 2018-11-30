<template>
  <div id="Header">
    <div clas="head_logo_left">
      <img src="../../assets/img/home_head_left.png" width=50 >
    </div>
    <div class="head_city">
      <span>广州市天...</span>
      <span class="icon-chevron-down iconfont"></span>
    </div>
    <div class='head_search_right'>
      <input type="text" placeholder="搜索">
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{

    }
  }
}
</script>
<style lang='scss' scoped>
  #Header{
    width:100%;
    height:40px;
    padding:3px 8px;
    box-sizing:border-box;
    display:flex;
    line-height:34px;
    // background-color:#ccc;
    .head_logo_left{
      flex:1;
    }
    .head_city{
      flex:1;
      text-align:left;
      padding-left:10px;
      span{
        font-size:18px;
      }
      .iconfont{
        vertical-align:middle;
      }
    }
    .head_search_right{
      flex:1;
      input{
        width:100%;
        height:30px;
        border:1px solid #ccc;
        border-radius:20px;
        padding-left:10px;
      }
    }
  }
</style>
