<template>
  <div v-if="tabs.length > 0" ref="carp-tab" class="carp-tab">
    <div class="carp-tab-box" :style="{ overflow: !isScroll && 'hidden' }">
      <div ref="carp-tab-inner" class="carp-tab-inner" :style="{ display }">
        <div
          v-for="(tab, idx) in tabs"
          :key="`tab-item-${idx}`"
          ref="carp-tab-item"
          class="carp-tab-item"
          :class="{ active: current === idx }"
          :style="{ opacity: tab.disabled && 0.3 }"
          @click="!tab.disabled && onClickTabItem(idx, $event)"
        >
          <div class="carp-tab-content" :style="tabContentStyle">
            {{ tab.name }}
          </div>
        </div>
        <div
          ref="carp-tab-indicator"
          class="carp-tab-indicator"
          :class="{
            bar: indicatorType === 'bar',
            point: indicatorType === 'point'
          }"
          :style="tabIndicatorStyle"
        ></div>
      </div>
    </div>
    <div v-if="$slots.default" ref="carp-tab-main" class="carp-tab-main">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import anime from 'animejs';
import { propValidator as checkValue, px2rem } from '@/utils';

export default {
  name: 'CarpTab',
  model: {
    prop: 'current',
    event: 'click:tab'
  },
  props: {
    display: {
      type: String,
      default: 'block',
      validator: val =>
        checkValue(val)({
          propName: 'display',
          keys: ['block', 'flex']
        })
    },
    current: { type: Number, default: 0 },
    tabs: {
      type: Array,
      default: () => [],
      validator: val =>
        checkValue(val)({
          propName: 'data',
          checkFn: () => {
            val.map((tab, idx) => {
              if (!tab.name) {
                console.warn(
                  `[carp-tab tabs error] 第${idx + 1}组数据中，没有取到name的值`
                );
              }
            });
          }
        })
    },
    color: { type: String },
    activeColor: { type: String },
    fontSize: { type: Number, default: 20 },
    fontWeight: { type: Number, default: 400 },
    lightHeight: { type: Number, default: 2.8 },
    indicatorType: {
      type: String,
      default: 'bar',
      validator: val =>
        checkValue(val)({
          propName: 'indicatorType',
          keys: ['bar', 'point']
        })
    },
    indicatorWidth: Number,
    indicatorHight: Number,
    indicatorColor: String,
    duration: { type: Number, default: 2000 },
    isAnimation: { type: Boolean, default: true },
    isScroll: Boolean
  },
  data() {
    return {
      onResizeTimer: null,
      indicatorDOM: null
    };
  },
  computed: {
    tabContentStyle() {
      let { color, fontSize, fontWeight, lightHeight } = this;

      return {
        color,
        fontSize: fontSize && px2rem(fontSize),
        fontWeight,
        lightHeight
      };
    },
    tabIndicatorStyle() {
      let { indicatorColor, indicatorHeight, indicatorType } = this;
      if (indicatorType === 'bar') {
        return {
          color: indicatorColor,
          height: indicatorHeight
        };
      }

      return {};
    }
  },
  watch: {
    current(idx, oldIdx) {
      if (idx === oldIdx) return;
      this.indicatorMoveTo(idx);
      this.mainMove();
    }
  },
  mounted() {
    let { init, onResize } = this;

    init();
    onResize(init);
  },
  methods: {
    // tab-item指示器动画
    indicatorMoveTo(idx, animation = true) {
      const {
        indicatorType,
        duration,
        isAnimation,
        indicatorWidth: propIndicatorWidth
      } = this;
      const tabItem = this.$refs['carp-tab-item'][idx];
      const indicator = this.$refs['carp-tab-indicator'];

      let tabItemWidth = tabItem.clientWidth;
      let indicatorWidth =
        (indicatorType === 'bar' && (propIndicatorWidth || tabItemWidth)) ||
        indicator.clientWidth;
      let tabItemLeft = tabItem.offsetLeft;

      let translateX = tabItemLeft + tabItemWidth / 2 - indicatorWidth / 2;

      let animeOptions = {
        targets: indicator,
        translateX,
        duration
      };

      // 禁用tab动画
      if (!isAnimation || !animation) {
        animeOptions.duration = 0;
      }

      if (indicatorType === 'bar') {
        animeOptions.width = propIndicatorWidth || tabItemWidth;
      }

      anime(animeOptions);
    },
    // tab content动画
    mainMove() {
      const main = this.$refs['carp-tab-main'];

      if (!main) return;
      anime({
        targets: main,
        keyframes: [
          {
            translateX: 1000,
            duration: 5 / this.duration,
            delay: 4 / this.duration
          },
          { translateX: 0 }
        ],
        duration: this.isAnimation ? this.duration : 0
      });
    },
    onResize(fn) {
      window.onresize = () => {
        clearTimeout(this.onResizeTimer);
        this.onResizeTimer = setTimeout(fn, 200);
      };
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
      if (this.tabs.length <= 0) return;

      let { indicatorMoveTo, current, setCarpTabInnerWidth } = this;
      indicatorMoveTo(current, false);

      setCarpTabInnerWidth();
    },
    onClickTabItem(idx) {
      this.indicatorMoveTo(idx);
      this.mainMove();

      this.$emit('click:tab', idx);
    }
  }
};
</script>

<style lang="stylus" scoped>
.carp-tab
  margin 0 -10px
  &-box
    padding-bottom 10px
    overflow-x auto
  &-inner
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
    &.active
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
      width 8px
      height 8px
      border-radius 50%
    &.bar
      width 100%
      height 2px
  // slot内容区域
  &-main
    padding 0 10px
</style>
