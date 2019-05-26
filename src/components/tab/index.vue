<template>
  <div class="carp-tab">
    <div class="carp-tab-scroll" :ref="`carp-tab-scroll-${id}`">
      <div class="carp-tab-items">
        <div
          v-for="(tab, idx) in data"
          :key="`tab-item-${idx}`"
          class="carp-tab-item"
          :ref="`carp-tab-item-${id}`"
          :class="{ active: idx === current, border }"
          @click="onClick(idx)"
        >
          {{ tab.name }}
        </div>
        <div class="carp-tab-indicator" :ref="`carp-tab-indicator-${id}`"></div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
import debounce from '../../utils/debounce';
import { px2vw, prefixStyle } from '../../utils/dom';

export default {
  name: 'carp-tab',
  data() {
    return {
      id: Math.random()
        .toString(36)
        .substr(2, 6)
    };
  },
  props: {
    data: {
      type: Array,
      default: () => {}
    },
    current: { type: Number, default: 0 },
    width: Number,
    border: { type: Boolean, default: false },
    indicatorWidth: Number,
    scrollX: { type: Boolean, default: false }
  },
  model: {
    event: 'tab:click',
    prop: 'current'
  },
  watch: {
    data(val, oldVal) {
      if (JSON.stringify(val) === JSON.stringify(oldVal)) return;
      this.refresh();
    },
    current(val, oldVal) {
      if (val === oldVal) return;
      this.setIndicatorPosition(val);
    }
  },
  methods: {
    onClick(idx) {
      this.$emit('tab:click', idx);
      this.setIndicatorPosition(idx);
    },
    setIndicatorPosition(idx, animation = true) {
      this.setIndicatorWidth(idx);

      let translateX = this.getOffsetLeft(idx) + 'px';

      const TRANFORM = prefixStyle('transform');
      const TRANSITION = prefixStyle('transition');
      const indicator = this.indicatorEl.style;

      if (animation) {
        indicator[TRANSITION] = `all .2s linear`;
      }
      indicator[TRANFORM] = `translateX(${translateX}) translateZ(0)`;
    },
    getOffsetLeft(idx) {
      const tabItem = this.tabItemEl[idx];
      const indicator = this.indicatorEl;

      let tabItemWidth = tabItem.clientWidth;
      let tabItemOffsetLeft = tabItem.offsetLeft;
      let indicatorWidth = indicator.clientWidth;

      return tabItemOffsetLeft + (tabItemWidth - indicatorWidth) / 2;
    },
    setIndicatorWidth(idx) {
      const tabItem = this.tabItemEl[idx];
      const indicator = this.indicatorEl.style;

      let tabItemWidth = tabItem.clientWidth;
      let width = this.indicatorWidth;

      // 判断indicatorWidth是百分比还是具体长度
      if (typeof width == 'number') {
        indicator.width = px2vw(width);
      } else {
        indicator.width = tabItemWidth + 'px';
      }
    },
    _initTabStyle() {
      let width = this.width;

      // 判断indicatorWidth是百分比还是具体长度
      if (typeof width == 'number') {
        let w = null;

        if (width < 1) {
          w = px2vw(width * this.scrollEl.clientWidth);
        } else {
          w = px2vw(width);
        }

        this.setTabItemWidth(w);
      }
    },
    setTabItemWidth(width) {
      if (!width) return;

      const tabs = this.tabItemEl;
      tabs.map(tab => {
        tab.style.width = width;
      });
    },
    refresh() {
      this._queryDOM();
      // 重新计算scroll
      this.scroll && this.scroll.refresh();
      // 重新定位indicator
      this.setIndicatorPosition(this.current, false);
    },
    _initScroll() {
      if (this.scroll) return;

      this.scroll = new BScroll(this.scrollEl, {
        scrollX: this.scrollX,
        click: true
      });
    },
    onResize() {
      let fn = debounce(this.refresh, 500);
      window.addEventListener('resize', fn);
    },
    _queryDOM() {
      let { id } = this;
      this.scrollEl = this.$refs[`carp-tab-scroll-${id}`];
      this.tabItemEl = this.$refs[`carp-tab-item-${id}`];
      this.indicatorEl = this.$refs[`carp-tab-indicator-${id}`];
    },
    init() {
      this._queryDOM();
      this._initTabStyle();
      this._initScroll();
      this.setTabItemWidth();
      this.setIndicatorPosition(this.current, false);
    }
  },
  mounted() {
    this.init();
    this.onResize();
  }
};
</script>

<style lang="stylus">
.carp-tab
  overflow hidden
  &-scroll
    display flex
  &-items
    flex 1
    padding-bottom 10px
    white-space nowrap
    vertical-align baseline
    position relative
  &-item
    display inline-block
    padding 0 tab-item-padding
    text-align center
    font-size tab-text-size
    font-weight tab-text-weight
    line-height 1
    color tab-text-color
    box-sizing border-box
    &.active
      font-weight tab-text-weight-active
      color tab-text-color-active
    &.border
      border-right 1px solid tab-border-color
    &:nth-last-of-type(2)
      &.border
        border-right none
  &-indicator
    width tab-indicator-width
    height tab-indicator-height
    background-color tab-indicator-color
    position absolute
    left 0
    bottom 0
</style>
