<template>
    <header>
        <nav>
            <div id="brand-name">
                <router-link to="/">Shoppa</router-link>
            </div>
            <div class="nav-links">
                <div class="nav-link">
                    <router-link to='/home'>Home
                        <v-icon name="ri-home-smile-line" scale="0.8" />
                    </router-link>
                </div>
                <div class="nav-link" v-if="isLoggedIn">
                    <router-link to="/products">Products
                        <v-icon name="bi-shop" />
                    </router-link>
                </div>
                <div class="nav-link" v-if="!isLoggedIn">
                    <router-link to="/signup">Signup</router-link>
                </div>
                <div class="auth-link" v-if="!isLoggedIn">
                    <router-link to="/login">Login</router-link>
                </div>
                <div class="auth-link" v-else>
                    <button @click="logout">Logout</button>
                </div>
                <div class="nav-link" v-if="isLoggedIn">
                    <p>Welcome {{ username }}</p>
                </div>
            </div>
            <!-- <input type="checkbox" id="isChecked">
            <label for="isChecked" class="nav-btn">
                <v-icon name="gi-hamburger-menu" scale="2"></v-icon>
            </label> -->
        </nav>
    </header>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import useFetchUser from '@/composables/useFetchUser';

const store = useStore();
const router = useRouter()
function logout() {
    store.dispatch('logout')
    router.replace('/')
}

const isLoggedIn = computed(function () {
    return store.getters['isLoggedIn']
})


const username = computed(function () {
    return useFetchUser()
})
</script>

<!-- <script>
// import { RiHomeFill } from "oh-vue-icons/icons"
export default {
    computed: {
        isLoggedIn() {
            return this.$store.getters['isLoggedIn']
        },

    },
    methods: {
        logout() {
            this.$store.dispatch('logout')
            this.$router.replace('/')
        }
    }
}
</script> -->

<style scoped>
header {
    height: 60px;
    /* background-color: rgb(205, 223, 223); */
    background-color: white;
    color: rgb(108, 187, 108);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Kanit', sans-serif;
}

nav {
    width: 80%;
    /* background-color: red; */
    display: flex;
    justify-content: space-between;
    align-items: center;

}

#brand-name {
    display: inline-block;
    font-family: cursive, sans-serif;
    font-size: 30px;
    color: red;
}

header a {
    /* color: black; */
    font-weight: normal;
    padding: 6px;
    margin: 10px 0;
}

.nav-link a.router-link-active {
    border-bottom: 2px solid;
    font-weight: bold;
}

.nav-link {
    display: inline-block;
    padding: 5px 10px;
}

.nav-link a:hover {
    color: rgb(108, 187, 108);
}

.auth-link {
    display: inline-block;
    padding: 5px 10px;
}

.auth-link a,
.auth-link button {
    color: white;
    background-color: rgb(108, 187, 108);
    /* font-weight: bold; */
    font-size: 16px;
    padding: 6px 12px;
    margin: 10px 0;
    border-radius: 7px;
    transition: 0.3s ease;
    outline: none;
    border: none;
}


.auth-link a:hover,
.auth-link button:hover {
    color: rgb(108, 187, 108);
    background-color: white;
    border: 1px solid rgb(108, 187, 108);

}

.auth-link a.router-link-active {
    color: rgb(108, 187, 108);
    background-color: white;
    border: 2px solid rgb(108, 187, 108);
}

.nav-btn {
    float: right;
}

#isChecked {
    display: none;
}

@media only screen and (max-width: 800px) {
    .nav-links {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    nav{
        width: 90%;
    }
    #brand-name {
    font-size: 20px;
}
svg{
    display: none;
}

    .auth-link a, .nav-link a, .auth-link button, .nav-link p{
        padding: 3px;
        font-size: 13px;
    }

    .auth-link button{
        padding: 5px;
    }

}
</style>