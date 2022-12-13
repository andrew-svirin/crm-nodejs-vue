import type { Commit } from 'vuex';
import type LoginForm  from '@/modules/login/components/LoginForm.d';
import ApiClient from '@/services/ApiClient';

export default {
  namespaced: true,

  actions: {
    authenticateUser: async ({commit}: { commit: Commit }, loginForm: LoginForm) => {
      return ApiClient.post('login/authenticate-user', loginForm);
    },
  },
};
