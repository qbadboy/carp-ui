<template>
  <div
    class="carp-switch"
    :class="{ active: checked, disabled }"
    @click="trigger"
  >
    <input
      type="checkbox"
      ref="switch-input"
      :checked="checked"
      :disabled="disabled"
      @change="$emit('change:switch', $event.target.checked)"
    />
  </div>
</template>

<script>
export default {
  name: 'carp-switch',
  props: {
    checked: Boolean,
    disabled: Boolean
  },
  model: {
    event: 'change:switch',
    prop: 'checked'
  },
  methods: {
    trigger() {
      this.$refs['switch-input'].click();
    }
  }
};
</script>

<style lang="stylus">
.carp-switch
  width switch-width
  height switch-height
  border 1px solid switch-border-color
  border-radius (switch-height / 2)
  background-color switch-background-color
  position relative
  transition background-color 200ms
  &:before
    display block
    content ''
    width switch-height
    height switch-height
    border-radius (switch-height / 2)
    background-color #FFF
    box-shadow 0 0 3px rgba(0, 0, 0, 0.6)
    position absolute
    left 0
    top 0
    transition left 200ms
  &.disabled
    opacity 0.5
  &.active
    background-color switch-background-color-acitve
    border 1px solid switch-border-color-active
    &:before
      left (switch-width - switch-height)
  input[type='checkbox']
    width 0
    height 0
    visibility hidden
    position absolute
    left 10000px
    top 10000px
</style>
