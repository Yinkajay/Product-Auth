export default {
    async getProducts(context) {
        const response = await fetch('https://dummyjson.com/products/')
        const responseData = await response.json()
        let products = [...responseData.products]
        console.log(responseData)


        context.commit('setProducts', products)
    }
}