<template>
  <div id="carp">
    <div>CARP</div>
    <p>a beautiful ui library</p>
    <carp-button>TEST</carp-button>
  </div>
</template>

<script>
export default {
  name: 'carp'
};
</script>
<style lang="stylus">
#carp
  padding layout-gap-sm
  h1
    font-size font-size-title-lg
    color color-primary
  p
    font-size font-size-md
    color color-red-dark
</style>
