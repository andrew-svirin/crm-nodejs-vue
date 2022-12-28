import { type Response } from '@/services/ApiClient.d';
import ApiClient from '@/services/ApiClient';
import type User from '@/modules/user/types/User.d';

export default {
  get: async (id: string): Promise<{ data: User } & Response> =>
    ApiClient.get(`/user/${id}/get`, {
      authorized: true
    }),

  getList: async (page: number): Promise<{ data: User[] } & Response> =>
    ApiClient.get('/user/get-list', {
      params: {
        page,
      },
      authorized: true
    }),

  create: async (data: {}): Promise<{ data: User } & Response> =>
    ApiClient.post('/user/create', data, {
      authorized: true
    }),

  update: async (id: string, data: {}): Promise<{ data: User } & Response> =>
    ApiClient.put(`/user/${id}/update`, data, {
      authorized: true
    }),

  delete: async (id: string): Promise<{ data: User } & Response> =>
    ApiClient.delete(`/user/${id}/delete`, {
      authorized: true
    }),
};
