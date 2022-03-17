<script>
import { useMessage } from 'naive-ui';
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    window.$message = useMessage();
  },
});
</script>

<template>
  <div></div>
</template>

<style scoped></style>
