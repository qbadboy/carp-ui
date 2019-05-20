<template>
  <div id="demo">
    <!-- point -->
    <carp-tab
      v-model="tabIndex1"
      :tabs="data.tab1"
      indicator-type="bar"
      :indicator-width="10"
      color="#b09c7e"
      :font-size="14"
      :font-weight="400"
      :is-scroll="true"
      :is-animation="false"
    >
      <div v-if="tabIndex1 == 0">aaa</div>
      <div v-if="tabIndex1 == 1">bbb</div>
      <div v-if="tabIndex1 == 2">ccc</div>
    </carp-tab>
    <!-- bar -->
    <carp-tab
      v-model="tabIndex2"
      :tabs="data.tab2"
      indicator-type="point"
      :font-size="32"
      :font-weight="400"
      :is-scroll="true"
      :is-animation="true"
    >
      <div v-if="tabIndex2 == 0">xxx</div>
      <div v-if="tabIndex2 == 1">二二二</div>
      <div v-if="tabIndex2 == 2">三三三</div>
    </carp-tab>
  </div>
</template>

<script>
import tab from './index';

export default {
  components: { CarpTab: tab },
  data() {
    return {
      data: {
        tab1: [{ name: '国内' }, { name: '境外' }, { name: '境外境外境外' }],
        tab2: [
          { name: '接站' },
          { name: '送站', disabled: true },
          { name: '定制用车' },
          { name: '定制用车' },
          { name: '定制用车' },
          { name: '定制用车' }
        ]
      },
      tabIndex1: 0,
      tabIndex2: 0
    };
  }
};
</script>

<style lang="stylus" scoped>
#demo
  padding layout-gap-md 0
  margin 0 layout-gap-md
  .carp-button
    margin-bottom layout-gap-sm
</style>
