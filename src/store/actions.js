import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS,
    RECORD_USER,
    RESET_USER,
    RECEIVE_RATAING,
    RECEIVE_GOODS,
    RECEIVE_INFO,
    ADD_FOOD,
    DEC_FOOD,
    CLEAR_FOOD
} from "./mutation-types";

import {
    reqAddress,
    reqCategorys,
    reqShops,
    reqUserInfo,
    reqLogout,
    reqRating,
    reqGoods,
    reqInfo
} from "../api";

export default {
    async getCategorys({ commit, state }) {
        let res = await reqCategorys();
        if (res.code == 0) {
            const categorys = res.data;
            commit(RECEIVE_CATEGORYS, { categorys });
        }
    },

    async getShops({ commit, state }) {
        const { longitude, latitude } = state;
        let res = await reqShops(longitude, latitude);
        if (res.code == 0) {
            const shops = res.data;
            commit(RECEIVE_SHOPS, { shops });
        }
    },

    recordUserInfo({ commit }, user) {
        commit(RECORD_USER, { user });
    },

    async getUserInfo({ commit }) {
        let res = await reqUserInfo();
        if (res.code == 0) {
            let user = res.data;
            commit(RECORD_USER, { user });
        }
    },

    async logout({ commit }) {
        let res = await reqLogout();
        if (res.code == 0) {
            commit(RESET_USER);
        }
    },

    async getRatings({ commit }, callback) {
        let res = await reqRating();
        if (res.code == 0) {
            let rating = res.data;
            commit(RECEIVE_RATAING, { rating });
            callback && callback();
        }
    },

    async getGoodsInfo({ commit }) {
        let res = await reqInfo();
        if (res.code == 0) {
            let info = res.data;
            commit(RECEIVE_INFO, { info });
        }
    },

    async getGoods({ commit }, cb) {
        let res = await reqGoods();
        if (res.code == 0) {
            let goods = res.data;
            commit(RECEIVE_GOODS, { goods });
            cb && cb()
        }
    },

    addFood({ commit }, { food }) {
        commit(ADD_FOOD, { food })
    },

    decFood({ commit }, { food }) {
        commit(DEC_FOOD, { food })
    },

    clearCart({ commit }) {
        commit(CLEAR_FOOD)
    }




};