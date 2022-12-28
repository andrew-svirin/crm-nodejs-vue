import type { Commit } from 'vuex';
import type Profile from '@/modules/profile/types/Profile';
import * as ProfileApiClient from '@/modules/profile/services/ProfileApiClient';

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
      const {data} = await ProfileApiClient.getCurrent();

      commit(SET_PROFILE, data);
    },
  },
};
