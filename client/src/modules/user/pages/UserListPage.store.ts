import type User from '@/modules/user/types/User';
import { type Commit } from 'vuex';
import { getUsers } from '@/modules/user/services/UserApiClient';

const SET_USERS: string = 'SET_USERS';

export default {
  namespaced: true,

  state: {
    users: [] as User[]
  },

  mutations: {
    SET_USERS: (state: any, users: User[]): void => {
      state.users = users;
    },
  },

  actions: {
    getUsers: async ({commit}: { commit: Commit }) => {
      const {data} = await getUsers();

      commit(SET_USERS, data);
    },
  },
};
