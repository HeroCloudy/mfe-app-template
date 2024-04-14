import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { installRouter } from './router'
import { installAssets } from '@/plugins/assets'
import { installElementPlus } from '@/plugins/element'

const app = createApp(App)

app.use(createPinia())
installRouter(app)
installElementPlus(app)
installAssets()

app.mount('#app')
