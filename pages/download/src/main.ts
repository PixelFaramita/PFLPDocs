import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import Equal from 'equal-vue'
import Config from 'equal-vue/dist/theme/full' // or light / dark theme
const app = createApp(App)
Equal.install(app, Config)
app.mount('#app')
