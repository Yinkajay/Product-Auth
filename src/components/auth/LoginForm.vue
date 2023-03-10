<template>
    <section>
        <card-wrapper>
            <form @submit.prevent="submitHandler">
                <div class="form-field" :class="{ invalid: username.invalid }">
                    <label>Username/Email</label>
                    <input type="text" v-model="username.val">
                </div>
                <div class="form-field" :class="{ invalid: password.invalid }">
                    <label>Password</label>
                    <input type="password" v-model="password.val">
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
            <div>
                <p>Create an account
                    <router-link to="/signup">here</router-link>
                </p>
            </div>
        </card-wrapper>
    </section>
</template>


<script scoped>
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
            formIsValid: false
        }
    },
    methods: {
        clearValidity(){
            
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
        }
    }
}

</script>

<style scoped>
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
}

button:hover {
    background-color: white;
    color: rgb(28, 149, 28);
    border: 1px solid;
}
</style>