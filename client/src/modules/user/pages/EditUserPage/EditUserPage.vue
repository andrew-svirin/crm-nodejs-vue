<template>
  <v-container fluid>
    <v-row>
      <v-col>

        <h2>Edit user <b>{{ user?.id }}</b></h2>

        <user-form ref="userFormRef" v-model:form="userForm" />

        <v-btn
          @click="onSubmit"
          color="primary"
          class="mr-4"
        >
          Update
        </v-btn>

        <v-btn to="/users">Close</v-btn>

      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import UserForm from '@/modules/user/components/UserForm/UserForm.vue';
import type UserFormType from '@/modules/user/components/UserForm/UserForm.d';
import { onMounted, ref, type Ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import type { Form } from '@/components/Form/Form';
import type User from '@/modules/user/types/User.d';
import UserApiClient from '@/modules/user/services/UserApiClient';

const store = useStore();
const router = useRouter();

const user: Ref<User | undefined> = ref(undefined);
const userFormRef: Ref<Form | undefined> = ref(undefined);
const userForm: Ref<UserFormType> = ref({});

onMounted(async () => {
  await loadUser(String(router.currentRoute.value.params?.id));

  setupUserForm();
});

const loadUser = async (id: string) => await store.dispatch('user/EditUserPage/fetchUser', id);

const setupUserForm = () => {
  const user = store.state.user.EditUserPage.user;

  userForm.value = {
    email: user.email,
    username: user.username,
  };
};

const onSubmit = async () => {
  const {valid = false} = await userFormRef.value?.validate() || {};

  if (!valid) {
    return console.warn('Fields validation error');
  }

  await UserApiClient.update(String(router.currentRoute.value.params?.id), userForm.value)
    .then(({data: user}) => console.info(`User ${user._id} was edited`))
    .catch((err) => console.warn('Edit user errors', err.response));
};
</script>
