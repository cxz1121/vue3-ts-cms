import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { XZRequestInterceptors, XZRequestConfig } from './type'

class XZRequest {
  instance: AxiosInstance
  interceptors?: XZRequestInterceptors

  constructor(config: XZRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    //可选拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorsCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorsCatch
    )

    //每个实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('所有的实例都有的拦截器 请求成功的拦截')
        return config
      },
      (err) => {
        console.log('所有的实例都有的拦截器 请求失败的拦截')
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        console.log('所有的实例都有的拦截器 响应成功的拦截')
        return res
      },
      (err) => {
        console.log('所有的实例都有的拦截器 响应失败的拦截')
        return err
      }
    )
  }

  request(config: XZRequestConfig): void {
    this.instance.request(config).then((res) => {
      console.log(res)
    })
  }
}

export default XZRequest
