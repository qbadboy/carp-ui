<template>
  <div id="demo">
    <carp-button>normal</carp-button>
    <carp-button loading>loading</carp-button>
    <carp-button loading outline>loading</carp-button>
    <carp-button outline>outline</carp-button>
    <carp-button radius>radius</carp-button>
    <carp-button disabled>disabled</carp-button>
    <carp-button small>small</carp-button>
    <carp-button inline>inline</carp-button>
  </div>
</template>

<script>
import button from './index';

export default {
  components: { carpButton: button }
};
</script>

<style lang="stylus" scoped>
#demo
  padding layout-gap-md 0
  margin 0 layout-gap-md
  .carp-button
    margin-bottom layout-gap-sm
</style>
