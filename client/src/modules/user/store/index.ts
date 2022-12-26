import type { Dispatch } from 'vuex';
import type User from '@/modules/user/types/User.d';
import UserListPage from '@/modules/user/pages/UserListPage/UserListPage.store';
import AddUserPage from '@/modules/user/pages/AddUserPage/AddUserPage.store';
import EditUserPage from '@/modules/user/pages/EditUserPage/EditUserPage.store';
import UserApiClient from '@/modules/user/services/UserApiClient';

export default {
  namespaced: true,

  modules: {
    UserListPage,
    AddUserPage,
    EditUserPage,
  },

  actions: {
    userWasAdded: async ({dispatch}: { dispatch: Dispatch }) => await dispatch('AddUserPage/resetUserForm'),

    addUser: async ({dispatch}: { dispatch: Dispatch }, user: User) => {
      const response = await UserApiClient.create(user);

      await dispatch('userWasAdded');

      return response;
    },

    editUser: async ({dispatch}: { dispatch: Dispatch }, {id, user}: { id: number, user: User }) =>
      UserApiClient.update(id, user),

    deleteUser: async ({dispatch}: { dispatch: Dispatch }, id: number) =>
      UserApiClient.delete(id),
  },
};
