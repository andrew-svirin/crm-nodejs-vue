<template>
  <v-card class="mt-4 mb-4">
    <v-card-title>
      <div>
        <span>User List</span>
      </div>
    </v-card-title>
    <v-card-text>
      <user-list ref="userListRef" v-model:page="page" />
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import UserList from '@/modules/user/components/UserList.vue';
import { useStore } from 'vuex';
import { ref, type Ref, watch } from 'vue';
import type { ItemList } from '@/components/ItemList/ItemList.d';

const store = useStore();

const userListRef: Ref<ItemList | undefined> = ref(undefined);

let page: Ref<number | undefined> = ref(1);

const loadUsers = async (newPage: number) => {
  await store.dispatch('user/UserListPage/fetchUsers', newPage);

  userListRef.value?.updateItemsPage(await store.getters['user/UserListPage/getTableBody']);
};

watch(page, async (newPage: number) => loadUsers(newPage), {immediate: true});
</script>
