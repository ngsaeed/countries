import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'primeflex/primeflex.css'
import 'primeflex/themes/primeone-light.css'
import 'primeicons/primeicons.css'
import './assets/styles.scss'

createApp(App).use(store).use(router).mount('#app')
