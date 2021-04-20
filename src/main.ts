import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'

// Router
import router from './router/index'
// Store
import store from './store/index'
// Element Plus
import 'element-plus/lib/theme-chalk/index.css'

createApp(App).use(router).use(store).use(ElementPlus).mount('#app')
