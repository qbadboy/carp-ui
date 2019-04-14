<template>
  <div class="carp-loading">
    <div :style="{ backgroundColor: this.color }"></div>
    <div :style="{ backgroundColor: this.color }"></div>
    <div :style="{ backgroundColor: this.color }"></div>
  </div>
</template>

<script>
export default {
  name: 'carp-loading',
  props: {
    color: {
      type: String,
      default: '#FFF'
    }
  }
};
</script>

<style lang="stylus">
circel()
  width 6px
  height @width
  border-radius 50%
c-loading()
  circel()
  position absolute
  background-color color-white
  opacity 0.2
.carp-loading
  circel()
  display inline-block
  position absolute
  left 50%
  top 50%
  transform translate(-50%, -50%)
  & > div
    &:nth-child(1)
      c-loading()
      left -200%
      animation c1 2s infinite
    &:nth-child(2)
      c-loading()
      animation c2 2s infinite
    &:nth-child(3)
      c-loading()
      right -200%
      animation c3 2s infinite
@keyframes c1
  0%
    opacity 0.2
    transform scale(1, 1)
  25%
    opacity 0.9
    transform scale(1.1, 1.1)
  50%
    opacity 0.2
    transform scale(1, 1)
  75%
    opacity 0.2
  100%
    opacity 0.2
@keyframes c2
  0%
    opacity 0.2
  25%
    opacity 0.2
    transform scale(1, 1)
  50%
    opacity 0.9
    transform scale(1.1, 1.1)
  75%
    opacity 0.2
    transform scale(1, 1)
  100%
    opacity 0.2
@keyframes c3
  0%
    opacity 0.2
  25%
    opacity 0.2
  50%
    opacity 0.2
    transform scale(1, 1)
  75%
    opacity 0.9
    transform scale(1.1, 1.1)
  100%
    opacity 0.2
    transform scale(1, 1)
</style>
