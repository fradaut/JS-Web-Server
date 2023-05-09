import { createApp } from 'vue'
import App from './vuedoc/App.vue'
import './main.css'
import index from './index/index.vue'
import DA from './dataAnalysis/index.vue'

createApp(App).mount('#app')
createApp(index).mount('#index')
createApp(DA).mount('#DA')