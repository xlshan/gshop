import Vue from "vue";
import Router from "vue-router";

import Home from "../pages/home/home";
import Order from "../pages/order/order";
import Search from "../pages/search/search";
import Profile from "../pages/profile/profile.vue";
import Login from "../pages/login/login.vue";
import Shop from "../pages/shop/shop.vue";
import ShopGoods from "../pages/shop/goods/goods.vue";
import ShopRating from "../pages/shop/rating/rating.vue";
import ShopInfo from "../pages/shop/info/info.vue";

Vue.use(Router);

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
            path: "/profile",
            name: "profile",
            component: Profile,
            meta: {
                showFooter: true
            }
        },
        {
            path: "/login",
            name: "login",
            component: Login
        },
        {
            path: "/shop",
            // name: "Shop", //一级路由不要设置name
            component: Shop,
            children: [{
                    path: "/shop/goods",
                    name: "ShopGoods",
                    component: ShopGoods
                },
                {
                    path: "/shop/ratings",
                    name: "ShopRating",
                    component: ShopRating
                },
                {
                    path: "/shop/info",
                    name: "ShopInfo",
                    component: ShopInfo
                },
                {
                    path: "",
                    redirect: "/shop/goods"
                }
            ]
        }
    ]
});