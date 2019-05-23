<template>
  <div
    class="carp-button"
    :class="bindClass"
    ref="carp-button"
    @click="(!disabled || !loading) && $emit('click:button')"
  >
    <Loading v-if="loading" :key="'button-loading'"></Loading>
    <slot v-else></slot>
  </div>
</template>

<script>
import Loading from '../loading';

export default {
  name: 'carp-button',
  props: {
    // 按钮禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 圆角样式
    radius: {
      type: Boolean,
      default: false
    },
    // 行内样式
    inline: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    outline: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    bindClass() {
      let { disabled, radius, inline, small, outline, loading } = this;
      return {
        disabled,
        radius,
        inline,
        small,
        outline,
        relative: loading
      };
    }
  },
  components: { Loading },
  mounted() {
    // 激活Safari元素active样式
    this.$refs['carp-button'].addEventListener(
      'touchstart',
      function() {},
      false
    );
  }
};
</script>

<style lang="stylus">
.carp-button
  padding 0 layout-gap-sm
  v-height(btn-text-size-md * 2.6)
  font-size btn-text-size-md
  text-align center
  color btn-text-color
  background-color btn-background-color
  user-select none
  &:active
    background-color desaturate(btn-background-color, 40%)
  &.radius
    border-radius btn-radius
    &.outline
      borderOnePx(btn-background-color, false, btn-radius)
  &.inline
    display inline-block
  &.small
    font-size btn-text-size-sm
    v-height(btn-text-size-sm * 2.2)
  &.outline
    background-color transparent
    color btn-background-color
    borderOnePx(btn-background-color)
    .carp-loading > div
      background-color btn-background-color !important
  &.disabled
    color darken(btn-text-color, 5%)
    background-color lighten(desaturate(btn-background-color, 80%), 80%)
    cursor not-allowed
    &.outline
      background-color transparent
      borderOnePx(@color)
    &.radius
      &.outline
        borderOnePx(@color, false, btn-radius)
  &.relative
    position relative
</style>
