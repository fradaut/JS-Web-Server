import { createApp } from 'vue'
import App from './vuedoc/App.vue'
import './main.css'
import index from './index/index.vue'

createApp(App).mount('#app')
createApp(index).mount('#index')