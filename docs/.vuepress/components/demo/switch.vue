<template>
  <div>
    <carp-switch v-model="status"/>
    <br>
    状态: {{status}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: true
    };
  }
};
</script>

