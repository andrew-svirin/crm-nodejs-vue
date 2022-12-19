import ApiClient from '@/services/ApiClient';
import type Profile from '@/modules/profile/types/Profile';

export const getProfile = async (): Promise<{ data: Profile }> =>
  ApiClient.get('/profile/get-profile', {authorized: true});
