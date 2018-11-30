<template>
  <footer id="Footer">
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item 
      :id="item.text"
      v-for="(item,idx) in list" 
      :key="item.id" 
      :class="{active :currentIdx===idx}"
      @click.native="changeIdx(item.router,idx)"      
      >
        <span slot='icon' :class="item.icon"></span>
        {{item.text}}
      </mt-tab-item>
    </mt-tabbar>
  </footer>
</template>
<script>
export default {
  data(){
    return{
      selected:'',
      currentIdx: 0,
      list:[
        {
          id:1,
          icon:'icon-shouye iconfont',
          text:'首页',
          name:'home',
          router:'HomePage'
        },
        {
          id:2,
          icon:'icon-huiyuan iconfont',
          text:'会员+',
          name:'vip',
          router:'VipPage'
        },
        {
          id:3,
          icon:'icon-zhinanzhen iconfont',
          text:'发现',
          name:'search',
          router:'SearchPage'
        },
        {
          id:4,
          icon:'icon-cart iconfont',
          text:'购物车',
          name:'cart',
          router:'CartPage'
        },
        {
          id:5,
          icon:'icon-person iconfont',
          text:'我的',
          name:'mine',
          router:'MinePage'
        },
      ]
    }
  },
  //计算属性
  computed:{

  },
  //生命周期函数
  mounted(){
      
  },
  //方法
  methods:{
    changeIdx(router,index){
      this.currentIdx=index; //修改索引的初始值
      this.$router.push({name:router})//跳到对应的路由页面
    }
  }
}
</script>
<style lang='scss' scope>
  #Footer{
    position:relative;
    width:100%;
    height:55px;
    .iconfont{
      font-size:22px;
      line-height: 24px;
    }
    .active{
      color:#FF6CB5;
    }
  }
</style>
