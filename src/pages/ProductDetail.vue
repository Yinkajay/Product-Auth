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
            <h4 class="category">
                 {{ productCategory }}
            </h4>
            <p>
                {{ productRating }} <v-icon name="hi-solid-star"/>  
            </p>
            <p>
                {{productDescription}}
            </p>
        </div>

    </div>
</template>


<script setup>
import { onMounted, ref, } from 'vue'
import useGetProductDetail from '@/composables/useGetProductDetail';
import { useRoute } from 'vue-router';


// let selectedProduct
const route = useRoute()
const productId = route.params.productId

// const [title, category, description, rating, images] = await useGetProductDetail(productId)

// let productName = computed(() => {
//     return 'banana'
// })

let productName = ref(null)
let productCategory = ref(null)
let productImage = ref(null)
let productDescription = ref(null)
let productRating = ref(null)


function getProduct(title, category, image, description, rating) {
    productName.value = title
    productCategory.value = category
    productImage.value = image
    productDescription = description
    productRating = rating
}


onMounted(async function () {
    console.log('hello')
    console.log(productId)
    const [title, category, description, rating, images] = await useGetProductDetail(productId)
    getProduct(title, category, images[0], description, rating)
})

</script>


<style scoped>
body{
    background-color: red;
}

.category{
    display: inline-block;
    color: rgb(228, 228, 228);
    background-color: rgb(37, 36, 36);
    padding: 5px;
    border-radius: 5px;
}

.details {
    display: flex;

}

.visual-area {
    width: 50%;
    background-color: purple;
    padding: 20px;
}

.visual-area img{
    width: 500px;
    max-height: 600px;
}

.text-area {
    text-align: right;
    font-family: 'Roboto', sans-serif;
    width: 50%;
    background-color: pink;
    padding: 20px 50px 20px 20px;
}
</style>