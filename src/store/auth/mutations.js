export default {
    loginHandler(state, payload) {
        state.isLoggedIn = true
        console.log('payload should be ' + payload)
        state.username = payload
    },
    logoutHandler(state) {
        state.isLoggedIn = false
    }
}