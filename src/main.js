import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import axios from 'axios'
import VueAxios from 'vue-axios'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMap, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons'


const app = createApp(App);
library.add(faUserSecret , faLocationDot , faList , faMapLocationDot)

app.component('fa' , FontAwesomeIcon)
app.use(router),
app.use(VueAxios, axios),
app.mount('#app')
