import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import './service/axios-demo'
import xzRequest from './service'
import { globalRegister } from './global'

// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

const app = createApp(App)
// app.use(ElementPlus)

// globalRegisterApp(app)
app.use(globalRegister)
app.use(router)
app.use(store)
app.mount('#app')

xzRequest.request({
  url: '/home/multidata',
  method: 'GET'
})

// console.log(process.env.VUE_APP_BASE_URL)
// console.log(process.env.VUE_APP_BASE_NAME)
