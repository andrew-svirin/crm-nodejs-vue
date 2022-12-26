import axios from 'axios';
import type { RequestOptions, Response } from '@/services/ApiClient.d';

export default class ApiClient {
  static readonly baseUrl: string = import.meta.env.VITE_API_BASE_URL;

  static client (options?: RequestOptions) {

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

    const config = {
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': resolveAuthorization(),
        common: {},
      }
    };

    return axios.create(config);
  }

  static get (path: string, options?: RequestOptions): Promise<Response> {
    return this.client(options).get(path, options);
  }

  static post (path: string, data: {}, options?: RequestOptions): Promise<Response> {
    return this.client(options).post(path, data, options);
  }

  static put (path: string, data: {}, options?: RequestOptions): Promise<Response> {
    return this.client(options).put(path, data, options);
  }

  static delete (path: string, options?: RequestOptions): Promise<Response> {
    return this.client(options).delete(path, options);
  }
}
