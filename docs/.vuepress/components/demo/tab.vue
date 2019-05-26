<template>
  <div>
    <p>
      默认 [index]:{{tab1.index}}
      <carp-tab :data="tab1.data" v-model="tab1.index"></carp-tab>
    </p>
    <br>
    <p>
      设置border、indicatorWidth [index]:{{tab2.index}}
      <carp-tab
        :data="tab2.data"
        v-model="tab2.index"
        border
        :indicator-width="20"
      ></carp-tab>
    </p>
    <br>
    <p>
      开启x轴滚动 [index]:{{tab3.index}}
      <carp-tab :data="tab3.data" v-model="tab3.index" scroll-x></carp-tab>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab1: {
        data: [{ name: '接机' }, { name: '送机' }],
        index: 0
      },
      tab2: {
        data: [{ name: '接机' }, { name: '送机' }],
        index: 0
      },
      tab3: {
        data: [
          { name: '接机' },
          { name: '送机' },
          { name: '接站' },
          { name: '送站' },
          { name: '境外接送机' },
          { name: '定制用车' }
        ],
        index: 0
      }
    };
  }
};
</script>

