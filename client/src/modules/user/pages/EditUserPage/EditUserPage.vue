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

const store = useStore();
const router = useRouter();

const user: Ref<User | undefined> = ref(undefined);
const userFormRef: Ref<Form | undefined> = ref(undefined);
const userForm: Ref<UserFormType> = ref({});

onMounted(async () => {
  user.value = {
    _id: String(router.currentRoute.value.params?.id),
    username: String(router.currentRoute.value.query?.username),
    email: String(router.currentRoute.value.query?.email),
  };

  await store.dispatch('user/EditUserPage/setUser', user.value);

  Object.assign(userForm.value, store.state.user.EditUserPage.userForm);
});

const onSubmit = async () => {
  const {valid = false} = await userFormRef.value?.validate() || {};

  if (!valid) {
    return console.warn('Fields validation error');
  }

  await store.dispatch('user/EditUserPage/setUserForm', userForm.value);

  user.value = await store.dispatch('user/editUser', {
    id: user.value?._id,
    user: await store.getters['user/EditUserPage/getUser'],
  });

  console.info(`User ${user.value?._id} was edited`);
};
</script>
