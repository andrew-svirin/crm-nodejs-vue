import { type Response } from '@/services/ApiClient.d';
import ApiClient from '@/services/ApiClient';
import type User from '@/modules/user/types/User';

export const getUsers = async (page: number): Promise<{ data: User[] } & Response> =>
  ApiClient.get('/user/get-users', {
    params: {
      page,
    },
    authorized: true
  });
