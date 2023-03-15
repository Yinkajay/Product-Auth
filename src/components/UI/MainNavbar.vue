<template>
    <header>
        <nav>
            <div id="brand-name">
                <router-link to="/">VStore</router-link>
            </div>
            <div>
                <div class="nav-link">
                    <router-link to='/'>Home</router-link>
                </div>
                <div class="nav-link" v-if="isLoggedIn">
                    <router-link to="/products">Products</router-link>
                </div>
                <div class="nav-link" v-if="!isLoggedIn">
                    <router-link to="/Signup">Signup</router-link>
                </div>
                <div class="auth-link" v-if="!isLoggedIn">
                    <router-link to="/Login">Login</router-link>
                </div>
                <div class="auth-link" v-else>
                    <button @click="logout">Logout</button>
                </div>
            </div>
        </nav>
    </header>
</template>


<script>
export default {
    computed: {
        isLoggedIn() {
            return this.$store.getters['isLoggedIn']
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('logout')
        }
    }
}
</script>

<style scoped>
header {
    height: 60px;
    background-color: rgb(55, 98, 97);
    color: rgb(108, 187, 108);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
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
}

.nav-link {
    display: inline-block;
    padding: 5px 10px;
}

.auth-link{
    display: inline-block;
    padding: 5px 10px;
}

.auth-link a, .auth-link button{
    color: white;
    background-color: rgb(108, 187, 108);
    font-weight: bold;
    padding: 6px 12px;
    margin: 10px 0;
    border-radius: 7px;
    transition: 0.3s ease;
    outline: none;
    border: none;
}


.auth-link a:hover, .auth-link button:hover{
    color: rgb(108, 187, 108);
    background-color: white;
    border: 1px solid rgb(108, 187, 108);
    
}

.auth-link a.router-link-active {
    color: rgb(108, 187, 108);
    background-color: white;
    border: 2px solid rgb(108, 187, 108);
}
</style>