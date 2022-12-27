import type { Dispatch } from 'vuex';
import type User from '@/modules/user/types/User.d';
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
    editUser: async ({dispatch}: { dispatch: Dispatch }, {id, user}: { id: number, user: User }) =>
      UserApiClient.update(id, user),

    deleteUser: async ({dispatch}: { dispatch: Dispatch }, id: number) =>
      UserApiClient.delete(id),
  },
};
