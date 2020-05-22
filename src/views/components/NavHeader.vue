<template>
  <div class="nav-header">
    <div class="container">
      <div class="nav-list">
        <a href="javascript:void(0)">小米商城</a>
        <a href="javascript:void(0)">MIUI</a>
        <a href="javascript:void(0)">云服务</a>
        <a href="javascript:void(0)">协议规则</a>
      </div>
      <div class="nav-user">
        <div v-if="username">
          <a href="javascript:void(0)">{{username}}</a>
          <a href="/#/order/list">我的订单</a>
        </div>
        <div v-else>
          <a href="/#/login">请登录</a>
        </div>
        <div class="cart" @click="$router.push('/cart')"><span class="icon-cart"></span>购物车({{cartCount}})</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-header',
  computed: {
    username () {
      return this.$store.state.username
    },
    cartCount () {
      return this.$store.state.cartCount
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/style/variables';
  .nav-header {
    background-color: #333;
    .container {
      width: $min-width;
      height: 39px;
      line-height: 39px;
      &::after, &::before {
        content: '';
        display: block;
        clear: both;
      }
    }
    .nav-list {
      float: left;
      a {
        color: #b0b0b0;
        margin-right: 17px;
      }
    }
    .nav-user {
      float: right;
      a {
        margin-right: 17px;
      }
      a, div {
        display: inline-block;
        color: #b0b0b0;
      }
      .cart {
        width: 110px;
        text-align: center;
        background-color: $colorA;
        color: #fff;
        cursor: pointer;
        .icon-cart {
          display: inline-block;
          width: 16px;
          height: 12px;
          margin-right: 10px;
          vertical-align: text-top;
          background: url("../../../public/imgs/icon-cart-checked.png") no-repeat center;
          background-size: contain;
        }
      }
    }
  }
</style>
