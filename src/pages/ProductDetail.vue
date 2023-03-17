<template>
    <!-- <h1>
        Product details
    </h1> -->
    <div class="product-bg"></div>
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
                {{ productRating }} <v-icon name="hi-solid-star" fill="#6CBB6C" /> rating
            </p>
            <p class="description">
                {{ productDescription }}
            </p>
            <h5>Price - <span class="product-value"> ₦{{ productPrice * 700 }}.00 </span></h5>
        </div>

    </div>
</template>


<script setup>
import { onMounted, ref, } from 'vue'
import useGetProductDetail from '@/composables/useGetProductDetail';
import { useRoute } from 'vue-router';


const route = useRoute()
const productId = route.params.productId

let productName = ref(null)
let productCategory = ref(null)
let productImage = ref(null)
let productDescription = ref(null)
let productRating = ref(null)
let productPrice = ref(null)

function getProduct(title, category, image, description, rating, price) {
    productName.value = title
    productCategory.value = category
    productImage.value = image
    productDescription = description
    productRating = rating
    productPrice = price
}
onMounted(async function () {
    console.log('hello')
    console.log(productId)
    const [title, category, description, rating, images, price] = await useGetProductDetail(productId)
    getProduct(title, category, images[0], description, rating, price)
})
</script>


<style scoped>
body {
    background: linear-gradient(to right, #1d2b6446, #f4dae2);
}

.product-bg {
    position: fixed;
    background-image: linear-gradient(to right, #1d2b6446, #f4dae2);
    top: 60px;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
}

.details {
    display: flex;
    z-index: 5;
}

.visual-area {
    width: 50%;
    /* background-color: purple; */
    padding: 20px;
}

.visual-area div {
    /* background-color: green; */
}

.visual-area img {
    width: 500px;
    max-height: 600px;
    border-radius: 10px;
    border: 8px double white;
}

.text-area {
    text-align: right;
    font-family: 'Roboto', sans-serif;
    width: 50%;
    /* background-color: pink; */
    padding: 20px 100px 20px 20px;
    /* display: flex;
    flex-direction: column;
    justify-content: space-around; */
}

.text-area h1 {
    color: white;
    background-color: rgb(87, 162, 87);
    font-weight: bold;
    margin: 20px 0;
    text-align: center;
    border-radius: 5px;
}

.category {
    display: inline-block;
    color: rgb(255, 255, 255);
    background-color: rgb(37, 36, 36);
    padding: 5px 7px;
    border-radius: 5px;
    margin: 10px 0;
}



.description {
    margin: 10px 0 30px;
    padding-left: 130px;
    line-height: 2;
    font-weight: bold;
    font-size: 22px;
}

.product-value {
    padding: 5px;
    border-radius: 5px;
    color: rgb(87, 162, 87);
    background-color: white;
}

@media only screen and (max-width: 992px) and (min-width: 600px) {
    .visual-area img {
        width: 300px;
        max-height: 600px;
        border-radius: 10px;
        border: 8px double white;
    }
}

@media only screen and (max-width: 600px) {

    .details {
        display: flex;
        flex-direction: column;
        z-index: 5;
    }

    .visual-area {
        width: 100%;
    }

    .text-area{
        width: 100%;
        text-align: center;
        /* background-color: purple; */
        padding: 20px;
    }

    .description {
    margin: 20px 0;
    font-weight: bold;
    font-size: 18px;
    padding: 10px;
}

    .visual-area img {
        width: 300px;
        max-height: 600px;
        border-radius: 10px;
        border: 8px double white;
    }

}
</style>