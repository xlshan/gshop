<!--  -->
<template>
  <div>
    <Header title="首页">
      <router-link class="header_search" slot="left" to="/search">
        <i class="iconfont icon-auto"></i>
      </router-link>
      <router-link slot="right" class="header_login" :to="{path:'/login'}">
        登录|注册
      </router-link>
    </Header>
  </div>
</template>

<script>
import Header from '../../components/header/header'
export default {
  data () {
    return {
    }
  },

  components: {
    Header
  },

  computed: {},

  mounted () { },

  methods: {}
}

</script>
<style lang='stylus' rel="stylesheet/stylus"></style>