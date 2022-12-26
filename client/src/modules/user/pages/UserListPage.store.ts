import type User from '@/modules/user/types/User';
import { type Commit } from 'vuex';
import { getUsers } from '@/modules/user/services/UserApiClient';
import type { ItemsPage } from '@/components/ItemList/ItemList';

const SET_USERS: string = 'SET_USERS';
const SET_PER_PAGE: string = 'SET_PER_PAGE';
const SET_TOTAL: string = 'SET_TOTAL';
const SET_PAGE: string = 'SET_PAGE';

export default {
  namespaced: true,

  state: {
    users: [] as User[],
    perPage: 0,
    total: 0,
    page: 1,
  },

  mutations: {
    SET_USERS: (state: any, users: User[]): void => {
      state.users = users;
    },
    SET_PER_PAGE: (state: any, perPage: number): void => {
      state.perPage = perPage;
    },
    SET_TOTAL: (state: any, total: number): void => {
      state.total = total;
    },
    SET_PAGE: (state: any, page: number): void => {
      state.page = page;
    },
  },

  getters: {
    getTableBody: async (state: any): Promise<ItemsPage> => ({
      rows: state.users,
      page: state.page,
      perPageRows: state.perPage,
      totalRows: state.total
    } as ItemsPage)
  },

  actions: {
    fetchUsers: async ({commit}: { commit: Commit }, page: number) => {
      commit(SET_PAGE, page);

      const response = await getUsers(page);

      commit(SET_PER_PAGE, Number(response.headers['x-per-page-items']));
      commit(SET_TOTAL, Number(response.headers['x-total-items']));
      commit(SET_USERS, response.data);
    },
  },
};
