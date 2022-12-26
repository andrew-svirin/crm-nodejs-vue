<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <h2>Delete user <b>{{ user._id }} <i>({{ user.username }})</i></b>?</h2>

        <v-btn
          @click="onSubmit"
          color="error"
          class="mr-4"
        >
          Delete
        </v-btn>
        <v-btn to="/users">Close</v-btn>
      </v-col>
    </v-row>
  </v-container>

</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import { onMounted, ref, type Ref } from 'vue';
import { useStore } from 'vuex';
import type User from '@/modules/user/types/User.d';

const store = useStore();
const router = useRouter();

let user: Ref<User> = ref({});

onMounted(() => {
  user.value = {
    _id: String(router.currentRoute.value.params.id),
    username: String(router.currentRoute.value.query.username),
  };
});

const onSubmit = async () => {
  await store.dispatch('user/deleteUser', user.value?._id);

  console.info(`User ${user.value?._id} was deleted`);

  await router.push('/users');
};
</script>
