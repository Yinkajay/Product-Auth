<template>
    <li>
        <img :src='thumbnail'>
        <h2 class="title">{{ title }}</h2>
        <div>
            <!-- <h3>Category - {{ category }}</h3> -->
            <!-- <p>{{ description }}</p> -->
            <p>₦{{ price * 700 }}.00</p>
        </div>
        <button>
            <router-link :to="productDetailRoute"> Buy </router-link>
        </button>
    </li>
</template>


<script>
export default {
    props: ['title', 'description', 'price', 'category', 'thumbnail', 'id'],
    provide: ['title'],
    computed: {
        productDetailRoute() {
            return this.$route.path + '/' + this.id
        }
    },
    created() {
        // this.getRoute()
    },
    methods: {
        getRoute() {
            console.log(this.$route)
        }
    }

}
</script>

<style scoped>
.title {
    color: rgb(108, 187, 108);
}

img {
    width: 60px;
    margin: 10px 0;
    /* border-radius: 50%; */
    box-shadow: 0px 0px 3px #000;
}

li {
    padding: 10px;
    vertical-align: top;
    display: inline-block;
    background-color: white;
    box-shadow: 0px 0px 2px #00000087;
    width: 200px;
    min-height: 200px;
    border-radius: 5px;
    font-family: 'Roboto', sans-serif;
    margin: 5px;
}

button{
    padding: 3px 7px;
    border-radius: 5px;
    border: none;
    background-color: rgb(108, 187, 108);
}
button a{
    color: white;
}
button:hover{
    background-color: white;
    border: 1px solid rgb(108, 187, 108);
}
button:hover a{
    color:rgb(108, 187, 108);
}

@media only screen and (max-width: 992px) and (min-width: 600px) {

}
</style>