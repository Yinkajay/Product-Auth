import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export default {
    state() {
        return {
            isLoggedIn: null
        }
    },
    getters,
    mutations,
    actions
}