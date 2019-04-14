<template>
  <div id="demo">
    <carp-switch v-model="status"></carp-switch>
    <carp-switch v-model="disabledStatus" disabled></carp-switch>
  </div>
</template>

<script>
import Switch from './index';

export default {
  data() {
    return {
      status: true,
      disabledStatus: true
    };
  },
  components: { carpSwitch: Switch }
};
</script>

<style lang="stylus" scoped>
#demo
  padding layout-gap-md 0
  margin 0 layout-gap-md
  .carp-button
    margin-bottom layout-gap-sm
</style>
