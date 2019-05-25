<template>
  <div id="carp">
    <div>CARP</div>
    <p>- Button -</p>
    <carp-button>TEST</carp-button>
    <br />
    <carp-button outline loading>TEST</carp-button>
    <p>- Loading -</p>
    <carp-loading color="red"></carp-loading>
    <carp-loading color="orange"></carp-loading>
    <carp-loading color="blue"></carp-loading>
    <p>- Switch -</p>
    <carp-switch v-model="off.status" />
    <p>- Tab -</p>
    <carp-tab
      point
      flex
      :data="tab.data"
      v-model="tab.index"
      :font-size="20"
      animate
    >
      <div slot="animation">{{ tab.index }}</div>
      <div>{{ tab.index }}</div>
    </carp-tab>
    <carp-tab
      point
      :data="tab.data"
      v-model="tab.index"
      :font-size="20"
      style="display:inline-block;width: 50%"
    ></carp-tab>
    <carp-tab
      :data="tab.data"
      v-model="tab.index"
      :font-size="14"
      color="#b09c7e"
      indicator-color="#f60"
      style="display:inline-block;width: 50%"
      animation
    ></carp-tab>
  </div>
</template>

<script>
export default {
  name: 'carp',
  data() {
    return {
      off: {
        status: false
      },
      tab: {
        data: [{ name: '接机' }, { name: '送机' }],
        index: 0
      }
    };
  }
};
</script>
<style lang="stylus" scoped>
#carp
  padding layout-gap-sm
  h1
    font-size font-size-title-lg
    color color-primary
  p
    padding 6px 0
    font-size font-size-md
    color #666
    font-weight 500
    background #f2f2f2
    text-align center
  .carp-loading
    display block
    margin-left 20px
    margin-bottom 20px
  .carp-tab
    text-align center
    .carp-loading
      display inline-block
</style>
