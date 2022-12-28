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
import type User from '@/modules/user/types/User.d';
import UserApiClient from '@/modules/user/services/UserApiClient';

const router = useRouter();

let user: Ref<User> = ref({});

const setupUser = () => {
  user.value = {
    _id: String(router.currentRoute.value.params.id),
    username: String(router.currentRoute.value.query.username),
  };
};

onMounted(() => {
  setupUser();
});

const onSubmit = async () => {
  await UserApiClient.delete(String(user.value?._id))
    .then(() => console.info(`User ${user.value?._id} was deleted`))
    .catch(err => console.warn('Delete user errors', err.response));

  await router.push('/users');
};
</script>
