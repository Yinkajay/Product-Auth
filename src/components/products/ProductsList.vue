<template>
    <h1>
        Hello World
    </h1>
    <ul v-if="hasFetchedProducts">
        <product-item v-for="product in products" :key="product.id" :title="product.title"
            :description="product.description" :price="product.price"></product-item>
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
            console.log(this.$store.getters['products'])
            return this.$store.getters.products
        }
    },
    methods: {
       async fetchProducts() {
            console.log('fetching')
          await  this.$store.dispatch('getProducts')
            console.log('fetched')
            this.hasFetchedProducts = true
        }
    }

}
</script>