<template>
  <div class="star" :class="'star-' + size">
    <span
      class="star-item"
      v-for="(sc, index) in starArr"
      :class="sc"
      :key="index"
    ></span>
  </div>
</template>

<script>
const CLASS_ON = "on",
  CLASS_HALF = "half",
  CLASS_OFF = "off";
export default {
  data() {
    return {};
  },
  props: ["score", "size"],
  components: {},
  computed: {
    starArr() {
      let arr = [];
      const { score } = this;
      // add CLASS_ON n个
      const s = Math.floor(score);
      for (let index = 0; index < s; index++) {
        arr.push(CLASS_ON);
      }
      // add CLASS_HALF  (0/1个 >=0.5)
      if (score * 10 - s * 10 >= 5) {
        arr.push(CLASS_HALF);
      }

      // add CLASS_OFF n个
      while (arr.length < 5) {
        arr.push(CLASS_OFF);
      }
      return arr;
    }
  },
  methods: {},
  created() {},
  mounted() {
    this.starArr;
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.stylus'
.star // 2x图 3x图
  float left
  font-size 0
  .star-item
    display inline-block
    background-repeat no-repeat
  &.star-48
    .star-item
      width 20px
      height 20px
      margin-right 22px
      background-size 20px 20px
      &:last-child
        margin-right 0
      &.on
        bg-image('./images/star48_on')
      &.half
        bg-image('./images/star48_half')
      &.off
        bg-image('./images/star48_off')
  &.star-36
    .star-item
      width 15px
      height 15px
      margin-right 6px
      background-size 15px 15px
      &:last-child
        margin-right 0
      &.on
        bg-image('./images/star36_on')
      &.half
        bg-image('./images/star36_half')
      &.off
        bg-image('./images/star36_off')
  &.star-24
    .star-item
      width 10px
      height 10px
      margin-right 3px
      background-size 10px 10px
      &:last-child
        margin-right 0
      &.on
        bg-image('./images/star24_on')
      &.half
        bg-image('./images/star24_half')
      &.off
        bg-image('./images/star24_off')
</style>
