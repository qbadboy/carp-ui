<template>
  <div class="carp-input" :class="{ large, focus, line }">
    <div class="carp-input-box">
      <div class="carp-input-control">
        <input
          :type="type"
          :placeholder="placeholder"
          :autofocus="autofocus"
          :value="value"
          @input="$emit('input', $event.target.value)"
          @focus="onFocus"
          @blur="onBlur"
        />
      </div>
      <div
        v-if="value && action"
        class="carp-input-action"
        @click="
          !$slots.action && !actionText
            ? $emit('input', '')
            : $emit('click:action')
        "
      >
        {{ actionText }}
        <slot name="action"></slot>
        <carp-iconfont
          v-if="!$slots.action && !actionText"
          name="close"
        ></carp-iconfont>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'carp-input',
  data() {
    return {
      focus: false
    };
  },
  props: {
    value: [String, Number],
    type: {
      type: String,
      default: 'text'
    },
    placeholder: String,
    large: { type: Boolean, default: false },
    line: { type: Boolean, default: false },
    action: { type: Boolean, default: true },
    actionText: String,
    autofocus: { type: Boolean, default: false }
  },
  methods: {
    onFocus() {
      this.focus = true;
      this.$emit('focus');
    },
    onBlur() {
      this.focus = false;
      this.$emit('blur');
    }
  }
};
</script>

<style lang="stylus">
.carp-input
  padding 6px
  &.line
    borderOnePx(input-border-color, bottom)
    &.focus
      &:after
        border-color input-focus-color !important
  &-box
    display flex
    flex-wrap nowrap
    align-items center
  &-control
    flex 1
    padding-right 6px
    box-sizing border-box
    font-size input-text-size
    input
      padding 0
      width 100%
      caret-color input-caret-color
      border 0
      outline none
      font-weight input-text-weight
      &::-webkit-input-placeholder
        color input-text-placeholder-color
  &-action
    display inline-block
    vertical-align middle
    font-size input-text-action-size
    font-weight input-text-weight
    color input-action-color
  .carp-iconfont
    font-size input-text-action-size !important
    color input-action-icon-color
  &.large
    .carp-input
      &-control
        input
          font-size input-text-size-lg !important
      &-action
        font-size input-text-action-size-lg !important
    .carp-iconfont
      font-size input-text-action-size-lg !important
</style>
