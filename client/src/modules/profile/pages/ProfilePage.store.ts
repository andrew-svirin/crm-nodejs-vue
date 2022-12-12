import type { Commit } from 'vuex';
import ApiClient from '@/services/ApiClient';

export default {
  namespaced: true,

  actions: {
    getProfile: async ({commit}: { commit: Commit }) => {
      return ApiClient.get('/profile/get-profile', {authorized: true});
    },
  },
};
