import { RECEIVE_ADDRESS, RECEIVE_CATEGORYS } from "./mutation-types";

import { reqAddress, reqCategorys } from "../api";

export default {
    async getCategorys({ commit, state }) {
        let res = await reqCategorys();
        if (res.code == 0) {
            const categorys = res.data;
            commit(RECEIVE_CATEGORYS, { categorys });
        }
    }
};