import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import LoginPage from './pages/LoginPage.vue'
import SignupPage from './pages/SignupPage.vue'
import ProductsPage from './pages/ProductsPage.vue'
import NotFound from './pages/NotFound.vue'
import ProductDetail from './pages/ProductDetail.vue'
import store from './store//index.js'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: HomePage },
        { path: '/login', component: LoginPage,  meta: { requiresUnauth: true }},
        { path: '/signup', component: SignupPage,  meta: { requiresUnauth: true } },
        { path: '/products', component: ProductsPage, meta: { requiresAuth: true } },
        { path: '/products/:productId', component: ProductDetail },
        { path: '/:notFound(.*)', component: NotFound }
    ]
})

router.beforeEach(function (to, from, next) {
    if (to.meta.requiresAuth && !store.getters.isLoggedIn) {
        console.log('no')
        next('login')
    } else if (to.meta.requiresUnauth && store.getters.isLoggedIn) {
        console.log('no')
        next('/home')
    } else {
        console.log('yes')
        next()
    }
})


// beforeEnter(to, from, next) {
//     if (store.getters.isLoggedIn === true) {
//         console.log(store.getters.isLoggedIn)
//         next('/')
//         return
//     } else {
//         next()
//     }
// }

// router.beforeEach(function (to, from, next) {
//     if (to.meta.needsUnauth && store.getters.isLoggedIn) {
//         next('/')
//     } else if (to.meta.needsAuth && !store.getters.isLoggedIn) {
//         next('/login')
//     } else {
//         next()
//     }
// })

export default router