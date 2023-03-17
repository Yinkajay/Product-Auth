<template>
    <div class="signup-bg"></div>
    <div class="signup">
        <signup-form></signup-form>
    </div>
</template>

<script>
import SignupForm from '@/components/auth/SignupForm.vue';
export default {
    components: {
        SignupForm
    }
}
</script>

<style scoped>

.signup-bg {
    position: fixed;
    width: 100%;
    height: 100vh;
    background-image: url('../assets/authbackground.webp');
    background-size: cover;
    /* filter: opacity(0.89) blur(1px); */
    z-index: -1;
}

.signup {
    z-index: 10;
}
</style>