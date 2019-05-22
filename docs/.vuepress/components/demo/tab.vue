<template>
  <div>
    <p>
      [点]
      <carp-tab
        indicator-type="point"
        :tabs="tab1.option"
        :is-animation="true"
        :is-scroll="true"
      ></carp-tab>
    </p>
    <p>
      [下划线] - 动画禁用
      <carp-tab :tabs="tab1.option" :font-size="fontSize" v-model="tab1.index">
        <div v-show="tab1.index == 0">北京 - 武汉</div>
        <div v-show="tab1.index == 1">武汉 - 北京</div>
      </carp-tab>
    </p>
    <br>
    <p>
      [下划线] - 动画开启
      <carp-tab :tabs="tab2.option" v-model="tab2.index" :is-animation="true">
        <div v-show="tab2.index == 0">北京 - 武汉</div>
        <div v-show="tab2.index == 1">武汉 - 北京</div>
      </carp-tab>
    </p>
    <br>
    <p>
      [下划线] - tab禁用
      <carp-tab :tabs="tab3.option" :is-animation="true" :is-scroll="true"></carp-tab>
    </p>
    <p>
      [下划线] - 自定义
      <carp-tab :tabs="tab2.option" :is-animation="true" :color="'#F60'"></carp-tab>

      <carp-tab
        :tabs="tab2.option"
        :is-animation="true"
        :indicator-color="'#F60'"
        :indicator-width="8"
        :indicator-heihgt="4"
      ></carp-tab>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fontSize: 26,
      tab1: {
        option: [{ name: '接机' }, { name: '送机' }],
        index: 0
      },
      tab2: {
        option: [{ name: '接机' }, { name: '送机' }],
        index: 0
      },
      tab3: {
        option: [
          { name: '可点击' },
          { name: '禁用了', disabled: true },
          { name: '可点击' }
        ]
      }
    };
  }
};
</script>

