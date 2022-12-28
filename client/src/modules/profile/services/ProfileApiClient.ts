import ApiClient from '@/services/ApiClient';
import { type Response } from '@/services/ApiClient.d';
import type Profile from '@/modules/profile/types/Profile';

export default {
  getCurrent: async (): Promise<{ data: Profile } & Response> =>
    ApiClient.get('/profile/get-current', {authorized: true})
};
