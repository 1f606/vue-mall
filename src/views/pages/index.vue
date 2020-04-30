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
            <div class="index-nav_sublist">
              <div class="container">
                <ul>
                  <li class="index-nav_prod" v-for="item in productListTwo" :key="item.id">
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
          <!--          <li>-->
          <!--            <span>电视</span>-->
          <!--            <div class="index-nav_sublist"></div>-->
          <!--          </li>-->
        </ul>
        <div class="index-nav_search">
          <div class="wrapper">
            <input type="text"/>
          </div>
          <a class="index-nav_searchIcon">
          </a>
        </div>
      </div>
      <div class="index-swiper">
        <div class="index-swiper_menu">
          <div class="index-swiper_menuItem">
            <div class="index-swiper_toggle">手机卡 电话卡</div>
            <div class="subListCon">
              <div class="index-swiper_subList" v-for="(item, index) in menuList" :key="index">
                <div class="index-swiper_subItem" v-for="subItem in item" :key="subItem ? subItem.id : Math.random()">
                  <a :href="subItem ? '/#/product/' + subItem.id : ''">
                    <img :src="subItem.img || require('../../../public/imgs/item-box-1.png')"
                         :alt="subItem.name || '小米9'">
                    <div>{{subItem.name || '小米9'}}</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="index-swiper_menuItem">
            <div class="index-swiper_toggle">电视 盒子</div>
            <div class="subListCon">
              <div class="index-swiper_subList" v-for="(item, index) in menuList" :key="index">
                <div class="index-swiper_subItem" v-for="subItem in item" :key="subItem ? subItem.id : Math.random()">
                  <a :href="subItem ? '/#/product/' + subItem.id : ''">
                    <img :src="subItem.img || require('../../../public/imgs/item-box-1.png')"
                         :alt="subItem.name || '小米9'">
                    <div>{{subItem.name || '小米9'}}</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="index-swiper_menuItem">
            <div class="index-swiper_toggle">单车</div>
            <div class="subListCon">
              <div class="index-swiper_subList" v-for="(item, index) in menuList" :key="index">
                <div class="index-swiper_subItem" v-for="subItem in item" :key="subItem ? subItem.id : Math.random()">
                  <a :href="subItem ? '/#/product/' + subItem.id : ''">
                    <img :src="subItem.img || require('../../../public/imgs/item-box-1.png')"
                         :alt="subItem.name || '单车'">
                    <div>{{subItem.name || '单车'}}</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="index-swiper_menuItem">
            <div class="index-swiper_toggle">电源配件</div>
            <div class="subListCon">
              <div class="index-swiper_subList" v-for="(item, index) in menuList" :key="index">
                <div class="index-swiper_subItem" v-for="subItem in item" :key="subItem ? subItem.id : Math.random()">
                  <a :href="subItem ? '/#/product/' + subItem.id : ''">
                    <img :src="subItem.img || require('../../../public/imgs/item-box-1.png')"
                         :alt="subItem.name || '电源配件'">
                    <div>{{subItem.name || '电源配件'}}</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="index-swiper_menuItem">
            <div class="index-swiper_toggle">笔记本</div>
            <div class="subListCon">
              <div class="index-swiper_subList" v-for="(item, index) in menuList" :key="index">
                <div class="index-swiper_subItem" v-for="subItem in item" :key="subItem ? subItem.id : Math.random()">
                  <a :href="subItem ? '/#/product/' + subItem.id : ''">
                    <img :src="subItem.img || require('../../../public/imgs/item-box-1.png')"
                         :alt="subItem.name || '小米9'">
                    <div>{{subItem.name || '小米9'}}</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="index-swiper_menuItem">
            <div class="index-swiper_toggle">笔记本</div>
            <div class="subListCon">
              <div class="index-swiper_subList" v-for="(item, index) in menuList" :key="index">
                <div class="index-swiper_subItem" v-for="subItem in item" :key="subItem ? subItem.id : Math.random()">
                  <a :href="subItem ? '/#/product/' + subItem.id : ''">
                    <img :src="subItem.img || require('../../../public/imgs/item-box-1.png')"
                         :alt="subItem.name || '小米9'">
                    <div>{{subItem.name || '小米9'}}</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="index-swiper_menuItem">
            <div class="index-swiper_toggle">笔记本</div>
            <div class="subListCon">
              <div class="index-swiper_subList" v-for="(item, index) in menuList" :key="index">
                <div class="index-swiper_subItem" v-for="subItem in item" :key="subItem ? subItem.id : Math.random()">
                  <a :href="subItem ? '/#/product/' + subItem.id : ''">
                    <img :src="subItem.img || require('../../../public/imgs/item-box-1.png')"
                         :alt="subItem.name || '小米9'">
                    <div>{{subItem.name || '小米9'}}</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="index-swiper_menuItem">
            <div class="index-swiper_toggle">家电</div>
            <div class="subListCon">
              <div class="index-swiper_subList" v-for="(item, index) in menuList" :key="index">
                <div class="index-swiper_subItem" v-for="subItem in item" :key="subItem ? subItem.id : Math.random()">
                  <a :href="subItem ? '/#/product/' + subItem.id : ''">
                    <img :src="subItem.img || require('../../../public/imgs/item-box-1.png')"
                         :alt="subItem.name || '家电'">
                    <div>{{subItem.name || '家电'}}</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="index-swiper_menuItem">
            <div class="index-swiper_toggle">路由器</div>
            <div class="subListCon">
              <div class="index-swiper_subList" v-for="(item, index) in menuList" :key="index">
                <div class="index-swiper_subItem" v-for="subItem in item" :key="subItem ? subItem.id : Math.random()">
                  <a :href="subItem ? '/#/product/' + subItem.id : ''">
                    <img :src="subItem.img || require('../../../public/imgs/item-box-1.png')"
                         :alt="subItem.name || '路由器'">
                    <div>{{subItem.name || '路由器'}}</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="index-swiper_menuItem">
            <div class="index-swiper_toggle">笔记本</div>
            <div class="subListCon">
              <div class="index-swiper_subList" v-for="(item, index) in menuList" :key="index">
                <div class="index-swiper_subItem" v-for="subItem in item" :key="subItem ? subItem.id : Math.random()">
                  <a :href="subItem ? '/#/product/' + subItem.id : ''">
                    <img :src="subItem.img || require('../../../public/imgs/item-box-1.png')"
                         :alt="subItem.name || '笔记本'">
                    <div>{{subItem.name || '笔记本'}}</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <swiper :options="swiperOptions">
          <swiper-slide v-for="item in slideList" :key="item.id">
            <a :href="'/#/product/'+item.id"><img :src="item.img"></a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="index-adsList">
        <a class="index-adsList_item" v-for="item in adsList" :key="item.id">
          <img v-lazy="item.img" alt="advertise"/>
        </a>
      </div>
    </div>
    <div class="index-phone">
      <div class="container">
        <h5>手机</h5>
        <div class="index-phone_wrapper">
          <a href="/#/product/111" class="index-phone_alpha">
            <img src="../../../public/imgs/mix-alpha.jpg" alt="mi mix alpha">
          </a>
          <div class="index-phone_list">
            <div class="index-phone_item" v-for="item in phoneList" :key="item.id">
              <span class="index-phone_tag" v-if="item.status">新品</span>
              <div class="index-phone_imgWrapper">
                <img :src="item.mainImage" :alt="item.name"/>
              </div>
              <div class="index-phone_name">{{item.name}}</div>
              <div class="index-phone_desc">{{item.subtitle}}</div>
              <div class="index-phone_price" @click="showModal = true">
                {{item.price}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Modal
      title="提示"
      type="1"
      confirm-text="查看购物车"
      size="middle"
      :show-modal="showModal"
      @cancel="showModal = false"
      @confirm="toCart"
    >
      <template slot="body">
        <p>商品添加成功</p>
      </template>
    </Modal>
    <service-bar></service-bar>
  </div>
</template>

<script>
import ServiceBar from '../components/ServiceBar'
import Modal from '../../components/Modal'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'index',
  data () {
    return {
      productList: [],
      productListTwo: [],
      productListThree: [],
      slideList: [
        {
          id: '42',
          img: require('../../../public/imgs/slider/slide-1.jpg')
        },
        {
          id: '45',
          img: require('../../../public/imgs/slider/slide-2.jpg')
        },
        {
          id: '46',
          img: require('../../../public/imgs/slider/slide-3.jpg')
        },
        {
          id: '47',
          img: require('../../../public/imgs/slider/slide-4.jpg')
        },
        {
          id: '48',
          img: require('../../../public/imgs/slider/slide-1.jpg')
        }
      ],
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        effect: 'cube',
        cubeEffect: {
          slideShadows: false,
          shadow: false,
          shadowOffset: 100,
          shadowScale: 0.6
        },
        loop: true
      },
      menuList: [
        [
          {
            id: 30,
            img: require('../../../public/imgs/item-box-1.png'),
            name: '小米CC9'
          },
          {
            id: 31,
            img: require('../../../public/imgs/item-box-2.png'),
            name: '小米8青春版'
          },
          {
            id: 32,
            img: require('../../../public/imgs/item-box-3.jpg'),
            name: 'Redmi K20 Pro'
          },
          {
            id: 33,
            img: require('../../../public/imgs/item-box-4.jpg'),
            name: '移动4G专区'
          }
        ],
        [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]
      ],
      adsList: [
        {
          id: 33,
          img: require('../../../public/imgs/ads/ads-1.png')
        },
        {
          id: 48,
          img: require('../../../public/imgs/ads/ads-2.jpg')
        },
        {
          id: 45,
          img: require('../../../public/imgs/ads/ads-3.png')
        },
        {
          id: 47,
          img: require('../../../public/imgs/ads/ads-4.jpg')
        }
      ],
      phoneList: [],
      showModal: false
    }
  },
  components: {
    ServiceBar,
    Swiper,
    SwiperSlide,
    Modal
  },
  created () {
    this.getProductList()
    this.getPhoneList()
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
        this.productList = res.list.slice(0, 6)
        this.productListTwo = res.list.slice(5)
      })
    },
    getPhoneList () {
      this.$apis.productList(100012, 14).then(res => {
        this.phoneList = res.list.slice(6, 14)
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
  @import '../../../src/assets/style/mixin';

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

  .index-swiper {
    position: relative;

    .swiper-container {
      height: 451px;

      img {
        height: 100%;
        width: 100%;
      }

      .swiper-button-prev {
        left: 264px;
      }
    }

    .index-swiper_menu {
      position: absolute;
      left: 0;
      top: 0;
      box-sizing: border-box;
      height: 451px;
      padding: 20px 0;
      z-index: 10;
      color: #fff;
      background-color: rgba(105, 101, 101, .6);;

      .index-swiper_menuItem {
        .index-swiper_toggle {
          width: 234px;
          height: 42px;
          line-height: 42px;
          cursor: pointer;
          padding-left: 30px;
        }

        &:hover {
          .index-swiper_toggle {
            background-color: $colorA;;
          }

          .subListCon {
            display: block !important;
          }
        }

        .subListCon {
          display: none;
          position: absolute;
          left: 264px;
          top: 0;
          z-index: 99999;

          .index-swiper_subList {
            width: 992px;
            background-color: #fff;

            &::after, &::before {
              content: '';
              display: block;
              clear: both;
            }

            .index-swiper_subItem {
              box-sizing: border-box;
              float: left;
              width: 25%;
              padding: 18px 20px;

              a {
                img, div {
                  display: inline-block;
                  vertical-align: middle;
                }

                img {
                  width: 35px;
                  height: 42px;
                }
              }
            }
          }
        }
      }
    }
  }

  .index-adsList {
    padding: 14px 0 31px;

    &::before, &::after {
      content: '';
      display: block;
      clear: both;
    }

    .index-adsList_item:not(:first-child) {
      margin-left: 14px;
    }

    .index-adsList_item {
      float: left;

      img {
        width: 296px;
        height: 167px;
      }
    }
  }

  .index-phone {
    padding-top: 30px;
    background-color: #f5f5f5;

    h5 {
      font-size: 22px;
      height: 21px;
      line-height: 21px;
      color: #333;
      margin-bottom: 20px;
    }

    .index-phone_alpha {
      display: inline-block;

      img {
        width: 224px;
        height: 619px;
      }
    }

    .index-phone_list {
      display: inline-block;
      width: 986px;
      padding-left: 16px;

      &::before, &::after {
        content: '';
        display: block;
        clear: both;
      }

      .index-phone_item {
        float: left;
        width: 236px;
        height: 302px;
        background-color: #fff;
        text-align: center;

        .index-phone_tag {
          display: inline-block;
          width: 67px;
          height: 24px;
          line-height: 24px;
          font-size: 14px;
          color: #fff;
          background-color: #7ecf68;
        }

        .index-phone_imgWrapper {
          img {
            width: 100%;
            height: 195px;
          }
        }
      }

      .index-phone_item:not(:nth-child(1)):not(:nth-child(5)) {
        margin-left: 14px;
      }

      .index-phone_item:not(:nth-child(n+5)) {
        margin-bottom: 14px;
      }

      .index-phone_name {
        font-size: 14px;
        color: #333;
        line-height: 14px;
        font-weight: 700;
      }

      .index-phone_desc {
        color: #999;
        line-height: 13px;
        margin: 6px auto 13px;
      }

      .index-phone_price {
        color: #f20a0a;
        font-size: 14px;
        font-weight: 700;
        cursor: pointer;

        &::after {
          content: '';
          @include bgImg(22px, 22px, '../../../public/imgs/icon-cart-hover.png');
          vertical-align: text-bottom;
        }
      }
    }
  }
</style>
