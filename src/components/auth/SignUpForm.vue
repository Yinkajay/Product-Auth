<template>
    <section>
        <card-wrapper>
            <form @submit.prevent="">
                <div class="form-field">
                    <label for="firstName">First Name</label>
                    <input type="text" id="firstName" />
                </div>
                <div class="form-field">
                    <label for="lastName">Last Name</label>
                    <input type="text" id="lastName" />
                </div>
                <div class="form-field">
                    <label for="emailAddress">Email Address</label>
                    <input type="email" id="emailAddress" />
                </div>
                <div class="form-field">
                    <label for="password">Password</label>
                    <input type="password" id="password" />
                </div>
                <div class="form-field">
                    <label for="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" />
                </div>
                <div>
                    <button>Create Account</button>
                </div>
            </form>
            <div>
                <p>Already have an account
                    <router-link to="/login">Login</router-link>
                </p>
            </div>
        </card-wrapper>
    </section>
</template>


<script>
export default {
    data() {
        return {
            firstName: '',
            lastName: '',
            emailAddress: '',
            password: '',
            confirmPassword: ''
        }
    }
}
</script>

<style>
.form-field {
    padding: 0.5rem;
}


.form-field label {
    display: block;
}

.form-field input {
    width: 80%;
    border: 2px rgb(108, 187, 108) solid;
    padding: 0.5rem;
    font-size: 20px;
}



button {
    padding: 5px 20px;
    border-radius: 5px;
    background-color: rgb(108, 187, 108);
    border: none;
    color: white;
    transition: 0.2s ease-in;
}

button:hover {
    background-color: white;
    color: rgb(28, 149, 28);
    border: 1px solid;
}
</style>