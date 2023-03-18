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
        { path: '/login', component: LoginPage, meta: { requiresnotLoggedIn: true } },
        { path: '/signup', component: SignupPage, meta: { requiresnotLoggedIn: true } },
        { path: '/products', component: ProductsPage, meta: { requiresloggedIn: true } },
        { path: '/products/:productId', component: ProductDetail, meta: { requiresloggedIn: true } },
        { path: '/:notFound(.*)', component: NotFound }
    ]
})

router.beforeEach(function (to, from, next) {
    if (to.meta.requiresloggedIn && !store.getters.isLoggedIn) {
        
        console.log('no')
        next('login')
        return
    } else if (to.meta.requiresnotLoggedIn && store.getters.isLoggedIn === true) {
        console.log('no')
        next('/')
        return
    } else {
        // console.log(from)
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