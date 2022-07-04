import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { IAxiosCacheAdapterOptions } from 'axios-cache-adapter'

export interface NormalizedApiConfig extends AxiosRequestConfig {
  formate?: boolean
  silent?: boolean
  transformResponse?: (res: AxiosResponse) => any
  cache?: IAxiosCacheAdapterOptions
}

export interface ApiConfig {
  [AppName: string]: NormalizedApiConfig | NormalizedApiConfig['baseURL']
}
