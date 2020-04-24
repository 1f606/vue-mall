<template>
  <div class="home-layout">
    <nav-header></nav-header>
    <router-view/>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavHeader from './NavHeader'
import NavFooter from './NavFooter'

export default {
  name: 'home-layout',
  components: {
    NavHeader,
    NavFooter
  }
}
</script>

<style scoped>

</style>
