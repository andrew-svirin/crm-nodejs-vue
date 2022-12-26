<template>
  <v-container fluid>
    <v-row>
      <v-col>

        <h2>Add new user</h2>

        <user-form ref="userFormRef" v-model:form="userForm" />

        <v-btn
          @click="onSubmit"
          color="primary"
          class="mr-4"
        >
          Create
        </v-btn>

        <v-btn to="/users">Close</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import UserForm from '@/modules/user/components/UserForm/UserForm.vue';
import type UserFormType from '@/modules/user/components/UserForm/UserForm.d';
import { useStore } from 'vuex';
import { ref, type Ref } from 'vue';
import type { Form } from '@/components/Form/Form.d';

const store = useStore();

const userFormRef: Ref<Form | undefined> = ref(undefined);
const userForm: Ref<UserFormType> = ref({});

const onSubmit = async () => {
  const {valid = false} = await userFormRef.value?.validate() || {};

  if (!valid) {
    return console.warn('Fields validation error');
  }

  await store.dispatch('user/AddUserPage/setUserForm', userForm.value);

  const user = await store.dispatch('user/addUser', await store.getters['user/AddUserPage/getUser']);

  console.info(`User ${user._id} was added`);

  await userFormRef.value?.reset();
};
</script>
