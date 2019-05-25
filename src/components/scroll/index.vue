<template>
  <div class="carp-scroll" ref="carp-scroll">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
import debounce from '../../utils/debounce';

export default {
  name: 'carp-scroll',
  props: {
    // 用于scroll重新计算
    data: {
      type: Array,
      default: () => []
    },
    // 是否开启x轴方向滚动
    scrollX: Boolean,
    click: Boolean,
    // 回弹效果
    bounce: { type: Boolean, default: true },
    // 回弹时间
    bounceTime: {
      type: Number,
      default: 800
    },
    // 显示scrollbar
    scrollbar: [Boolean, Object]
  },
  watch: {
    data(val, oldVal) {
      if (JSON.stringify(val) === JSON.stringify(oldVal)) return;
      this.refresh();
    }
  },
  methods: {
    scrollTo() {
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments);
    },
    scrollToElement() {
      this.scrollToElement &&
        this.scroll.scrollToElement.apply(this.scroll, arguments);
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    onResize() {
      let fn = debounce(this.refresh);
      window.addEventListener('resize', fn);
    },
    _initScroll() {
      const el = this.$refs['carp-scroll'];
      this.scroll = new BScroll(el, {
        scrollX: this.scrollX,
        click: this.click,
        bounce: this.bounce,
        bounceTime: this.bounceTime,
        scrollbar: this.scrollbar
      });
    }
  },
  mounted() {
    this.$nextTick(() => {
      this._initScroll();
    });

    this.onResize();
  }
};
</script>

<style lang="stylus">
.carp-scroll
  width 100%
  height 100%
  overflow hidden
  position relative
</style>
