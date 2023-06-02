import { createApp } from 'vue'
import './main.scss'
import DA from '@views/dataAnalysis/index.vue'

import { createPinia } from 'pinia'

const app = createApp(DA);

const pinia = createPinia();
app.use(pinia);

app.mount('#DA');