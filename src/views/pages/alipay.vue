<template>
  <div class="ali-pay">
    <order-header title="订单支付">
      <template v-slot:tip>
        <span>请谨防钓鱼链接或诈骗电话，了解更多</span>
      </template>
    </order-header>
    <loading v-if="loading"></loading>
    <div class="form" v-html="content"></div>
  </div>
</template>
<script>
import Loading from './../components/Loading'
import OrderHeader from '../components/OrderHeader'

export default {
  name: 'alipay',
  components: {
    Loading,
    OrderHeader
  },
  data () {
    return {
      orderId: this.$route.query.orderId,
      content: '',
      loading: true
    }
  },
  mounted () {
    this.paySubmit()
  },
  methods: {
    paySubmit () {
      this.$apis.pay({
        orderId: this.orderId,
        orderName: 'Vue高仿小米商城',
        amount: 0.01,
        payType: 1
      }).then((res) => {
        this.content = res.data.content
        setTimeout(() => {
          document.forms[0].submit()
        }, 100)
      })
    }
  }
}
</script>
