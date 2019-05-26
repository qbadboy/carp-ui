<template>
  <div class="carp-tab">
    <div class="carp-tab-inner">
      <div
        class="carp-tab-item"
        v-for="(tab, idx) in data"
        :key="`tab-item-${idx}`"
      >
        {{ tab.name }}
      </div>
    </div>
    <div class="carp-nav-indicator"></div>
  </div>
</template>

<script>
export default {
  name: 'carp-tab',
  props: {
    data: {
      type: Array,
      default: () => {}
    },
    current: { type: Number, default: 0 },
    width: [String, Number],
    border: Boolean,
    scrollX: Boolean
  }
};
</script>

<style lang="stylus">
.carp-tab
  overflow hidden
  &-inner
    white-space nowrap
  &-item
    display inline-block
</style>
