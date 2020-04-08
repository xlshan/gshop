export default {
    totalCount(state) {
        return state.cartList.reduce((pre, next) => pre + next.count, 0)
    },
    totalPrice(state) {
        return state.cartList.reduce((pre, next) => pre + next.count * next.price, 0)
    }
}