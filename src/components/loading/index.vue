<template>
  <div class="carp-loading">
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'carp-loading'
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
  background-color color-primary
  opacity 0.2
.carp-loading
  circel()
  display inline-block
  position relative
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
