<template>
    <ul v-if="hasFetchedProducts">
        <product-item v-for="product in products" :key="product.id" :title="product.title" :thumbnail="product.thumbnail"
            :description="product.description" :price="product.price" :category="product.category"
            :id="product.id"></product-item>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            hasFetchedProducts: false,
            // products: null
        }
    },
    created() {
        this.fetchProducts()
    },
    computed: {
        products() {
            // console.log(this.$store.getters['products'])
            return this.$store.getters.products
        }
    },
    methods: {
        async fetchProducts() {
            console.log('fetching')

            // if (this.$store.getters['hasProducts']) {
            //     console.log('products already fetched')
            //     return
            // }

            await this.$store.dispatch('getProducts')
            console.log('fetched')
            this.hasFetchedProducts = true
        }
    }

}
</script>