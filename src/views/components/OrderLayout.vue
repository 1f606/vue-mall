<template>
  <div>
    <router-view/>
    <service-bar></service-bar>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavFooter from './NavFooter'
import ServiceBar from './ServiceBar'
export default {
  name: 'order-layout',
  components: {
    NavFooter,
    ServiceBar
  }
}
</script>

<style scoped>

</style>
