import axios from 'axios';

export default class ApiClient {
  static readonly baseUrl: string = import.meta.env.VITE_API_BASE_URL;

  static client () {
    return axios.create({
      baseURL: this.baseUrl,
      headers: {'Content-Type': 'application/json', common: {}}
    });
  }

  static get (path: string): Promise<Response> {
    return this.client().get(path);
  }

  static post (path: string, data: {}): Promise<Response> {
    return this.client().post(path, data);
  }
}
