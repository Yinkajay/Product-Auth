<template>
  <!-- <MainNavbar/> -->
  <main-navbar></main-navbar>
  <!-- <products-list></products-list> -->
  <router-view></router-view>
</template>

<script>
import MainNavbar from './components/UI/MainNavbar.vue';

export default {
  components: {
    MainNavbar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@400;700&family=Roboto:wght@400;700&display=swap');
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  padding: 60px 0 0 0;
  margin: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: green;
  font-weight: bold;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}
</style>
