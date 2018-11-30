import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

//引入公共组件
import Header from '@/components/commons/Header';
import Footer from '@/components/commons/Footer';

//引入其他组件
import HomePage from '@/components/Home/HomePage';
  import Hot from '@/components/Home/goodslist/Hot';
  import Vip from '@/components/Home/goodslist/vip';
  import foodmarket from '@/components/Home/goodslist/foodmarket';
  import Fruits from '@/components/Home/goodslist/Fruits';
  import Vegetable from '@/components/Home/goodslist/Vegetable';
import VipPage from '@/components/vip/VipPage';
import SearchPage from '@/components/Search/SearchPage';
import MinePage from '@/components/Mine/MinePage';
import CartPage from '@/components/Cart/CartPage';
import productList from '@/components/Home/goodslist/productList';

export default new Router({
  routes: [
    {
      path: '/header',
      name: 'Header',
      component: Header
    },
    {
      path: '/footer',
      name: 'Footer',
      component: Footer
    },
    {
      path: '/homepage',
      name: 'HomePage',
      component: HomePage,
      redirect:'homepage/hot',
      children:[
        {
          path: 'hot',
          name: 'Hot',
          component: Hot
        },
        {
          path:'vip',
          name:'Vip',
          component:Vip
        },
        {
          path:'foodmarket',
          name:'foodmarket',
          component:foodmarket
        },
        {
          path:'fruits',
          name:'Fruits',
          component:Fruits
        },
        {
          path:'vegetable',
          name:'Vegetable',
          component:Vegetable
        }
      ]
    },
    {
      path: '/vippage',
      name: 'VipPage',
      component: VipPage
    },
    {
      path: '/minepage',
      name: 'MinePage',
      component: MinePage
    },
    {
      path: '/searchpage',
      name: 'SearchPage',
      component: SearchPage
    },
    {
      path: '/cartpage',
      name: 'CartPage',
      component: CartPage
    },
    {
      path: '/productList',
      name: 'productList',
      component: productList
    },
    {
      path:'/',
      redirect:'/homepage'
    } //默认渲染的页面
  ]
})
