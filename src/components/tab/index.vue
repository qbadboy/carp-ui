<template>
  <div v-if="tabs.length > 0" ref="carp-tab" class="carp-tab">
    <div
      class="carp-tab-box"
      :style="{ 'overflow-x': (!scroll && 'hidden') || 'auto' }"
    >
      <div ref="carp-tab-inner" class="carp-tab-inner" :class="{ flex }">
        <div
          v-for="(tab, idx) in tabs"
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
    <div v-if="$slots.default" ref="carp-tab-main" class="carp-tab-main">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import anime from 'animejs';
import { propValidator as checkValue, px2vw } from '../../utils';

export default {
  name: 'carp-tab',
  model: {
    prop: 'current',
    event: 'click:tab'
  },
  props: {
    point: Boolean,
    flex: Boolean,
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
    current: { type: Number, default: 0 },
    color: String,
    fontSize: Number,
    lineHeight: Number,
    indicatorWidth: Number,
    indicatorColor: String,
    duration: { type: Number, default: 800 },
    animation: Boolean,
    scroll: Boolean
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
      this.mainMove();
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

      let animeOptions = {
        targets: indicator,
        translateX,
        duration
      };

      // 禁用tab动画
      if (!animation || !isAnimation) {
        animeOptions.duration = 0;
      }

      if (!point) {
        animeOptions.width = propIndicatorWidth || tabItemWidth;
        animeOptions.background = indicatorColor;
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
        duration: this.animation ? this.duration : 0
      });
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
</style>
