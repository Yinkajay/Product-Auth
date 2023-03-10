import { createStore } from "vuex";
import auth from "./auth";
import products from "./products";

const store = createStore({
    modules: {
        authModule: auth,
        productsModule: products
    },
    state() {

    },
    getters: {

    }
})

export default store