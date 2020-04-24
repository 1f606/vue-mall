<template>
  <div>
    <order-header></order-header>
    <router-view/>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import OrderHeader from './OrderHeader'
import NavFooter from './NavFooter'
export default {
  name: 'order-layout',
  components: {
    OrderHeader,
    NavFooter
  }
}
</script>

<style scoped>

</style>
