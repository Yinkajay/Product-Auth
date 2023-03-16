<template>
    <card-wrapper>
    <section>
            <h2>Login</h2>
            <form @submit.prevent="submitHandler">
                <div class="loading-spinner" v-if="loading">
                    <loading-spinner></loading-spinner>
                </div>
                <div class="form-field" :class="{ invalid: username.invalid }">
                    <label>Username/Email</label>
                    <input type="text" v-model="username.val" @blur="clearValidity('username')">
                    <p v-if='username.invalid'>Name can't be empty</p>
                </div>
                <div class="form-field" :class="{ invalid: password.invalid }">
                    <label>Password</label>
                    <input type="password" v-model="password.val" @blur="clearValidity('password')">
                    <p v-if="password.invalid">Password cannot be less than 6 characters</p>
                </div>
                <div>
                    <button>Login
                        <v-icon name="md-login" />
                    </button>
                </div>
            </form>
            <div>
                <p>Create an account
                    <router-link to="/signup">here</router-link>
                </p>
            </div>
        </section>
    </card-wrapper>
</template>


<script>
export default {
    data() {
        return {
            username: {
                val: '',
                invalid: false
            },
            password: {
                val: '',
                invalid: false
            },
            formIsValid: false,
            loading: false
        }
    },
    methods: {
        clearValidity(field) {
            this[field].invalid = false
        },
        submitHandler() {
            this.formIsValid = true
            if (this.username.val.trim() === '') {
                console.log('username is invalid')
                this.username.invalid = true
                this.formIsValid = false
            }
            if (this.password.val.trim() === '' || this.password.val.length <= 6) {
                console.log('password is invalid')
                this.password.invalid = true
                this.formIsValid = false
                return
            }
            if (!this.formIsValid) {
                return
            }
            this.formIsValid = true
            // this.$store.dispatch('login')
            // this.$router.replace('/')

            this.loading = true
            setTimeout(() => {
                this.loading = false
                this.$router.replace('/')
                this.$store.dispatch('login')
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
    top: 4%;
    left: calc(50% - 40px);
}

h2 {
    color: rgb(108, 187, 108);
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