<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <h2>Authorization</h2>
        <login-form ref="loginFormRef" v-model:form="loginForm" />

        <v-btn
          @click="onSubmit"
          color="primary"
          class="mr-4"
        >
          Login
        </v-btn>
      </v-col>
    </v-row>
  </v-container>

</template>
<script setup lang="ts">
import LoginForm from '@/modules/login/components/LoginForm.vue';
import type LoginFormType from '@/modules/login/components/LoginForm.d';
import type { Ref } from 'vue';
import { ref } from 'vue';
import type { Form } from '@/components/Form/Form';
import { useRouter } from 'vue-router';
import { authenticateUser } from '../services/LoginApiClient';

const router = useRouter();

const loginFormRef: Ref<Form | undefined> = ref(undefined);
const loginForm: Ref<LoginFormType> = ref({
  email: 'test@email.test',
  password: 'test_password',
});

const onSubmit = async () => {
  const {valid = false} = await loginFormRef.value?.validate() || {};

  if (!valid) {
    return console.warn('Login validation error');
  }

  const {data} = await authenticateUser(loginForm.value)
    .catch((err) => console.warn(err.response?.data.message));

  localStorage.setItem('token', data.token);

  await router.push('/profile');
};
</script>
