import { createApp } from 'vue'
import { createGtag } from 'vue-gtag'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(createGtag({ tagId: 'G-NR9ZJ7PEN9' }))

app.mount('#app')
