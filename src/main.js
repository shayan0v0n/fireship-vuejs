import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.vue'
import router from './routes'

library.add(fas)

const app = createApp(App)
app.use(router)
app.component('fa', FontAwesomeIcon)

app.mount('#app')
