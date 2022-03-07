<script setup>
import { userStore } from './pinia/index';
import { login } from '../utils/api';
const store = userStore();
let res = await login({
  username: 'admin',
  password: '123456',
});
console.log(res);
</script>

<template>
  <HelloWorld />
  <button @click="store.i++">{{ store.i }}</button>
  <router-link to="/">Go to Home</router-link>
  <router-link to="/login">Go to About</router-link>
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
