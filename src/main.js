import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './assets/styles/main.scss'



const app = createApp(App)
app.use(router)
app.use(ElementPlus)


// init AOS after app mounted
app.mount('#app')
AOS.init({ once: true, duration: 700 })