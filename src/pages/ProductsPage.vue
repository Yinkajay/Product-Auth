<template>
    <div class="products-bg"></div>
    <div>
        <h2>Available Products</h2>
        <products-list></products-list>
    </div>
</template>

<script>
import ProductsList from '@/components/products/ProductsList.vue';
export default {
    components: {
        ProductsList
    }
}
</script>

<style scoped>
.products-bg {
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: -1;
    background-image: url('../assets/homebackground.webp');
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;
    filter: opacity(0.5);
}

h2{
    font-size: 30px;
    padding: 10px;
    background-color: rgb(108, 187, 108);
    color: white;
}
</style>