import LoginForm from '@/modules/login/components/LoginForm';
import ApiClient from '@/services/ApiClient';

export const authenticateUser = async (loginForm: LoginForm): Promise<{ data: { token: string } }> =>
  ApiClient.post('login/authenticate-user', loginForm);
