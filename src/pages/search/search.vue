<!--  -->
<template>
  <div class="search">
    <Header title="搜索" />
    <form class="search_form">
      <input
        type="search"
        placeholder="请输入商家名称"
        class="search_input"
        v-model="keyword"
      />
      <input type="submit" class="search_submit" @click.prevent="search" />
    </form>

    <section class="list">
      <ul class="list_container" v-if="!isList">
        <router-link
          :to="{ path: '/shop', query: { id: item.id } }"
          tag="li"
          v-for="(item, index) in shopList"
          :key="index"
          class="list_li"
        >
          <section class="item_left">
            <img :src="imgBaseUrl + item.image_path" class="restaurant_img" />
          </section>
          <section class="item_right">
            <div class="item_right_text">
              <p>
                <span>{{ item.name }}</span>
              </p>
              <p>月售 {{ item.month_sales || item.recent_order_num }} 单</p>
              <p>
                {{ item.delivery_fee || item.float_minimum_order_amount }}
                元起送 / 距离{{ item.distance }}
              </p>
            </div>
          </section>
        </router-link>
      </ul>
      <div class="search_none" v-else>很抱歉！无搜索结果</div>
    </section>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { reqSearch } from "../../api/index";
import Header from "../../components/header/header";
export default {
  data() {
    return {
      keyword: null,
      imgBaseUrl: "http://cangdu.org:8001/img/",
      noSearchShops: false,
      shopList: [],
      isList: false
    };
  },

  components: {
    Header
  },
  computed: {},

  mounted() {},

  methods: {
    async search() {
      const { keyword } = this;
      if (keyword) {
        let res = await reqSearch({ keyword, geohash: "40.10038,116.36867" });
        if (res.code == 0) {
          if (res.data.length == 0) {
            this.isList = true;
          } else {
            this.isList = false;
          }
          this.shopList = res.data;
        } else {
          alert(res.msg);
        }
      } else {
        alert("请输入关键字");
      }
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus/mixins.stylus"
.search
  width 100%
  height 100%
  // overflow hidden
  .search_form
    clearFix()
    margin-top 45px
    background-color #fff
    padding 12px 8px
    input
      height 35px
      padding 0 4px
      border-radius 2px
      font-weight bold
      outline none
      &.search_input
        float left
        width 79%
        border 4px solid #f2f2f2
        font-size 14px
        color #333
        background-color #f2f2f2
      &.search_submit
        float right
        width 18%
        border 4px solid #02a774
        font-size 16px
        color #fff
        background-color #02a774

  .list
    margin-bottom 45px
    .list_container
      background-color: #fff;
      .list_li
        display: flex;
        justify-content: center;
        padding: 10px
        border-bottom: 1px solid $bc;
        .item_left
          margin-right: 10px
          .restaurant_img
            width 50px
            height 50px
            display block
        .item_right
          font-size 12px
          flex 1
          .item_right_text
            p
              line-height 12px
              margin-bottom 6px
              &:last-child
                margin-bottom 0
  .search_none
    margin: 0 auto
    color: #333
    background-color: #fff
    text-align: center
    margin-top: 0.125rem
</style>
