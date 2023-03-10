<template>
    <h2>Sign Up</h2>
    <signup-form></signup-form>
</template>

<script>
import SignupForm from '@/components/auth/SignupForm.vue';
export default{
    components: {
        SignupForm
    }
}
</script>

<style scoped>
h2{
    color: rgb(108, 187, 108);
}
</style>