<template>
    <div class="home-bg"></div>
    <main>
        <div v-if="!isLoggedIn" class="home-text">
            <h2 class="welcome-text">Welcome to <span class="brand-text">Shoppa</span></h2>
            <p> <router-link to="/signup">Signup</router-link> to start shopping or <router-link
                    to="/login">login</router-link>
                if
                you have an account
            </p>
        </div>
        <div v-else class="home-text">
            <h2>Hello {{ userName }}, you can view our catalog</h2>
            <router-link to="/products">here.</router-link>
        </div>
    </main>
</template>


<script>
export default {

    computed: {
        isLoggedIn() {
            return this.$store.getters['isLoggedIn']
        },
        userName(){
            return this.$store.getters['getUsername']
        }
    }
}
</script>

<style scoped>
.home-bg {
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: -1;
    background-image: url('../assets/homebackground.webp');
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;
    filter: opacity(0.75);
}

main {
    height: calc(100vh - 60px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
}

.brand-text {
    color: rgb(108, 187, 108);
}

.welcome-text {
    font-size: 40px;
    font-family: 'kanit';
}


@media only screen and (max-width: 992px) and (min-width: 600px) {
    p {
        color: blue;
    }
}
</style>