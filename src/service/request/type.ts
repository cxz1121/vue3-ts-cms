import { AxiosRequestConfig, AxiosResponse } from 'axios'

interface XZRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch?: (err: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorsCatch?: (err: any) => any
}

interface XZRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: XZRequestInterceptors<T>
  showLoading?: boolean
}

export { XZRequestInterceptors, XZRequestConfig }
