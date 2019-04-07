<template>
  <div class="carp-button" @click="!disabled && $emit('click:button')">
    TEST
  </div>
</template>

<script>
const NAME = 'carp-button';

export default {
  name: NAME,
  props: {
    // 按钮禁用
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="stylus">
.{namespace}button
  v-height(44px)
  font-size btn-text-size-md
  text-align center
  color btn-text-color
  background-color btn-background-color
    &.disabled
      color btn-text-color-disabled
</style>
