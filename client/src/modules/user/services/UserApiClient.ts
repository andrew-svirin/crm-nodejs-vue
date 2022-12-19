import ApiClient from '@/services/ApiClient';
import type User from '@/modules/user/types/User';

export const getUsers = async (): Promise<{ data: User[] }> =>
  ApiClient.get('/user/get-users', {authorized: true});
