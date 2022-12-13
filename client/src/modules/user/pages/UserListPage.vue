<template>
  <v-card class="mt-4 mb-4">
    <v-card-title>
      <div>
        <span>User List</span>
      </div>
    </v-card-title>
    <v-card-text>
      <user-list />
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import UserList from '@/modules/user/components/UserList.vue';
import { useStore } from 'vuex';
import { onMounted, ref, type Ref } from 'vue';
import type User from '@/modules/user/types/User';

const store = useStore();

let users: Ref<User[]> = ref([]);

onMounted(() => {
  loadUsers();
});

const loadUsers = async () => {
  await store.dispatch('user/UserListPage/getUsers');

  Object.assign(users.value, store.state.user.UserListPage.users);
};
</script>
