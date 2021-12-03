import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { XZRequestInterceptors, XZRequestConfig } from './type'
import { ElLoading } from 'element-plus'
import { ILoadingInstance } from 'element-plus/es/components/loading/src/loading.type'

class XZRequest {
  instance: AxiosInstance
  interceptors?: XZRequestInterceptors
  showLoading: boolean
  loading?: ILoadingInstance

  constructor(config: XZRequestConfig) {
    this.instance = axios.create(config)
    this.showLoading = config.showLoading ?? true
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

        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '请求中...',
            background: 'rgba(0, 0, 0, 0.1)'
          })
        }
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
        setTimeout(() => {
          this.loading?.close()
        }, 1000)
        return res
      },
      (err) => {
        console.log('所有的实例都有的拦截器 响应失败的拦截')
        setTimeout(() => {
          this.loading?.close()
        }, 1000)

        return err
      }
    )
  }

  request<T>(config: XZRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          this.showLoading = true
          resolve(res)
        })
        .catch((err) => {
          this.showLoading = true
          reject(err)
        })
    })
  }
  get<T>(config: XZRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }
      this.instance
        .request<any, T>({ ...config, method: 'GET' })
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          this.showLoading = true
          resolve(res)
        })
        .catch((err) => {
          this.showLoading = true
          reject(err)
        })
    })
  }
  post<T>(config: XZRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }
      this.instance
        .request<any, T>({ ...config, method: 'POST' })
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          this.showLoading = true
          resolve(res)
        })
        .catch((err) => {
          this.showLoading = true
          reject(err)
        })
    })
  }
  delete<T>(config: XZRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }
      this.instance
        .request<any, T>({ ...config, method: 'DELETE' })
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          this.showLoading = true
          resolve(res)
        })
        .catch((err) => {
          this.showLoading = true
          reject(err)
        })
    })
  }
  patch<T>(config: XZRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }
      this.instance
        .request<any, T>({ ...config, method: 'PATCH' })
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          this.showLoading = true
          resolve(res)
        })
        .catch((err) => {
          this.showLoading = true
          reject(err)
        })
    })
  }
}

export default XZRequest
