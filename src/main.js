import { createApp } from 'vue'
// import { createVuetify } from 'vuetify'
// import * as components from 'vuetify/components'
import App from './App.vue'
import router from './router'

const app = createApp(App)
// const vuetify = createVuetify(components)

app.use(router)
// app.use(vuetify)

app.mount('#app')
