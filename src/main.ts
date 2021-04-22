import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'

// Router
import router from './router/index'
// Store
import { key, store } from './store/index'
// Element Plus CSS
import 'element-plus/lib/theme-chalk/index.css'

const app = createApp(App)
app.use(router)
app.use(store, key)
app.use(ElementPlus)
app.mount('#app')
