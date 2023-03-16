<template>
    <section>
        <card-wrapper>
            <h2>Sign Up</h2>
            <form @submit.prevent="submitFormHandler">
                <div class="loading-spinner" v-if="loading">
                    <loading-spinner></loading-spinner>
                </div>
                <div class="form-field" :class="{ invalid: !firstName.valid }">
                    <label for="firstName">First Name</label>
                    <input type="text" id="firstName" v-model="firstName.val" @blur="clearValidity('firstName')" />
                </div>
                <div class="form-field" :class="{ invalid: !lastName.valid }">
                    <label for="lastName">Last Name</label>
                    <input type="text" id="lastName" v-model="lastName.val" @blur="clearValidity('lastName')" />
                </div>
                <div class="form-field" :class="{ invalid: !emailAddress.valid }">
                    <label for="emailAddress">Email Address</label>
                    <input type="email" id="emailAddress" v-model="emailAddress.val"
                        @blur="clearValidity('emailAddress')" />
                </div>
                <div class="form-field" :class="{ invalid: !password.valid }">
                    <label for="password">Password</label>
                    <input type="password" id="password" v-model="password.val" @blur="clearValidity('password')" />
                </div>
                <div class="form-field" :class="{ invalid: !confirmPassword.valid }">
                    <label for="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" v-model="confirmPassword.val"
                        @blur="clearValidity('confirmPassword')" @change="confirmPasswordHandler" />
                    <p class="alert-message" v-if="!confirmPassword.valid">Passwords are not the same</p>
                </div>
                <div>
                    <button>Create Account
                        <v-icon name="md-manageaccounts"/>
                    </button>
                </div>
            </form>
            <div>
                <p>Already have an account?
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
            firstName: {
                val: '',
                valid: true
            },
            lastName: {
                val: '',
                valid: true
            },
            emailAddress: {
                val: '',
                valid: true
            },
            password: {
                val: '',
                valid: true
            },
            confirmPassword: {
                val: '',
                valid: true
            },
            formIsValid: false,
            loading: false
        }
    },
    methods: {
        clearValidity(field) {
            this[field].valid = true
        },
        confirmPasswordHandler() {
            if (this.password.val !== this.confirmPassword.val) {
                console.log('passwords are not the same')
                this.confirmPassword.valid = false
                return
            }
        },
        submitFormHandler() {
            this.formIsValid = true
            if (this.firstName.val.trim() === '') {
                console.log('first name is invalid')
                this.firstName.valid = false
                this.formIsValid = false
            }
            if (this.lastName.val.trim() === '') {
                console.log('last name is invalid')
                this.lastName.valid = false
                this.formIsValid = false
            }
            if (this.emailAddress.val.trim() === '' || !this.emailAddress.val.includes('@')) {
                console.log('email is invalid')
                this.emailAddress.valid = false
                this.formIsValid = false
            }
            if (this.password.val.trim() === '' || this.password.val.length <= 6) {
                console.log('password is invalid')
                this.password.valid = false
                this.formIsValid = false
            }
            this.confirmPasswordHandler()
            this.formIsValid = true

            this.loading = true
            this.$store.dispatch('login')
            setTimeout(() => {
                this.loading = false
                this.$router.replace('/')
            }, 2000);

        }
    }
}
</script>

<style scoped>
form {
    position: relative;
}

.loading-spinner {
    position: absolute;
    top: 40%;
    left: calc(50% - 40px);
}

h2 {
    color: rgb(108, 187, 108);
    margin: 10px 0;
}

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

.invalid input {
    border: 2px solid red;
}

.alert-message {
    color: red;
}

button {
    padding: 5px 20px;
    border-radius: 5px;
    background-color: rgb(108, 187, 108);
    border: none;
    color: white;
    transition: 0.2s ease-in;
    margin: 20px 0;
}

button:hover {
    background-color: white;
    color: rgb(28, 149, 28);
    border: 1px solid;
}
</style>