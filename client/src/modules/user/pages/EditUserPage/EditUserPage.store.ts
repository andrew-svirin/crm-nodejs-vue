import type { Commit } from 'vuex';
import type User from '@/modules/user/types/User.d';
import type UserForm from '@/modules/user/components/UserForm/UserForm.d';

const SET_USER_FORM: string = 'SET_USER_FORM';

export default {
  namespaced: true,

  state: {
    userForm: {} as UserForm,
  },

  mutations: {
    SET_USER_FORM: (state: any, userForm: UserForm): void => {
      state.userForm = userForm;
    },
  },

  getters: {
    getUser: async (state: any) => {
      const {dir, url} = state.userForm;

      return {dir, url} as User;
    },
  },

  actions: {
    setUser: ({commit}: { commit: Commit }, user: User) => {
      const {dir, url} = user;

      commit(SET_USER_FORM, {dir, url} as UserForm);
    },

    setUserForm: ({commit}: { commit: Commit }, userForm: UserForm) => {
      commit(SET_USER_FORM, userForm);
    },
  }
};
