import Vue from 'vue'
import { RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS, RECORD_USER, RESET_USER, RECEIVE_RATAING, RECEIVE_GOODS, RECEIVE_INFO, ADD_FOOD, DEC_FOOD, CLEAR_FOOD } from "./mutation-types";

export default {
    [RECEIVE_ADDRESS](state, { address }) {
        state.address = address;
    },
    [RECEIVE_CATEGORYS](state, { categorys }) {
        state.categorys = categorys;
    },
    [RECEIVE_SHOPS](state, { shops }) {
        state.shops = shops
    },
    [RECORD_USER](state, { user }) {
        state.userInfo = user
    },
    [RESET_USER](state) {
        state.userInfo = {}
    },
    [RECEIVE_RATAING](state, { rating }) {
        state.rating = rating
    },
    [RECEIVE_GOODS](state, { goods }) {
        state.goods = goods
    },
    [RECEIVE_INFO](state, { info }) {
        state.info = info
    },
    [ADD_FOOD](state, { food }) {
        if (!food.count) {
            Vue.set(food, 'count', 1)
            state.cartList.push(food)
        } else {
            food.count++
        }
    },

    [DEC_FOOD](state, { food }) {
        console.log(food)
        if (food.count) {
            food.count--
                if (food.count == 0) {
                    state.cartList.splice(state.cartList.indexOf(food), 1)
                }
        }
    },

    [CLEAR_FOOD](state) {
        state.cartList.forEach(item => item.count = 0)
        state.cartList = []
    }
}