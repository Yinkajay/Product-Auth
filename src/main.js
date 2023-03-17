import { createApp } from 'vue'
import App from './App.vue'
import ProductsList from './components/products/ProductsList.vue'
import ProductItem from './components/products/ProductItem.vue'
import CardWrapper from './components/UI/CardWrapper.vue'
import LoadingSpinner from './components/UI/LoadingSpinner.vue'
import store from './store'
import router from './router.js'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { RiHomeSmileLine, BiShop, MdLogin, MdManageaccounts, HiSolidStar, GiHamburgerMenu } from "oh-vue-icons/icons";

addIcons(RiHomeSmileLine, BiShop, MdLogin, MdManageaccounts, HiSolidStar, GiHamburgerMenu);

const app = createApp(App)
app.component("v-icon", OhVueIcon);

app.component('products-list', ProductsList)
app.component('product-item', ProductItem)
app.component('card-wrapper', CardWrapper)
app.component('loading-spinner', LoadingSpinner)

app.use(store)
app.use(router)


app.mount('#app')


