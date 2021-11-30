import { AxiosRequestConfig, AxiosResponse } from 'axios'

interface XZRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch?: (err: any) => any
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  responseInterceptorsCatch?: (err: any) => any
}

interface XZRequestConfig extends AxiosRequestConfig {
  interceptors?: XZRequestInterceptors
}

export { XZRequestInterceptors, XZRequestConfig }
