import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import App from './App.vue'
import 'amfe-flexible'
import router from './routes/index'
import YComponents from '@components/index'
import 'element-plus/dist/index.css'
import './assets/styles/reset.less'

const app = createApp(App)
app.use(router)
app.use(ElementPlus, { locale: zhCn, size: 'small', zIndex: 100 })
app.use(YComponents)
app.mount('#app')
