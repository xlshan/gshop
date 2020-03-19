import Vue from "vue"
import Router from "vue-router"

import Home from "../pages/home/home"
import Order from "../pages/order/order"
import Search from "../pages/search/search"
import Profile from "../pages/profile/profile.vue"
import Login from "../pages/login/login.vue"

Vue.use(Router)

export default new Router({
    routes: [{
            path: "/",
            redirect: "/home"
        },
        {
            path: "/home",
            name: "Home",
            component: Home,
            meta: {
                showFooter: true
            }
        },
        {
            path: "/order",
            name: "Order",
            component: Order,
            meta: {
                showFooter: true
            }
        },
        {
            path: "/search",
            name: "Search",
            component: Search,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/profile',
            name: 'profile',
            component: Profile,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ]
})