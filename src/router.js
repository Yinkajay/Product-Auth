import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import LoginPage from './pages/LoginPage.vue'
import SignupPage from './pages/SignupPage.vue'
import ProductsPage from './pages/ProductsPage.vue'
import NotFound from './pages/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage },
        { path: '/login', component: LoginPage },
        { path: '/signup', component: SignupPage },
        { path: '/products', component: ProductsPage },
        { path: '/:notFound(.*)', component: NotFound }
    ]
})

export default router