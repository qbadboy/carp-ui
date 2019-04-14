<template>
  <div>
    <carp-switch v-model="status" :disabled="disabled"/>
    状态: {{status}}
  </div>
</template>

<script>
export default {
  data() {
    let { on } = this;
    return {
      status: on
    };
  },
  props: {
    on: Boolean,
    disabled: Boolean
  }
};
</script>

