import Vue from "vue"
import Router from "vue-router"

import Home from "../pages/home/home"
import Order from "../pages/order/order"
import Search from "../pages/search/search"
import Profile from "../pages/profile/profile.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      name: "Home",
      component: Home
    },
    {
      path: "/order",
      name: "Order",
      component: Order
    },
    {
      path: "/search",
      name: "Search",
      component: Search
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    }
  ]
})
