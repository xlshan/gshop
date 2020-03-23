<template>
  <div id="app">
    <router-view></router-view>
    <Footer v-show="$route.meta.showFooter"></Footer>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import Footer from './components/footer/footer'
export default {
  name: 'App',
  components: {

    Footer
  },
  methods:{
    ...mapActions(['getUserInfo'])
  },
  mounted(){
    this.getUserInfo()
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
  width 100%
  height 100%
  background #f5f5f5
</style>
