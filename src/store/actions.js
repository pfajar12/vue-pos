import * as mutations from './mutation-types'

export default {
    showProduct(context, category) {
        context.commit(mutations.SHOW_PER_CATEGORY, category)
    },
    showAllProduct(context) {
        context.commit(mutations.SHOW_PRODUCTS)
    },
    orderProduct(context, product) {
        context.commit(mutations.ORDER_PRODUCT, product)
    },
    removeOrderedProduct(context, index) {
        context.commit(mutations.REMOVE_ORDERED_PRODUCT, index)
    }
}