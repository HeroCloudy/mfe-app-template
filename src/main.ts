import { createApp } from 'vue'

import App from './App.vue'
import { installRouter } from './router'
import { installStore } from '@/stores'
import { installElementPlus } from '@/plugins/element'
import { installAssets } from '@/plugins/assets'

const app = createApp(App)

installRouter(app)
installStore(app)
installElementPlus(app)
installAssets()

app.mount('#app')
