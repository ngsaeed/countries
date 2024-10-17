import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'primeflex/primeflex.css'
import 'primeflex/themes/primeone-light.css'
import 'primeicons/primeicons.css'
import './assets/styles.scss'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import IconField from 'primevue/iconfield'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import InputIcon from 'primevue/inputicon'
import FloatLabel from 'primevue/floatlabel'
import Select from 'primevue/select'
// import { definePreset } from '@primevue/themes'
// const MyPreset = definePreset(Aura, {
//   // Your customizations, see the following sections for examples
// })

createApp(App)
  .use(store)
  .use(router)
  .use(PrimeVue, {
    theme: {
      preset: Aura,
      options: {
        darkModeSelector: '.dark-theme'
      }
    }
  })
  .component('IconField', IconField)
  .component('Button', Button)
  .component('InputText', InputText)
  .component('InputIcon', InputIcon)
  .component('FloatLabel', FloatLabel)
  .component('Select', Select)
  .mount('#app')
