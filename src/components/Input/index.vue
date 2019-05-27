<template>
  <div class="carp-input">
    <div class="carp-input-box">
      <div class="carp-input-control">
        <input
          :type="type"
          :placeholder="placeholder"
          :autofocus="autofocus"
          :value="value"
          @input="$emit('input', $event.target.value)"
        />
      </div>
      <div v-if="value" class="carp-input-action" @click="$emit('input', '')">
        <slot name="action"></slot>
        <carp-iconfont v-if="!$slots.action" name="del"></carp-iconfont>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'carp-input',
  props: {
    value: [String, Number],
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    autofocus: { type: Boolean, default: false }
  }
};
</script>

<style lang="stylus">
.carp-input
  &-box
    display flex
    flex-wrap nowrap
    align-items center
    font-weight input-text-weight
  &-control
    flex 1
    padding-right 6px
    box-sizing border-box
    input
      width 100%
      caret-color input-caret-color
      font-size input-text-size
      font-weight input-text-weight
      border 0
      outline none
      &::-webkit-input-placeholder
        color input-text-placeholder-color
  &-action
    display inline-block
    vertical-align middle
    font-size input-text-size
    color input-action-color
    .carp-iconfont
      color input-action-icon-color !important
</style>
