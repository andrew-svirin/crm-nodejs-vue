import UserListPage from '@/modules/user/pages/UserListPage/UserListPage.vue';
import AddUserPage from '@/modules/user/pages/AddUserPage.vue';
import EditUserPage from '@/modules/user/pages/EditUserPage/EditUserPage.vue';
import DeleteUserPage from '@/modules/user/pages/DeleteUserPage.vue';

export default [
  {
    path: '/users',
    component: UserListPage,
  },
  {
    path: '/users/add',
    component: AddUserPage,
  },
  {
    name: 'user_edit',
    path: '/users/:id/edit',
    component: EditUserPage,
  },
  {
    name: 'user_delete',
    path: '/users/:id/delete',
    component: DeleteUserPage,
  },
];
