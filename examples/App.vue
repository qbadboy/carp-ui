<template>
  <div id="carp">
    <div>CARP</div>
    <p>- iconFont -</p>
    <div style="color: #092a44">
      <carp-iconfont
        v-for="icon in icons"
        :key="`icon-${icon}`"
        :name="icon"
      ></carp-iconfont>
    </div>
    <p>- Button -</p>
    <carp-button>TEST</carp-button>
    <br />
    <carp-button loading>TEST</carp-button>
    <br />
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
      scroll-x
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
      <carp-scroll scrollbar>
        <div>
          <div v-for="value in 10" :key="value">- 列表{{ value }} -</div>
        </div>
      </carp-scroll>
    </div>
    <br />
    <carp-scroll :scroll-x="true">
      <div class="scrollx">
        <div v-for="i in 10" :key="i" class="scrollx-item">- 列表{{ i }} -</div>
      </div>
    </carp-scroll>
    <p>- Input -</p>
    <carp-input v-model="input.value" placeholder="测试测试">
      <template slot="action"
        >删除</template
      >
    </carp-input>
    <br />
    <carp-input v-model.trim="input.value" placeholder="测试测试"></carp-input>
  </div>
</template>

<script>
export default {
  name: 'carp',
  data() {
    return {
      input: {
        value: ''
      },
      icons: [
        'del',
        'minus',
        'plus',
        'close',
        'success',
        'arrow-top',
        'arrow-right',
        'user',
        'love',
        'coupon'
      ],
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
    width 80px * 10
    overflow hidden
    &-item
      float left
      width 80px
</style>
