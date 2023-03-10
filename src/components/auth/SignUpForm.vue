<template>
    <form>
        <div>
            <label for="firstName">First Name</label>
            <input type="text" id="firstName" />
        </div>
        <div>
            <label for="lastName">Last Name</label>
            <input type="text" id="lastName" />
        </div>
        <div>
            <label for="emailAddress">Email Address</label>
            <input type="email" id="emailAddress" />
        </div>
        <div>
            <label for="password">Password</label>
            <input type="password" id="password" />
        </div>
        <div>
            <label for="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" />
        </div>
    </form>
</template>


<script>
export default {
data(){
    return{
        firstName: '',
        lastName: '',
        emailAddress: '',
        password: '',
        confirmPassword: ''
    }
}
}
</script>