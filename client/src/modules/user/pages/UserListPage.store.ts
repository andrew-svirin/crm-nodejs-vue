import type User from '@/modules/user/types/User';
import { type Commit } from 'vuex';
import ApiClient from '@/services/ApiClient';

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
      const {data} = await ApiClient.get('/user/get-users', {authorized: true});

      commit(SET_USERS, data);
    },
  },
};
