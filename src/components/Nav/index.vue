<template>
  <div class="carp-nav">
    <div class="carp-nav-scroll" ref="carp-nav-scroll">
      <div class="carp-nav-items">
        <div
          v-for="(nav, idx) in data"
          :key="`nav-item-${idx}`"
          class="carp-nav-item"
          :class="{ active: idx === current }"
          ref="carp-nav-item"
          @click="onClick(idx)"
        >
          {{ nav.name }}
        </div>
        <div class="carp-nav-indicator" ref="carp-nav-indicator"></div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
import debounce from '../../utils/debounce';
import { prefixStyle } from '../../utils/dom';

export default {
  name: 'carp-nav',
  props: {
    data: {
      type: Array,
      default: () => {}
    },
    current: { type: Number, default: 0 },
    animation: { type: Boolean, default: true }
  },
  model: {
    event: 'nav:click',
    prop: 'current'
  },
  methods: {
    onClick(idx) {
      this.$emit('nav:click', idx);
      this.setIndicatorPosition(idx);
    },
    setIndicatorPosition(index, animation = true) {
      const indicator = this.$refs['carp-nav-indicator'].style;
      const TRANSFORM = prefixStyle('transform');
      const TRANSITION = prefixStyle('transition');

      let translateX = this.getOffSetLeft(index) + 'px';
      console.log(translateX);

      if (this.animation && animation) {
        TRANSITION && (indicator[TRANSITION] = `all .2s linear`);
      }

      TRANSFORM &&
        (indicator[TRANSFORM] = `translateX(${translateX}) translateZ(0)`);
    },
    getOffSetLeft(idx) {
      const navItem = this.$refs['carp-nav-item'][idx];
      const indicator = this.$refs['carp-nav-indicator'];

      let navItemWidth = navItem.clientWidth;
      let navItemOffsetLeft = navItem.offsetLeft;
      let indicatorWidth = indicator.clientWidth;

      return navItemOffsetLeft + (navItemWidth - indicatorWidth) / 2;
    },
    _initScroll() {
      if (this.scroll) return;
      this.scroll = new BScroll(this.$refs['carp-nav-scroll'], {
        scrollX: true,
        click: true
      });
    },
    scrollRefresh() {
      this.scroll && this.scroll.refresh();
    },
    onResize() {
      const fn = debounce(this.scrollRefresh);
      window.addEventListener('resize', fn);
    }
  },
  mounted() {
    this._initScroll();
    this.setIndicatorPosition(this.current, false);
    this.onResize();
  }
};
</script>

<style lang="stylus">
.carp-nav
  overflow hidden
  &-scroll
    display flex
  &-items
    flex 1
    padding-bottom nav-indicator-size + 6px
    white-space nowrap
    vertical-align baseline
    position relative
  &-item
    display inline-block
    padding 0 nav-item-padding
    font-size nav-text-size
    font-weight nav-text-weight
    line-height 1.4
    opacity 0.3
    &.active
      font-weight nav-text-weight-active
      opacity 1
  &-indicator
    position absolute
    left 0
    bottom 0
    width nav-indicator-size
    height nav-indicator-size
    background-color nav-indicator-color
    border-radius (nav-indicator-size / 2)
</style>
