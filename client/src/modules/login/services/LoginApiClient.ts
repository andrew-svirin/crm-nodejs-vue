import LoginForm from '@/modules/login/components/LoginForm';
import ApiClient from '@/services/ApiClient';
import { type Response } from '@/services/ApiClient.d';

export const authenticateUser = async (loginForm: LoginForm):
  Promise<{ data: { token: string } & Response }> =>
  ApiClient.post('login/authenticate-user', loginForm);
