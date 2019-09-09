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
        if (state.productOrdered.length < 1) {
            state.productOrdered.push({
                id: product.id,
                name: product.name,
                price: product.price,
                category: product.category,
                imgUrl: product.imgUrl,
                qty: 1
            })
            state.priceTotalHelper = product.price
        }
        else {
            let count = 0
            state.productOrdered.forEach(element => {
                if (element.id == product.id) {
                    element.qty += 1
                    element.price += product.price
                    state.priceTotalHelper = state.priceTotalHelper + product.price
                    count++
                }
            });

            if (count < 1) {
                state.productOrdered.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    category: product.category,
                    imgUrl: product.imgUrl,
                    qty: 1
                })
                state.priceTotalHelper = product.price + state.priceTotal
            }
        }

        state.priceTotal = state.priceTotalHelper
    },
    [mutations.REMOVE_ORDERED_PRODUCT](state, index) {
        state.priceTotal = state.priceTotal - state.productOrdered[index].price
        state.priceTotalHelper = state.priceTotalHelper - state.productOrdered[index].price
        state.productOrdered.splice(index, 1)
    }
}