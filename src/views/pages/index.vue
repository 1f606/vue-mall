<template>
  <div class="index">
    <div class="container">
      <div class="index-nav">
        <div class="index-nav_logo" title="小米商城">
          <a href="javascript:void(0)"></a>
        </div>
        <ul class="index-nav_list">
          <li>
            <span>小米手机</span>
            <div class="index-nav_sublist">
              <div class="container">
                <ul>
                  <li class="index-nav_prod" v-for="item in productList" :key="item.id">
                    <a :href="'/#/product/'+item.id" target="_blank">
                      <div class="prod-img">
                        <img :src="item.mainImage" :alt="item.subtitle">
                      </div>
                      <div class="prod-name">{{item.name}}</div>
                      <div class="prod-price">{{item.price | priceFormatter}}</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <span>红米</span>
            <div class="index-nav_sublist"></div>
          </li>
          <li>
            <span>电视</span>
            <div class="index-nav_sublist"></div>
          </li>
        </ul>
        <div class="index-nav_search">
          <div class="wrapper">
            <input type="text"/>
          </div>
          <a class="index-nav_searchIcon">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      productList: []
    }
  },
  created () {
    this.getProductList()
  },
  filters: {
    priceFormatter (val) {
      if (!val) return '0.00'
      return '￥' + val.toFixed(2) + '元'
    }
  },
  methods: {
    getProductList () {
      this.$apis.productList(100012).then(res => {
        console.log(res)
        this.productList = res.data.list.slice(0, 6)
      })
    },
    toLogin () {
      this.$router.push('/login')
    },
    toCart () {
      this.$router.push('/cart')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../../src/assets/style/variables';

  .index {
    position: relative;
  }

  .index-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 112px;

    .index-nav_logo {
      display: inline-block;
      width: 55px;
      height: 55px;
      background-color: #ff6600;

      a {
        display: inline-block;
        width: 110px;
        height: 55px;

        &::before, &::after {
          content: '';
          display: inline-block;
          width: 55px;
          height: 55px;
          background-size: contain;
        }

        &::before {
          background: url("../../../public/imgs/mi-logo.png") no-repeat center;
          transition: margin .2s;
        }

        &::after {
          background: url("../../../public/imgs/mi-home.png") no-repeat center;
        }

        &:hover::before {
          margin-left: -55px;
          transition: margin .2s;
        }

      }
    }

    .index-nav_list {
      display: inline-block;
      width: 643px;
      padding-left: 209px;

      & > li {
        display: inline-block;
        color: #333;
        font-weight: bold;
        font-size: 16px;
        margin-right: 20px;

        > span {
          cursor: pointer;
        }

        &:hover {
          color: $colorA;

          .index-nav_sublist {
            height: 220px;
            opacity: 1;
          }
        }

        .index-nav_sublist {
          position: absolute;
          left: 0;
          right: 0;
          top: 112px;
          margin: 0 auto;
          height: 0;
          opacity: 0;
          overflow: hidden;
          border-top: 1px solid #e5e5e5;
          box-shadow: 0 7px 6px 0 rgba(0, 0, 0, 0.11);
          font-size: 12px;
          z-index: $subListZIndex;
          background-color: #fff;
          transition: height .2s;

          .container {
            > ul {
              &::before, &::after {
                content: '';
                display: block;
                clear: both;
              }
            }
          }

          .index-nav_prod {
            float: left;
            width: 16.6%;
            height: 220px;
            position: relative;
            text-align: center;

            a {
              display: inline-block;
              text-align: center;

              .prod-img img {
                height: 111px;
                width: auto;
                margin-top: 26px;
              }

              .prod-name {
                margin: 19px 0 8px;
                font-weight: bold;
                color: $colorB;
              }

              .prod-price {
                color: $colorA;
              }
            }

            &:not(:last-child) {
              &::after {
                content: '';
                position: absolute;
                right: 0;
                top: 28px;
                display: inline-block;
                width: 1px;
                height: 110px;
                background-color: $colorF;
              }
            }
          }
        }
      }
    }

    .index-nav_search {
      width: 319px;

      .wrapper {
        height: 50px;
        border: 1px solid #e0e0e0;
        display: flex;
        align-items: center;

        input {
          box-sizing: border-box;
          border: none;
          border-right: 1px solid #e0e0e0;
          width: 264px;
          height: 50px;
          padding-left: 14px;
        }

        a {
          display: inline-block;
          width: 18px;
          height: 18px;
          background: url("../../../public/imgs/icon-search.png") no-repeat center;
          background-size: contain;
        }
      }
    }
  }
</style>
