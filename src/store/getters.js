export default {
    products: state => {
        return state.products
        // return state.products.filter(product => {
        //     return product.category == 'coffee'
        // })
    },
    productsPercategory: state => {
        return state.productsPercategory
    },
    showPercategory: state => {
        return state.showPercategory
    },
    activeCategory: state => {
        return state.activeCategory
    },
    productOrdered: state => {
        return state.productOrdered
    },
    priceTotal: state => {
        return state.priceTotal
    },
    priceTotalHelper: state => {
        return state.priceTotalHelper
    }
}