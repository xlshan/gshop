import { RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS, RECORD_USER } from "./mutation-types";

import { reqAddress, reqCategorys, reqShops } from "../api";

export default {
    async getCategorys({ commit, state }) {
        let res = await reqCategorys();
        if (res.code == 0) {
            const categorys = res.data;
            commit(RECEIVE_CATEGORYS, { categorys });
        }
    },

    async getShops({ commit, state }) {
        const { longitude, latitude } = state
        let res = await reqShops(longitude, latitude);
        if (res.code == 0) {
            const shops = res.data
            commit(RECEIVE_SHOPS, { shops })
        }
    },

    recordUserInfo({ commit }, user) {
        commit(RECORD_USER, { user })
    }
};