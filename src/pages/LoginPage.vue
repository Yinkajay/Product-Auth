<template>
    <div class="login-bg"></div>
    <div class="login">
        <login-form></login-form>
    </div>
</template>

<script>
import LoginForm from '@/components/auth/LoginForm.vue';
export default {
    components: {
        LoginForm
    }
}
</script>

<style scoped>

.login-bg{
    position: fixed;
    width: 100%;
    height: 100%;
    background-image: url('../assets/authbackground.webp');
    background-size: cover;
    filter: opacity(0.89) blur(1px);
    z-index: -1;
}


.login{
    z-index: 10;
}
</style>