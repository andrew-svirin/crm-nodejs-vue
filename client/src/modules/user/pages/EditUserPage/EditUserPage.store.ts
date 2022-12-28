import type { Commit } from 'vuex';
import type User from '@/modules/user/types/User.d';
import UserApiClient from '@/modules/user/services/UserApiClient';

const SET_USER: string = 'SET_USER';

export default {
  namespaced: true,

  state: {
    user: {} as User,
  },

  mutations: {
    SET_USER: (state: any, user: User): void => {
      state.user = user;
    },
  },

  actions: {
    fetchUser: async ({commit}: { commit: Commit }, id: string) => {
      const {data} = await UserApiClient.get(id);

      commit(SET_USER, data);
    },
  }
};
