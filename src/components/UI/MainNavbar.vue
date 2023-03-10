<template>
    <header>
        <nav>
            <div id="brand-name">
                <router-link to="/">VStore</router-link>
            </div>
            <div class="nav-link">
                <router-link to='/'>Home</router-link>
            </div>
            <div class="nav-link">
                <router-link to="/products">Products</router-link>
            </div>
            <div class="nav-link">
                <router-link to="/Signup">Login/Signup</router-link>
            </div>
        </nav>
    </header>
</template>




<style scoped>
header {
    height: 70px;
    background-color: yellow;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

nav{
    /* width: 100%; */
    /* background-color: red; */
}

#brand-name{
    display: inline-block;
    font-family: cursive,sans-serif;
    font-size: 30px;
    color: red;
}

header a {
    color: black;
    font-weight: normal;
    padding: 6px;
    margin: 10px 0;
    border-radius: 7px;
}

 .nav-link a.router-link-active{
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.41);
    /* border-bottom: 4px solid; */
}

.nav-link{
    display: inline-block;
    padding: 5px 10px;
}


</style>