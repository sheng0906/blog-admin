<script setup>
import { NMessageProvider } from 'naive-ui';
import ABc from '../src/components/ABc.vue';
// import { userStore } from './pinia/index';
// import { login } from '../utils/api';
// const store = userStore();
</script>

<template>
  <n-message-provider>
    <ABc />
  </n-message-provider>
  <router-view></router-view>
</template>

<style></style>
