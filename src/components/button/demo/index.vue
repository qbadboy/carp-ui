<template>
  <div id="demo">
    <carp-button></carp-button>
  </div>
</template>

<script>
import button from '../index';

export default {
  components: { carpButton: button }
};
</script>

<style lang="stylus" scoped>
#demo
  padding layout-gap-md 0
  margin 0 layout-gap-md
</style>
