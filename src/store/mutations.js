import * as mutations from './mutation-types'

export default {
    [mutations.SHOW_PER_CATEGORY](state, category) {
        state.showPercategory = true
        state.productsPercategory = state.products.filter(product => {
            return product.category == category
        })
        state.activeCategory = category
    },
    [mutations.SHOW_PRODUCTS](state) {
        state.showPercategory = false
        state.productsPercategory = null
        state.activeCategory = 'all'
    },
    [mutations.ORDER_PRODUCT](state, product) {
        state.productOrdered.push(product)
        state.priceTotal += product.price
    },
    [mutations.REMOVE_ORDERED_PRODUCT](state, index) {
        state.priceTotal = state.priceTotal - state.productOrdered[index].price
        state.productOrdered.splice(index, 1)
    }
}