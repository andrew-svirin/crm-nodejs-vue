import type { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface RequestOptions extends AxiosRequestConfig {
  authorized?: boolean,
}

export interface Response extends AxiosResponse {
  data: any,
}
