<template>
  <transition name="slide">
    <div class="modal-wrapper" v-show="showModal">
      <div class="mask"></div>
      <div class="modal">
        <div class="modal-header">
          <span>{{title}}</span>
          <div class="icon-close" @click="$emit('cancel')"></div>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
          <a href="javascript:void(0)" class="btn" v-if="type === '1'" @click="$emit('confirm')">{{confirmText}}</a>
          <a href="javascript:void(0)" class="btn" v-if="type === '2'" @click="$emit('cancel')">{{cancelText}}</a>
          <div class="btn-group" v-if="type === '3'">
            <a href="javascript:void(0)" class="btn" @click="$emit('confirm')">{{confirmText}}</a>
            <a href="javascript:void(0)" class="btn" @click="$emit('cancel')">{{cancelText}}</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'modal',
  data () {
    return {
    }
  },
  props: {
    //  small, middle, large, form
    size: {
      type: String,
      default: 'form'
    },
    title: String,
    //  1:确定, 2:取消， 3
    type: String,
    confirmText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    showModal: Boolean
  }
}
</script>

<style lang="scss">
  @import "src/assets/style/mixin";
  @import "src/assets/style/variables";
  .modal-wrapper{
    @include position(fixed);
    z-index: 99999;
    transition: top .5s;
    .mask{
      @include position(fixed);
      background-color: $colorI;
      opacity: 0.5;
    }
    &.slide-enter, &.slide-leave-to {
      top: -100%;
    }
    &.slide-enter-to, &.slide-leave {
      top: 0;
    }
    .modal{
      @include position(absolute,40%,50%,660px,auto);
      background-color: $colorG;
      transform:translate(-50%,-50%);
      .modal-header{
        height:60px;
        background-color: $colorJ;
        padding:0 25px;
        line-height: 60px;
        font-size:$fontI;
        .icon-close{
          cursor: pointer;
          @include positionImg(absolute,23px,25px,14px,14px,'/imgs/icon-close.png');
          transition: transform .3s;
          &:hover{
            transform: scale(1.5);
          }
        }
      }
      .modal-body{
        padding:42px 40px 54px;
        font-size:14px;
      }
      .modal-footer{
        height: 82px;
        line-height: 82px;
        text-align: center;
        background-color: $colorJ;
      }
    }
  }
</style>
