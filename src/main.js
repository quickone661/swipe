import './assets/main.css'


import { createApp } from 'vue'
import { createPinia } from 'pinia'

//antdv
import { Steps } from 'ant-design-vue';
import { Form } from 'ant-design-vue';
import { Input } from 'ant-design-vue';


//vuetify
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Steps)
app.use(Form)
app.use(Input)
app.use(vuetify)

app.mount('#app')
