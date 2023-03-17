export default {
    isLoggedIn(state) {
        return state.isLoggedIn
    },
    hasUsername(state) {
        return !!state.username
    },
    getUsername(state) {
        return state.username
    }
}