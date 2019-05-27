<template>
  <i v-once class="carp-iconfont" :class="`carp-icon-${name}`"></i>
</template>

<script>
export default {
  name: 'carp-iconfont',
  props: {
    name: {
      type: String,
      required: true
    }
  }
};
</script>
