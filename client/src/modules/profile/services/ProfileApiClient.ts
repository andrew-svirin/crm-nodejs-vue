import ApiClient from '@/services/ApiClient';
import { type Response } from '@/services/ApiClient.d';
import type Profile from '@/modules/profile/types/Profile';

export const getProfile = async (): Promise<{ data: Profile } & Response> =>
  ApiClient.get('/profile/get-profile', {authorized: true});
