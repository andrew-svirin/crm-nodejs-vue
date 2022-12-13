import type { Commit } from 'vuex';
import ApiClient from '@/services/ApiClient';
import type Profile from '@/modules/profile/types/Profile';

const SET_PROFILE: string = 'SET_PROFILE';

export default {
  namespaced: true,

  state: {
    profile: {} as Profile,
  },

  mutations: {
    SET_PROFILE: (state: any, profile: Profile): void => {
      state.profile = profile;
    },
  },

  actions: {
    getProfile: async ({commit}: { commit: Commit }) => {
      const {data} = await ApiClient.get('/profile/get-profile', {authorized: true});

      commit(SET_PROFILE, data);
    },
  },
};
