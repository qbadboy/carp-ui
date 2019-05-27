<template>
  <i class="carp-iconfont" :class="`carp-icon-${name}`"></i>
</template>

<script>
export default {
  name: 'carp-icon',
  props: {
    name: {
      type: String,
      required: true
    }
  }
};
</script>
