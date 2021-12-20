import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { setupStore } from './store'
import 'normalize.css'
import './assets/css/index.less'
// import './service/axios-demo'
// import xzRequest from './service'
import { globalRegister } from './global'

const app = createApp(App)
// app.use(ElementPlus)

// globalRegisterApp(app)
app.use(globalRegister)
app.use(router)
app.use(store)
app.mount('#app')

setupStore()
// interface dataType {
//   data: any
//   returnCode: string
//   success: boolean
// }

// xzRequest
//   .request<dataType>({
//     url: '/home/multidata',
//     method: 'GET',
//     showLoading: false
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

// console.log(process.env.VUE_APP_BASE_URL)
// console.log(process.env.VUE_APP_BASE_NAME)

// const toLine = (hump: string) =>
//   hump.replace(/([A-Z]|\d)/g, (l): string => `_${l.toLowerCase()}`)
// const a = toLine('myComponentTset')

// console.log(a)
