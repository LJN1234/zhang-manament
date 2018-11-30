<template>
  <div id="Hot">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="@/assets/img/hot_bannner-1.gif">
        </div>
        <div class="swiper-slide">
          <img src="@/assets/img/hot_bannner-2.gif">
        </div>
      </div>
      <!-- Add Pagination(分页器) -->
      <div class="swiper-pagination">1</div>
    </div>
    <div class="category-wrap">
      <div>
        <ul class='hotMiaoShaList'>
          <li id="item.text" v-for='item in hotMiaoShaList' :key='item.id'>
            <img slot="icon" :src="item.imgurl">
            <span>{{item.text}}</span>
          </li>
        </ul>
      </div> 
      <div>
        <ul class='cartWrap'>
          <li v-for='item in cartWrap' :key='item.id'>
            <img :src="item.imgurl"/>
          </li>
        </ul>
      </div>
    </div>
    <div class="product-container">
      <div class='container-imgtop'>
        <img src="@/assets/img/cart-wrap/cartWrap.gif">
      </div>
    </div>
    <vproductList/>
  </div>
</template>
<script>
import vproductList from '@/components/Home/goodslist/productList';
import Swiper from 'swiper';
export default {
  data(){
    return{
      hotMiaoShaList:[
        {
          id:1,
          text:"限时秒杀",
          imgurl:require('@/assets/img/category-wrap/miaosha1.png'),
          to:""
        },
        {
          id:2,
          text:"88元现金",
          imgurl:require('@/assets/img/category-wrap/miaosha2.png'),
          to:""
        },
        {
          id:3,
          text:"免费吃蟹",
          imgurl:require('@/assets/img/category-wrap/miaosha3.png'),
          to:""
        },
        {
          id:4,
          text:"每日鲜语",
          imgurl:require('@/assets/img/category-wrap/miaosha4.png'),
          to:""
        },
        {
          id:5,
          text:"4元开卡",
          imgurl:require('@/assets/img/category-wrap/miaosha5.png'),
          to:""
        },
      ],
      cartWrap:[
        {
          id:'1',
          text:"free",
          imgurl:require('@/assets/img/cart-wrap/free.png'),
        },
        {
          id:2,
          text:"vipcart",
          imgurl:require('@/assets/img/cart-wrap/vipcart.png'),
        }
      ]
    }
  },
  components:{
    vproductList
  },
  mounted(){
    var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    this.$axios.get('/admin/product/getProductList').then(res=>{
      console.log(res.data)
    })
  },
  methods:{

  },
  //监听路由的变化
  watch:{

  }
}
</script>
<style lang='scss' scoped>
  #Hot{
     .swiper-container {
      width: 100%;
      height: 100%;
      .swiper-pagination-fraction{
        width:50px;
        height:30px;
        line-height:28px;
        color:#fff;
        border-radius:10px;
        background-color:rgba(107, 114, 140,0.4);
        box-sizing:border-box;
        left:auto;
        right:0;
        margin:0 5px 0 0;
      }
    }
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
      img{
        display:block;
        width:100%;
      }
    }
    .category-wrap{
      background-color:#8A0000;
      .hotMiaoShaList{
            display:flex;  
        &>li{
            flex:1;
            padding:10px 10px 0 10px;
          &>img{
            display:block;
            width:70%;
            margin:0 auto;
          }
          &>span{
            display:block;
            padding-top:8px;
            color:#fff;
          }
        }
      }
      .cartWrap{
          width:100%;
          padding:13px;
        &>li{
          display:inline-block;
          width:50%;
          &>img{
            display:block;
            width:95%;
            margin:0 auto;
          }
        }
      }
    }
    .product-container{
        width:100%;
      .container-imgtop{
        &>img{
          display:block;
          width:100%;
        }
      }
    }
  }
</style>