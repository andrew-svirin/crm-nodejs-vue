import axios, { type AxiosInstance, type AxiosRequestConfig, type CreateAxiosDefaults } from 'axios';
import type { RequestOptions, Response } from '@/services/ApiClient.d';

export default class ApiClient {
  static readonly baseUrl: string = import.meta.env.VITE_API_BASE_URL;

  static instance?: AxiosInstance = undefined;

  static client (): AxiosInstance {
    if (!this.instance) {
      const config = {
        baseURL: this.baseUrl,
        headers: {
          'Content-Type': 'application/json',
          common: {},
        }
      } as CreateAxiosDefaults;

      this.instance = axios.create(config);
    }

    return this.instance;
  }

  static get (path: string, options?: RequestOptions): Promise<Response> {
    return this.client().get(path, this.resolveRequestConfig(options));
  }

  static post (path: string, data: {}, options?: RequestOptions): Promise<Response> {
    return this.client().post(path, data, this.resolveRequestConfig(options));
  }

  static put (path: string, data: {}, options?: RequestOptions): Promise<Response> {
    return this.client().put(path, data, this.resolveRequestConfig(options));
  }

  static delete (path: string, options?: RequestOptions): Promise<Response> {
    return this.client().delete(path, this.resolveRequestConfig(options));
  }

  static resolveRequestConfig (options?: RequestOptions): AxiosRequestConfig {

    const resolveAuthorization = (): string | undefined => {
      if (true === options?.authorized) {
        const token = localStorage.getItem('token');

        if (!token) {
          throw Error('Missing token');
        }

        return `bearer ${token}`;
      }

      return undefined;
    };

    return {
      params: options?.params,
      headers: {
        'Authorization': resolveAuthorization(),
      }
    } as AxiosRequestConfig;
  }
}
