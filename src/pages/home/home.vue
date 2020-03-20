<!--  -->
<template>
  <div class="msite">
    <!-- header -->
    <Header title="首页">
      <router-link class="header_search" slot="left" to="/search">
        <i class="iconfont icon-sousuo"></i>
      </router-link>
      <router-link slot="right" class="header_login" :to="{ path: '/login' }">
        登录|注册
      </router-link>
    </Header>
    <div class="miste-content-wrapper">
      <div class="miste-content">
        <nav class="msite_nav">
          <!-- swiper -->
          <div class="swiper-container" v-if="categorys.length">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                v-for="(x, x_index) in categorysArr"
                :key="x_index"
              >
                <a
                  href="javascript:;"
                  class="link_to_food"
                  v-for="(y, y_index) in x"
                  :key="y_index"
                >
                  <div class="food_container">
                    <img :src="baseImageUrl + y.image_url" alt="" />
                  </div>
                  <span>{{ y.title }}</span>
                </a>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
          <img src="./images/msite_back.svg" alt="back" v-else />
        </nav>
        <!-- list -->
        <div class="msite_shop_list">
          <div class="shop_header">
            <i class="iconfont icon-xuanxiang"></i>
            <span class="shop_header_title">附近商家</span>
          </div>
          <ShopList />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import Header from "../../components/header/header";
import ShopList from "../../components/shopList/shopList";
import { reqCategorys } from "../../api/index";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      baseImageUrl: "https://fuss10.elemecdn.com"
    };
  },

  components: {
    Header,
    ShopList
  },

  computed: {
    ...mapState(["address", "categorys",'shops']),

    categorysArr() {
      const { categorys } = this;
      const arr = [];
      let minArr = [];

      categorys.forEach(c => {
        if (minArr.length == 8) {
          minArr = [];
        }
        if (minArr.length == 0) {
          arr.push(minArr);
        }
        minArr.push(c);
      });
      return arr;
    }
  },
  watch: {
    categorys() {
      this.$nextTick(function() {
        new Swiper(".swiper-container", {
          loop: true, // 可以循环轮播
          // 如果需要分页器
          pagination: {
            el: ".swiper-pagination"
          }
        });

        new BScroll(".miste-content-wrapper", {
          click: true
        });
      });
    }
  },
  mounted() {
    this.getCategorys();
    this.getShops();
  },

  methods: {
    ...mapActions(["getCategorys",'getShops'])
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.stylus'
.msite // 首页
  width 100%
.miste-content-wrapper
  position fixed
  top 45px
  bottom 46px
  width 100%
  .msite_nav
    bottom-border-1px(#e4e4e4)
    margin-top 15px
    height 200px
    background #fff
    .swiper-container
      width 100%
      height 100%
      .swiper-wrapper
        width 100%
        height 100%
        .swiper-slide
          display flex
          justify-content center
          align-items flex-start
          flex-wrap wrap
          .link_to_food
            width 25%
            .food_container
              display block
              width 100%
              text-align center
              padding-bottom 10px
              font-size 0
              img
                display inline-block
                width 50px
                height 50px
            span
              display block
              width 100%
              text-align center
              font-size 13px
              color #666
      .swiper-pagination
        >span.swiper-pagination-bullet-active
          background #02a774
  .msite_shop_list
    top-border-1px(#e4e4e4)
    margin-top 10px
    background #fff
    .shop_header
      padding 10px 10px 0
      .shop_icon
        margin-left 5px
        color #999
      .shop_header_title
        color #999
        font-size 14px
        line-height 20px
</style>
