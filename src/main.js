import { createApp } from 'vue'
import App from './App.vue'
import ProductsList from './components/products/ProductsList.vue'

const app = createApp(App)

app.component('products-list', ProductsList)


app.mount('#app')


