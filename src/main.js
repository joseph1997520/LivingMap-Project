import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Test from '@/components/Test.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import axios from 'axios'
import VueAxios from 'vue-axios'


const app = createApp(App);

app.component("Test",Test),
app.use(router),
app.use(VueAxios, axios),
app.mount('#app')
