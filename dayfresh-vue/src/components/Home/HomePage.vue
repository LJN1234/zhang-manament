<template>
  <div id="Home">
    <div class='head'>
      <v-header></v-header>
      <div class="head_list">
        <ul class='goodsList'>
          <!-- <router-link tag='li' :to="item.to" v-for="(item,idx) in goodsList" :key='item.id'> -->
            <!-- <span :class="{active :currentIdx==idx}" @click='changeIdx(idx)'>{{item.name}}</span> -->
            <van-tabs
            swipeable
            @click='changeIdx'
            >
              <van-tab v-for="(item,idx) in goodsList" :index='idx' :title="item.name" :key='idx'></van-tab>
            </van-tabs>
        </ul>
        <span class="icon-chevron-down iconfont" @click='show_list'></span>
      </div>
      <div class='moreList' :style="list_toggle">
        <div class='moreList_title'>
          <h4>全部分类</h4>
          <span @click='close_list'><i class='icon-x iconfont'></i></span>
        </div>
        <ul class='moreList_liebiao'>
          <li v-for="item in goodsList" :key='item.id'>
            <img :src="item.img" >
            <h4>{{item.name}}</h4>
          </li>
        </ul>
      </div>
    </div>
    <div class='main'>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Header from "../commons/Header";
import Vue from 'vue';
import { Tab, Tabs } from 'vant';
Vue.use(Tab).use(Tabs);
export default {
  data() {
    return {
      goodsList: [
        {
          id: 1,
          name: "热卖",
          img: require("@/assets/img/list/1.png"),
          to: "/hot"
        },
        {
          id: 2,
          name: "会员5折",
          img: require("@/assets/img/list/2.png"),
          to: "/vip"
        },
        {
          id: 3,
          name: "安心菜场",
          img: require("@/assets/img/list/3.png"),
          to: "/foodmarket"
        },
        {
          id: 4,
          name: "水果",
          img: require("@/assets/img/list/4.png"),
          to: "/fruits"
        },
        {
          id: 5,
          name: "蔬菜",
          img: require("@/assets/img/list/5.png"),
          to: "/vegetable"
        },
        {
          id: 6,
          name: "肉蛋",
          img: require("@/assets/img/list/6.png"),
          to: "/eggs"
        },
        {
          id: 7,
          name: "水产",
          img: require("@/assets/img/list/6.png"),
          to: "/shuichan"
        },
        {
          id: 8,
          name: "乳品",
          img: require("@/assets/img/list/7.png"),
          to: "/rupin"
        },
        {
          id: 9,
          name: "零食",
          img: require("@/assets/img/list/8.png"),
          to: "/lingshi"
        },
        {
          id: 10,
          name: "酒饮",
          img: require("@/assets/img/list/9.png"),
          to: "/jiuyin"
        },
        {
          id: 11,
          name: "茶饮",
          img: require("@/assets/img/list/10.png"),
          to: "/chayin"
        },
        {
          id: 12,
          name: "茶饮",
          img: require("@/assets/img/list/10.png"),
          to: "/chayin"
        },
        {
          id: 13,
          name: "茶饮",
          img: require("@/assets/img/list/10.png"),
          to: "/chayin"
        },
        {
          id: 14,
          name: "茶饮",
          img: require("@/assets/img/list/10.png"),
          to: "/chayin"
        }
      ],
      list_toggle: { display: "none" },
      currentIdx: 0
    };
  },
  components: {
    "v-header": Header
  },
  methods: {
    //显示全部分类
    show_list() {
      this.list_toggle.display = "block";
    },
    //隐藏全部分类
    close_list() {
      this.list_toggle.display = "none";
    },
    changeIdx(index, title) {
      let to = this.goodsList[index].to;
      window.location.href="/#/HomePage"+to
    }
  }
};
</script>
<style lang='scss' >
#Home {
  display: flex;
  flex-direction: column;
  .head {
    height: 82px;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background-color: #fff;
    z-index: 99999;
    .head_list {
      height: 42px;
      padding: 0 10px;
      display: flex;
      .goodsList {
        flex: 1.8;
        white-space: nowrap;
        overflow-x: auto;
        li {
          display: inline-block;
          padding: 0 5px 5px 5px;
          height: 100%;
          line-height: 42px;
          span {
            font-size: 14px;
            display: inline-block;
            height: 100%;
          }
        }
      }
      .iconfont {
        flex: 0.2;
        font-size: 26px;
        padding-top: 5px;
        color: rgb(155, 152, 153);
      }
    }
    .moreList {
      position: absolute;
      top: 40px;
      background-color: #fff;
      .moreList_title {
        display: flex;
        padding: 5px 10px;
        border-bottom: 1px solid #ccc;
        h4 {
          flex: 1.8;
          font-size: 18px;
          line-height: 35px;
        }
        span {
          width: 35px;
          height: 35px;
          display: inline-block;
          border: 1px solid #666;
          border-radius: 50%;
          line-height: 33px;
          transform: scale(0.7);
        }
      }
      .moreList_liebiao {
        width: 100%;
        padding: 15px 0;
        overflow: hidden;
        height: 300px;
        overflow-y: auto;
        li {
          width: 33.3%;
          padding: 10px;
          float: left;
          img {
            display: block;
            width: 40%;
            height: 36px;
            margin: 0 auto;
          }
        }
      }
    }
  }
  .main {
    flex: 1;
    overflow-y: auto;
    margin-top: 82px;
  }
  .active {
    color: #ff6cb5;
    border-bottom: 2px solid #ff6cb5;
  }
}
.van-tab--active{
    &>span{
      height:96%;
      display: inline-block;
      color:#FF6CB5;
      border-bottom:3px solid #FF6CB5;
    }
  }
</style>