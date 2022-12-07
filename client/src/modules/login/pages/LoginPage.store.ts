import type { Commit } from 'vuex';
import type { LoginForm } from '@/modules/login/components/LoginForm.types';
import ApiClient from '@/services/ApiClient';

export default {
  namespaced: true,

  actions: {
    authorizeUser: async ({commit}: { commit: Commit }, loginForm: LoginForm) => {
      console.log(import.meta.env.VITE_API_BASE_URL);

      return ApiClient.post('login/authorize-user', loginForm);
    },
  },
};
