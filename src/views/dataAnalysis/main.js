import { createApp } from 'vue'
import DA from '@views/dataAnalysis/index.vue'

import { createPinia } from 'pinia'

const app = createApp(DA);

const pinia = createPinia();
app.use(pinia);

app.mount('#DA');