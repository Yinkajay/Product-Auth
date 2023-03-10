<template>
    <h2>Login</h2>
    <login-form></login-form>
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
h2{
    color: rgb(108, 187, 108);
}
</style>