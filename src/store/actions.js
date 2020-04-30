export default {
  setUserName (context, username) {
    context.commit('setUserName', username)
  },
  setCartCount (context, cartCount) {
    context.commit('setCartCount', cartCount)
  }
}
