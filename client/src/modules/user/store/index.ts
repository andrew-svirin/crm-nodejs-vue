import type { Dispatch } from 'vuex';
import UserListPage from '@/modules/user/pages/UserListPage/UserListPage.store';
import EditUserPage from '@/modules/user/pages/EditUserPage/EditUserPage.store';
import UserApiClient from '@/modules/user/services/UserApiClient';

export default {
  namespaced: true,

  modules: {
    UserListPage,
    EditUserPage,
  },

  actions: {

    deleteUser: async ({dispatch}: { dispatch: Dispatch }, id: string) =>
      UserApiClient.delete(id),
  },
};
