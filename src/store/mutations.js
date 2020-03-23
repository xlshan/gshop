import { RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS, RECORD_USER, RESET_USER, RECEIVE_RATAING, RECEIVE_GOODS, RECEIVE_INFO } from "./mutation-types";

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
    }
}