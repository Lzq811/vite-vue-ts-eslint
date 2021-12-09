import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import 'amfe-flexible'
import router from './routes/index'
import 'element-plus/dist/index.css'
import './assets/styles/reset.less'

const app = createApp(App)

app.use(router).use(ElementPlus, { size: 'small', zIndex: 100 }).mount('#app')
