<template>
  <div id="carp">
    <div>CARP</div>
    <p>- Button -</p>
    <carp-button>TEST</carp-button>
    <br />
    <carp-button loading>TEST</carp-button>
    <carp-button outline loading>TEST</carp-button>
    <p>- Loading -</p>
    <carp-loading></carp-loading>
    <p>- Switch -</p>
    <carp-switch v-model="off.status" />
    <p>- Nav -</p>
    <carp-nav
      :data="nav.data"
      v-model="nav.index"
      @nav:click="onNavClick"
    ></carp-nav>
    <p>- Tab -</p>
    <carp-tab
      :data="tab.data"
      border
      :indicator-width="20"
      v-model="tab.index"
    ></carp-tab>
    <br />
    <carp-tab
      :data="tab.data"
      v-model="tab.index"
      :width="1 / 2"
      :scroll-x="true"
    ></carp-tab>
    <p>- Scroll -</p>
    <div style="height: 80px;">
      <carp-scroll :scrollbar="true">
        <ul>
          <li v-for="value in 10" :key="value">{{ value }}</li>
        </ul>
      </carp-scroll>
    </div>
    <br />
    <carp-scroll :scroll-x="true">
      <div class="scrollx">
        <div class="scrollx-item">1</div>
        <div class="scrollx-item">2</div>
        <div class="scrollx-item">3</div>
        <div class="scrollx-item">4</div>
        <div class="scrollx-item">5</div>
        <div class="scrollx-item">6</div>
      </div>
    </carp-scroll>
  </div>
</template>

<script>
export default {
  name: 'carp',
  data() {
    return {
      testData: ['aaa', 'bbb', 'ccc', 'ddd', 'eee'],
      off: {
        status: false
      },
      nav: {
        data: [
          { name: '接机' },
          { name: '送机' },
          { name: '境外接送机' },
          { name: '定制用车' }
        ],
        index: 0
      },
      tab: {
        data: [
          { name: '接机' },
          { name: '送机' },
          { name: '接机' },
          { name: '送机' },
          { name: '接机' }
        ],
        index: 0
      }
    };
  },
  methods: {
    onNavClick(id) {
      console.log('onNavClick:', id);
    }
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
    .carp-loading
      display inline-block
  .scrollx
    width 81px * 10
    overflow hidden
    &-item
      float left
      width 80px
      border-right 1px solid #000
</style>
