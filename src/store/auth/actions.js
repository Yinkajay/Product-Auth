export default{
    login(context, payload){
        console.log(payload.profileName)
        context.commit('loginHandler', payload.profileName)
    },
    logout(context){
        context.commit('logoutHandler')
    }
}