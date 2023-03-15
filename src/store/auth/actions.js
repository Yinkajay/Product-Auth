export default{
    login(context){
        context.commit('loginHandler')
    },
    logout(context){
        context.commit('logoutHandler')
    }
}