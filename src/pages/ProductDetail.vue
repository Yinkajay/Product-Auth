<template>
    <h1>
        Product deets
    </h1>
    <div class="details">
        <div class="visual-area">
            <div>
                <img :src="productImage" alt="">
            </div>
        </div>
        <div class="text-area">
            <h1>
                {{ productName }}
            </h1>
            <h4>
                Category - {{ category }}
            </h4>

        </div>

    </div>
</template>


<script>
export default {
    // props: ['productId'],
    data() {
        return {
            selectedProduct: null
        }
    },
    created() {
        console.log(this.$route)
        const productId = this.$route.params.productId
        console.log('the id is ' + this.$route.params.productId)
        let products = this.$store.getters['products']
        // console.log(products)
        this.selectedProduct = products.find(prod => prod.id == productId)
        console.log(this.selectedProduct)
    },
    computed: {
        productName() {
            return this.selectedProduct.title
        },
        category() {
            return this.selectedProduct.category
        },
        productImage(){
            return this.selectedProduct.images[0]
        }
    }
}
</script>


<style>
.details {
    background-color: yellow;
}

.visual-area {}

.text-area {}
</style>