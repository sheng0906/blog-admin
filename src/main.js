import { createApp } from 'vue'
import App from './App.vue'
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'
import { createPinia } from 'pinia'


const app=createApp(App)
app.use(createPinia())
app.mount('#app')
