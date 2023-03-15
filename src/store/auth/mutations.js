export default {
    loginHandler(state) {
        state.isLoggedIn = true
    },
    logoutHandler(state) {
        state.isLoggedIn = false
    }
}