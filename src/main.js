// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import { Button } from "mint-ui";
import VueLazyload from 'vue-lazyload'
import App from "./App";
import router from "./router";
import store from "./store";
import "./mock/mockServer";
import "./filter/filter"; // 加载过滤器
import loading from '../src/assets/img/loading.gif'
Vue.config.productionTip = false;
Vue.use(VueLazyload, {
    loading
})
Vue.component(Button.name, Button); //<mt-button>

/* eslint-disable no-new */
new Vue({
    el: "#app",
    router,
    store,
    components: { App },
    template: "<App/>"
});