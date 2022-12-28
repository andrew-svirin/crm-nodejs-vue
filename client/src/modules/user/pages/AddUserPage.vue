<template>
  <v-container fluid>
    <v-row>
      <v-col>

        <h2 class="mb-4">Add new user</h2>

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
import { ref, type Ref } from 'vue';
import type { Form } from '@/components/Form/Form.d';
import UserApiClient from '@/modules/user/services/UserApiClient';

const uniqueId = new Date().valueOf();

const userFormRef: Ref<Form | undefined> = ref(undefined);
const userForm: Ref<UserFormType> = ref({
  email: `some-test-email+${uniqueId}@test.test`,
  username: `some-test-email+${uniqueId}`,
  password: 'some-test-password',
});

const onSubmit = async () => {
  const {valid = false} = await userFormRef.value?.validate() || {};

  if (!valid) {
    return console.warn('Fields validation error');
  }

  await UserApiClient.create(userForm.value).then(async ({data: user}) => {
      console.info(`User ${user._id} was added`);

      await userFormRef.value?.reset();
    }
  ).catch(err => console.warn('Add user errors', err.response));
};
</script>
