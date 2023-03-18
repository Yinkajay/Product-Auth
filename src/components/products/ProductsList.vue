<template>
    <ul v-if="hasFetchedProducts">
        <product-item v-for="product in productsToDisplay" :key="product.id" :title="product.title"
            :thumbnail="product.thumbnail" :description="product.description" :price="product.price"
            :category="product.category" :id="product.id"></product-item>
    </ul>
    <p v-if="hasFetchedProducts">Page {{ page }} of {{ numberOfProducts / productsPerPage }}</p>
    <div className='button-area' v-if="hasFetchedProducts">
        <button className='button-prev' @click="setPage(page - 1)" :disabled="page == 1">
            <v-icon name="bi-chevron-double-left"></v-icon>
        </button>

        <button v-for="page in pagesOfProducts" :key="page" @click="setPage(page)">{{ page }}</button>

        <button className='button-next' @click="setPage(page + 1)" :disabled="page == numberOfProducts / productsPerPage">
            <v-icon name="bi-chevron-double-right"></v-icon>
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            hasFetchedProducts: false,
            productsPerPage: 6,
            page: 1
            // products: null
        }
    },
    created() {
        this.fetchProducts()
        console.log(this.arrayOfProducts)
    },
    computed: {
        products() {
            // console.log(this.$store.getters['products'])
            return this.$store.getters.products
        },
        numberOfProducts() {
            return this.$store.getters.products.length
        },
        pagesOfProducts() {
            return Array.from({ length: Math.ceil(this.numberOfProducts / this.productsPerPage) }, (value, index) => index + 1)
        },
        productsToDisplay() {
            return this.products.slice((this.page - 1) * this.productsPerPage, this.page * this.productsPerPage)
        },

    },
    methods: {
        async fetchProducts() {
            console.log('fetching')
            await this.$store.dispatch('getProducts')
            console.log('fetched')
            this.hasFetchedProducts = true
        },
        setPage(p) {
            this.page = p
        }
    }

}
</script>

<style scoped>
p {
    font-weight: bold;
    font-family: 'kanit', sans-serif;
color: rgb(108, 187, 108);
}

button {
    padding: 5px 8px;
    margin: 10px 4px;
    background-color: white;
    font-weight: bold;
    font-family: 'kanit', sans-serif;
    color: rgb(108, 187, 108);
    border: 0.2px solid rgb(108, 187, 108);
    border-radius: 3px;
}


button:hover {
    color: white;
    background-color: rgb(108, 187, 108);
}

button:disabled {
    color: grey;
    border: none;
    background-color: white;
}

button:disabled:hover {
    color: grey;
    border: red;
    cursor: not-allowed;
}
</style>

<!-- <script>
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
</script> -->