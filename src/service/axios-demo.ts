import axios from 'axios'

// axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
//   console.log(res)
// })

axios.defaults.baseURL = 'http://httpbin.org'
axios.defaults.timeout = 10000
// axios.defaults.headers = {}
// axios
//   .get('/get', {
//     params: {
//       name: 'cxz',
//       age: 18
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

// axios
//   .post('/post', {
//     data: {
//       name: 'cxz',
//       age: 18
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

// axios.interceptors.request.use(
//   (config) => {
//     console.log('请求拦截成功')
//     return config
//   },
//   (err) => {
//     console.log('发送请求失败')
//     return err
//   }
// )
// axios.interceptors.response.use(
//   (config) => {
//     console.log('相应成功的拦截')
//     return config
//   },
//   (err) => {
//     console.log('服务器相应失败')
//     return err
//   }
// )
