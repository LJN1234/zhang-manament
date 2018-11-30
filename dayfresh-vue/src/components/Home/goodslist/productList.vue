<template>
    <div>
      <div class="goodslist" v-for='item in goodslist' :key='item._id' v-if="!item.second_title">
        <div class="goods">
          <div class="goodsLeft">
            <img :src="item.image">
          </div>
          <div class="goodsRight">
            <div class="des">
              <h4>{{item.name}}</h4>
              <span>{{item.subtitle}}</span>
            </div>
            <div class="message">
              <div class="price">
                <div>￥19.9</div> 
                <div style="color: rgb(249, 198, 38);font-size: 18px;">￥14.9</div>
                <div class="imgIcon">
                  <!-- <img :src="item.promote_tag"> -->
                </div>
              </div> 
              <div class="cart" :style="show">
                <img :src="item.cart_image" @click="cart">
              </div>
              <div class="calc" :style="hide">
                <button @click="btnSubtract($event)" class='btnSubtract'>-</button>
                <span>{{msg}}</span>
                <button @click="btnAdd($event)" class='btnAdd'>+</button>
              </div>
            </div>
          </div> 
        </div>
        <h2>{{item.second_title}}</h2>
      </div>
    </div>
</template>
<script>
import Vue from 'vue';
import { Stepper } from 'vant';
Vue.use(Stepper);
export default {
  data(){
    return{
      msg: 1,
      hide: {
      display: "none",
      },
      show:{
      display: "block",
      },
      goodslist:[],
      active:{
        display:"none"
      }
    }
  },
  mounted(){
    this.$axios.get('/admin/product/getProductList').then(res=>{
      this.goodslist=[...res.data]
    })
  },
  methods:{
    //数量减
    btnSubtract(e){
      let targetParent = e.target.parentNode
      let currentSubtract = e.target.nextElementSibling.innerText*1;
          if(currentSubtract>1){
            currentSubtract-=1;
            e.target.nextElementSibling.innerText=currentSubtract
          }else{
            targetParent.style.display="none"
            targetParent.previousElementSibling.style.display="block"
            return false
          }     
    },
    cart(e){
      let currentImg = e.target;
      currentImg.parentNode.style.display = "none";
      let calc = currentImg.parentNode.nextElementSibling;
        calc.style.display='block';
    },
    //数量加
    btnAdd(e){
      let currentAdd = e.target.previousElementSibling.innerText*1;
          currentAdd+=1;
          e.target.previousElementSibling.innerText=currentAdd
      // console.log(currentAdd)
    },
  }
}
</script>
<style lang='scss' scope>
      .goodslist{
        padding: 0 10px;
        .goods{
          overflow: hidden;
          .goodsLeft{
            width: 25%;
            height: 100px;
            float: left;
            img{
              width: 100%;
              height: 100;
            }
          }
          .goodsRight{
            width: 75%;
            float: right;
            padding-left: 10px;
            text-align: left;
            .des{
              h4{
                font-weight: bold;
                font-size: 14px;
              }
              span{
                font-size: 12px;
                color: rgb(174, 174, 174);
              }
            }
            .message{
              padding: 10px;
              margin-top: 20px;
              overflow: hidden;
              position: relative;
              .price{
                position: relative;
                width: 100px;
                font-size: 14px;
                float: left;
                color: rgb(255, 72, 145);
              }
              .cart{
                position: absolute;
                right: 23px;
                bottom: 8px;
                float: right;
                width: 50px;
                height: 50px;
                img{
                  display: block;
                  width: 100%;
                  height: 100%;
                }
              }
              .imgIcon{
                position: absolute;
                width: 50px;
                height: 22px;
                right: 8px;
                bottom: 4px;
                img{
                  width: 100%;
                  height: 100%;
                }
              }
              .calc{
                position: absolute;
                right: -20px;
                bottom: 35px;
                width: 100px;
                height: 18px;
                &>button{
                  display: inline-block;
                  width: 18px;
                  height: 100%;
                  font-weight: bold;
                  color: rgb(255, 255, 255);
                  line-height: 18px;
                  text-align: center;
                  border-radius: 50%;
                  background: rgb(255, 72, 145);
                  &:first-child{
                    line-height: 15px;
                    background: none;
                    border: 1px solid rgb(255, 72, 145);
                    color: rgb(255, 72, 145);
                  }
                }
                &>span{
                  padding:0 10px;
                }
              }
            }
          }
        }
      }
</style>
