<template>
    <div v-if="!isLoggedIn">
        <h2>Welcome to the Vstore</h2>
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

<style scoped></style>