<template>
  <div>
    <p>
      默认 [index]:{{nav.index}}
      <carp-nav :data="nav.data" v-model="nav.index"></carp-nav>
    </p>
    <br>
    <p>
      关闭动画
      <carp-nav :data="nav.data" v-model="nav.index" :animation="false"></carp-nav>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: {
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

