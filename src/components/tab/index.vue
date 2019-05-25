<template>
  <div v-if="data.length > 0" ref="carp-tab" class="carp-tab">
    <div class="carp-tab-box">
      <div ref="carp-tab-inner" class="carp-tab-inner" :class="{ flex }">
        <div
          v-for="(tab, idx) in data"
          :key="`tab-item-${idx}`"
          ref="carp-tab-item"
          class="carp-tab-item"
          :class="{ active: current === idx }"
          :style="{
            opacity: tab.disabled && 0.3
          }"
          @click="!tab.disabled && onClickTabItem(idx, $event)"
        >
          <div class="carp-tab-content" :style="tabContentStyle">
            <slot name="icon"></slot>
            {{ tab.name }}
          </div>
        </div>
        <div
          ref="carp-tab-indicator"
          class="carp-tab-indicator"
          :class="{ point: point, bar: !point }"
        ></div>
      </div>
    </div>
    <div v-if="$slots.default || $slots.animation" class="carp-tab-main">
      <transition name="fade">
        <div class="transition-box" :key="current">
          <slot name="animation"></slot>
        </div>
      </transition>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { px2vw, prefixStyle } from '../../utils/dom';

export default {
  name: 'carp-tab',
  model: {
    prop: 'current',
    event: 'click:tab'
  },
  props: {
    point: Boolean,
    flex: Boolean,
    data: {
      type: Array,
      default: () => [],
      required: true
    },
    current: { type: Number, default: 0 },
    color: String,
    fontSize: Number,
    lineHeight: Number,
    indicatorWidth: Number,
    indicatorColor: String,
    duration: { type: Number, default: 200 },
    animation: { Boolean, default: true }
  },
  data() {
    return {
      onResizeTimer: null,
      indicatorDOM: null
    };
  },
  computed: {
    tabContentStyle() {
      let { color, fontSize, lineHeight } = this;

      return {
        color,
        fontSize: fontSize && px2vw(fontSize),
        lineHeight
      };
    }
  },
  watch: {
    current(idx, oldIdx) {
      if (idx === oldIdx) return;
      this.indicatorMoveTo(idx);
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    // tab-item指示器动画
    indicatorMoveTo(idx, isAnimation = true) {
      const {
        point,
        duration,
        animation,
        indicatorColor,
        indicatorWidth: propIndicatorWidth
      } = this;
      const tabItem = this.$refs['carp-tab-item'][idx];
      const indicator = this.$refs['carp-tab-indicator'];

      let tabItemWidth = tabItem.clientWidth;
      let indicatorWidth =
        (!point && (propIndicatorWidth || tabItemWidth)) ||
        indicator.clientWidth;
      let tabItemLeft = tabItem.offsetLeft;
      let translateX = tabItemLeft + tabItemWidth / 2 - indicatorWidth / 2;

      if (!point) {
        let width = propIndicatorWidth || tabItemWidth;

        indicator.style.width = width && `${width}px`;
        indicator.style.backgroundColor = indicatorColor;
      }

      const TIME = `${(duration / 1000).toFixed(1)}s`;

      const TRANSFORM = prefixStyle('transform');
      const TRANSITION = prefixStyle('transition');

      if (!TRANSFORM || !TRANSITION) {
        indicator.style.left = translateX + 'px';
        return;
      }

      if (animation && isAnimation) {
        indicator.style[TRANSITION] = `all ${TIME} linear`;
      }

      indicator.style[TRANSFORM] = `translateX(${translateX}px) translateZ(0)`;
    },
    // 设置滚动区域宽度
    setCarpTabInnerWidth() {
      let innerWidth = 2;
      let tabs = this.$refs['carp-tab-item'] || [];

      tabs.map(tab => {
        innerWidth += tab.clientWidth;
      });

      this.$refs['carp-tab-inner'].style.width = innerWidth + 'px';
    },
    init() {
      // 无数据时，不做初始化
      if (this.data.length <= 0) return;

      let { indicatorMoveTo, current, setCarpTabInnerWidth } = this;

      indicatorMoveTo(current, false);
      setCarpTabInnerWidth();
    },
    onClickTabItem(idx) {
      this.indicatorMoveTo(idx);

      this.$emit('click:tab', idx);
    }
  }
};
</script>

<style lang="stylus">
.carp-tab
  width 100%
  &-box
    padding-bottom 10px
  &-inner
    &.flex
      display flex
    flex-wrap nowrap
    clearfix()
    position relative
  &-item
    float left
    flex 1
    padding 0 10px
    text-align center
    line-height 2.8
    white-space nowrap
    font-weight font-weight-light
    box-sizing border-box
    opacity 0.5
    cursor pointer
    user-select none
    &.active
      font-weight font-weight-medium
      opacity 1
  &-content
    color color-black
  // 指示器
  &-indicator
    position absolute
    left 0
    bottom 0
    background-color color-primary-sub
    &.point
      width 6px
      height 6px
      border-radius 50%
    &.bar
      width 0
      height 3px
  // slot内容区域
  &-main
    padding 0 10px
    position relative
  .transition-box
    &:nth-child(2)
      position absolute
      width 100%
      top 0
  .fade-enter-active, .fade-leave-active
    transition opacity 0.5s, transform 0.8s
  .fade-enter, .fade-leave-to
    opacity 0
  .fade-enter
    transform translateX(-600px)
  .fade-leave-to
    transform translateX(600px)
</style>
