import { createApp } from 'vue';
import App from './App.vue';

import './css/tailwind.css';
import { createPinia } from 'pinia';
import router from './router/index';
const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount('#app');
