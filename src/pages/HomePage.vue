<template>
    <div v-if="!isLoggedIn">
        <h2>Welcome to Shoppa</h2>
        <p> <router-link to="/signup">Signup</router-link> to start shopping or <router-link to="/login">login</router-link>
            if
            you have an account
        </p>
    </div>
    <div v-else>
        <h2>Hello (name), you can view our catalog</h2>
        <router-link to="/products">here.</router-link>
        here.
    </div>
</template>


<script>
export default {

    computed: {
        isLoggedIn() {
            return this.$store.getters['isLoggedIn']
        }
    }
}
</script>

<style scoped>

@media only screen and (max-width: 992px) and (min-width: 600px) {
    p{
        color: blue;
    }
}

</style>