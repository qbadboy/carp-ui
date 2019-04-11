<template>
  <div class="iPhone">
    <iframe :src="site" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
  props: {
    site: String
  }
};
</script>


<style lang="stylus">
.iPhone
  display inline-block
  width 280px
  height 576px
  border 12px solid #000
  border-radius 40px
  overflow hidden
  position relative
  &:before
    display block
    content ''
    width 60%
    height 20px
    background-color #000
    position absolute
    left 50%
    transform translateX(-50%)
    border-bottom-left-radius 20px
    border-bottom-right-radius 20px
  iframe
    width 100%
    height 100%
</style>


