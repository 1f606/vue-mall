<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  created () {
    this.getUserInfo()
    this.getCartInfo()
  },
  methods: {
    getUserInfo () {
      this.$apis.userInfo().then((res = {}) => {
        this.$store.dispatch('setUserName', res.data && res.data.username)
      })
    },
    getCartInfo () {
      this.$apis.cartCount().then((res = 0) => {
        this.$store.dispatch('setCartCount', res.data)
      })
    }
  }
}
</script>

<style lang="scss">
</style>
